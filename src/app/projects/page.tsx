import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProjectList from "@/components/Project/ProjectList";
import ProjectFilterBar from "@/components/Project/ProjectFilterBar";
import { getProjects } from "@/api/projects";
import { getProjectSeriesList } from "@/api/articles";
import Heading from "@/components/Heading";
import Tags from "@/components/Tags";
import { mockArticles, mockTags } from "@/data/mockData";


export default async function Projects() {
    // const projects = await getProjects();

    return (
        <div className="w-full flex flex-col min-h-screen">
            {/* <ProjectList items={projects}/> */}
            <Heading
                heading="Projects"
                subheading="I like building things. Here are a few things I've built"
            />
            <div className="px-2">
                <Tags
                    tags={mockTags}
                />
                <BentoGrid>
                    {mockArticles.map(({ id, title, previewText }) => (
                        <BentoGridItem
                            key={id}
                            title={title}
                            description={previewText}
                        />
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
}
