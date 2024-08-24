import Image from "next/image";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {NotionItem, Tag} from "@/models/project";
import ProjectList from "@/components/Project/ProjectList";


async function fetchProjects(): Promise<NotionItem[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project`, {
    // TODO fix the revalidate logic
    next: {revalidate: 60},
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }

  const data = await response.json();
  return data as NotionItem[];
}

async function fetchProjectTagList(): Promise<Tag[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project/tags`);

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }

  const data = await response.json();
  return data as Tag[];
}

export default async function Projects() {
  const projects = await fetchProjects();
  const tags = await fetchProjectTagList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={"max-w-6xl"}><ProjectList items={projects}/></div>
    </main>
  );
}
