import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProjectList from "@/components/Project/ProjectList";
import ProjectFilterBar from "@/components/Project/ProjectFilterBar";
import { getProjectCategoryList, getProjects, getProjectTechStackList } from "@/api/projects";
import Heading from "@/components/Heading";
import Tags from "@/components/Tags";
import { mockArticles } from "@/data/mockData";
import Sidebar from "@/components/Sidebar";

export default async function Projects({ params }: { params: { category?: string[] } }) {
    const categorySlug = params.category ? params.category[0] : null; // Get the first segment for category
    const techStackList = await getProjectTechStackList();
    const categoryList = await getProjectCategoryList();
    const projects = await getProjects(categorySlug);
    let count = 0;
    let addThree = true;
    return (
        <div className="w-full flex flex-col min-h-screen gap-4">
            <Sidebar title="Category" list={categoryList}></Sidebar>
            <Tags tags={techStackList}></Tags>
            <Heading
                heading={categorySlug ? `${categorySlug} Projects` : "All Projects"}
                subheading="I like building things. Here are a few things I've built."
            />
            <div className="flex flex-col px-2 gap-4">
                <BentoGrid>
                    {projects.map(({ id, title, description }, index) => {
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
                                description={description}
                                className={style}
                            />
                        )
                    })}
                </BentoGrid>
            </div>
        </div>
    );
}
