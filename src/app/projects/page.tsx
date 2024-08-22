import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { projectListData } from "@/data/meta";
import Link from "next/link";


async function getProjects() {
  const projects = await Promise.resolve(projectListData);

  return projects;
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {projects.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={""}
              className={cn("[&>p:text-lg]")}
              href={`/article/${item.id}`}
            />
        ))}
      </BentoGrid>
    </main>
  );
}

