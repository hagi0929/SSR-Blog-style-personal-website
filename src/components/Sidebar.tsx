"use client"

import React, { useState } from 'react'

import { ArticleTagModel, ProjectCategoryModel } from '@/models/models';
import Link from 'next/link';


interface SidebarProps {
  title: string;
  list: ProjectCategoryModel[] | ArticleTagModel[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, list }) => {
  const [currentItem, setCurrentItem] = useState("All");
  return (
    <div className="hidden md:flex flex-col fixed left-10 top-10 justify-start">
      <span className="text-2xl font-bold">{title}</span>
      <div className="flex flex-col gap-4 mt-4">
        <Link
          href="/projects"
          className={`${currentItem === "All" ? "font-bold" : ""}`}
          onClick={() => setCurrentItem("All")}
        >
          All
        </Link>
        {list.slice(0, 5).map((value, index) => (
          <Link
            key={index}
            href={`/projects/${value.slug}`}
            className={`${currentItem === value.label ? "font-bold" : ""}`}
            onClick={() => setCurrentItem(value.label)}
          >
            {value.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar