"use client";

import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {getProjectCategoryList, getProjectTechStackList} from "@/api/projects";
import {useState, useEffect} from "react";
import {ProjectCategoryModel, ProjectTechStackModel} from "@/models/models";
import Tags from "@/components/Tags";

export default function ProjectFilterBar() {
  const pathname = usePathname();
  const [projectCategoryList, setProjectCategoryList] = useState<ProjectCategoryModel[]>([]);
  const [projectTechStackList, setProjectTechStackList] = useState<ProjectTechStackModel[]>([]);

  useEffect(() => {
    async function fetchData() {
      const categoryList = await getProjectCategoryList();
      const techStackList = await getProjectTechStackList();
      setProjectCategoryList(categoryList);
      setProjectTechStackList(techStackList);
      console.log(categoryList, techStackList);
    }

    fetchData();

  }, []);

  return (
    <div className={cn("carousel-container", "overflow-x-auto", "whitespace-nowrap", "p-4")}>
      <Tags tags={projectCategoryList}/>
      <Tags tags={projectTechStackList}/>
    </div>
  );
}
