import Image from "next/image";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import Link from "next/link";
import ProjectList from "@/components/Project/ProjectList";
import ProjectFilterBar from "@/components/Project/ProjectFilterBar";
import {getProjects} from "@/apis/projects";
import {getProjectSeriesList} from "@/apis/articles";


export default async function Projects() {
    const projects = await getProjects();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ProjectList items={projects}/>
        </main>
    );
}
