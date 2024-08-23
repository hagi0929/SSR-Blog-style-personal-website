import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projectListData } from "@/data/meta";
import Link from "next/link";
import {NotionItem} from "../../../models/project";

export const revalidate = 60;

export default async function Projects() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project`, {
    next: { revalidate: 60 },
  });
  const projects: any = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {projects}
      </BentoGrid>
    </main>
  );
}

