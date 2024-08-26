import Image from "next/image";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import Link from "next/link";
import ProjectList from "@/components/Project/ProjectList";
import ProjectFilterBar from "@/components/Project/ProjectFilterBar";
import {getArticles, getArticleTagList} from "@/api/articles";


export default async function Writings() {
  const projects = await getArticles();
  const tags = await getArticleTagList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        hello
    </main>
  );
}
