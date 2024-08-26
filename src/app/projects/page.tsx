import Image from "next/image";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {NotionItem, Tag} from "@/models/models";
import ProjectList from "@/components/Project/ProjectList";
import ProjectFilterBar from "@/components/Project/ArticleFilterBar";
import {fetchProjects, fetchProjectTagList} from "@/utils/api";


export default async function Projects() {
  const projects = await fetchProjects();
  const tags = await fetchProjectTagList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={"max-w-6xl"}><ProjectFilterBar/></div>
      <div className={"max-w-6xl"}><ProjectList items={projects}/></div>
    </main>
  );
}
