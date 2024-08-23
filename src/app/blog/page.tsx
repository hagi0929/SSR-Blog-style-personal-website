"use client"

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
import { blogListData } from "@/data/meta";


async function getBlogs() {
  const blogs = await Promise.resolve(blogListData);

  return blogs;
}

export default async function Blog() {
  const blogs = await getBlogs()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {blogs.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.id}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </main>
  );
}

