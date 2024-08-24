import { useEffect, useState } from "react";
import { Tag } from "@/models/project";
import { cn } from "@/lib/utils";

async function fetchProjectTagList(): Promise<Tag[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project/tags`);

  if (!response.ok) {
    throw new Error(`Failed to fetch tags: ${response.statusText}`);
  }

  const data = await response.json();
  return data as Tag[];
}

export default function ArticleFilterBar() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjectTagList()
      .then(setTags)
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <div>Error loading tags: {error}</div>;
  }

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
