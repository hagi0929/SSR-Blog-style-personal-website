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
import { getWritings, getWritingSeriesList } from "@/api/writtings";

export default async function Writings() {
  const projects = await getWritings();
  const writings = await getWritingSeriesList();

  return (
    <div className="w-full flex flex-col min-h-screen gap-16">
      <Heading
        heading="Writings"
        subheading="These are list of my writings. Most of them would be technical stuff"
      />
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold">
          Series - url에서는 싹다 슬러그 쓸꺼임
        </span>
        {
          writings.map(({ id, label, slug }) => {
            return (
              <Link href={`/writings/series/${slug}`}>              <div key={id} className="flex flex-col gap-4">
                {label}
              </div>
              </Link>
            )
          })
        }
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold">
          Posts
        </span>
        <Link href={"/writings/all"}>
          See all Posts
        </Link>
        <BentoGrid>
          {exampleArticles.map(({ id, title, previewText, category }, index) => {
            const url = "/" + category + "/" + id;
            const style = index % 3 == 0 ? "col-span-2" : "col-span-1";
            return (
              <BentoGridItem
                key={id}
                title={title}
                className={style}
                description={previewText}
                href={url}
              />
            )
          })}
        </BentoGrid>
      </div>
    </div>
  );
}
