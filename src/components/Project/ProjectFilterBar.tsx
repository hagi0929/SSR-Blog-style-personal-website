"use client";

import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {getProjectSeriesList} from "@/api/articles";


export default async function ProjectFilterBar() {
    const pathname = usePathname();
    const projectArticleList = await getProjectSeriesList();
    const projectSeriesList = await getProjectSeriesList();

    return (
        <div className={cn("carousel-container", "overflow-x-auto", "whitespace-nowrap", "p-4")}>
            {projectArticleList.map(tag => (
                <div
                    key={tag.id}
                    className={cn(
                        "carousel-item",
                        "inline-block",
                        "m-2",
                        "px-4",
                        "py-2",
                        "bg-gray-200",
                        "rounded-full",
                        "cursor-pointer",
                        "hover:bg-gray-300"
                    )}
                >
                    {tag.label}
                </div>
            ))}
            {projectSeriesList.map(tag => (
                <div
                    key={tag.id}
                    className={cn(
                        "carousel-item",
                        "inline-block",
                        "m-2",
                        "px-4",
                        "py-2",
                        "bg-gray-200",
                        "rounded-full",
                        "cursor-pointer",
                        "hover:bg-gray-300"
                    )}
                >
                    {tag.label}
                </div>
            ))}

        </div>
    );
}
