import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProjectList from "@/components/Project/ProjectList";
import ProjectFilterBar from "@/components/Project/ProjectFilterBar";
import { getArticles, getArticleTagList } from "@/api/articles";
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

export default async function Writings() {
  // const projects = await getArticles();
  // const tags = await getArticleTagList();

  return (
    <div className="w-full flex flex-col min-h-screen gap-16">
      <Heading
        heading="Writings"
        subheading="These are list of my writings. Most of them would be technical stuff"
      />
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold">
          Series
        </span>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4 sm:w-5/6 md:w-full self-center"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="sm:basis-1/3 lg:basis-1/5 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[0.8] items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold">
          All Posts
        </span>
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
