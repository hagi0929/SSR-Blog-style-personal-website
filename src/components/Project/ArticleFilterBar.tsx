"use client";

import { usePathname } from "next/navigation";
import { Tag } from "@/models/project";
import { cn } from "@/lib/utils";

async function fetchTags(path: string): Promise<Tag[]> {
  let endpoint = "";

  if (path.startsWith("/blog")) {
    endpoint = `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/tags`;
  } else if (path.startsWith("/projects")) {
    endpoint = `${process.env.NEXT_PUBLIC_SITE_URL}/api/project/tags`;
  } else {
    return [];
  }

  const response = await fetch(endpoint, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch tags: ${response.statusText}`);
  }

  return response.json() as Promise<Tag[]>;
}

export default async function ProjectFilterBar() {
  const pathname = usePathname();
  const tags = await fetchTags(pathname);

  return (
    <div className={cn("carousel-container", "overflow-x-auto", "whitespace-nowrap", "p-4")}>
      {tags.map(tag => (
        <div
          key={tag.id}
          className={cn(
            "carousel-item",
            "inline-block",
            "m-2",
            "px-4",
            "py-2",
            "bg-gray-200",
            "rounded-full",
            "cursor-pointer",
            "hover:bg-gray-300"
          )}
        >
          {tag.label}
        </div>
      ))}
    </div>
  );
}
