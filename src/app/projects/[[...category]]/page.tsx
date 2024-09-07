import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProjectList from "@/components/Project/ProjectList";
import ProjectFilterBar from "@/components/Project/ProjectFilterBar";
import { getProjects } from "@/api/projects";
import Heading from "@/components/Heading";
import Tags from "@/components/Tags";
import { mockArticles } from "@/data/mockData";


export default async function Projects({ params }: { params: { category?: string[] } }) {
    const categorySlug = params.category ? params.category[0] : undefined; // Get the first segment for category

    const projects = await getProjects();
    let count = 0;
    let addThree = true;
    const blocks = []
    return (
        <div className="w-full flex flex-col min-h-screen gap-4">
            {/* <ProjectList items={projects}/> */}
            <Heading
                heading={categorySlug ? `${categorySlug} Projects` : "All Projects"}
                subheading="I like building things. Here are a few things I've built."
            />
            <div className="flex flex-col px-2 gap-4">
                <BentoGrid>
                    {mockArticles.map(({ id, title, previewText }, index) => {
                        let style = "col-span-1";
                        if (index == count) {
                            style = "col-span-2";
                            addThree ? count += 3 : count += 1;
                            addThree = !addThree
                        }
                        return (
                            <BentoGridItem
                                key={id}
                                title={title}
                                description={previewText}
                                className={style}
                            />
                        )
                    })}
                </BentoGrid>
            </div>
        </div>
    );
}
