import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProjectList from "@/components/Project/ProjectList";
import ProjectFilterBar from "@/components/Project/ProjectFilterBar";
import Heading from "@/components/Heading";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { exampleArticles } from "@/data/newMockData";
import { getWritings } from "@/api/writtings";

export default async function Writings() {
  const projects = await getWritings();
  // const tags = await getArticleTagList();

  return (
    <div className="w-full flex flex-col min-h-screen gap-16">
            <Link href={"/writings/"}>
        Back
      </Link>

      <Heading
        heading="All Posts"
        subheading="These are list of my writings. Most of them would be technical stuff"
      />
      <div className="flex flex-col gap-4">
        {projects.map(({ id, title, slug, createdAt, previewText }, index) => {
          const url = "/post/" + slug;
          const style = index % 3 == 0 ? "col-span-2" : "col-span-1";
          return (
            <div>{slug}, {title}</div>
          )
        })}
      </div>
    </div>
  );
}
