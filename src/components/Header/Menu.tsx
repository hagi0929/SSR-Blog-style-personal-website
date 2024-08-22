"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const Menu = () => {
  const currentPath = usePathname();

  const pathToTabMap: { [key: string]: string } = {
    "/home": "home",
    "/blog": "blog",
    "/projects": "projects",
  };

  const initialTab = pathToTabMap[currentPath] || "home";
  const [currentTab, setCurrentTab] = useState(initialTab);

  const router = useRouter();

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    const path = Object.keys(pathToTabMap).find(key => pathToTabMap[key] === tab) || "/";
    router.replace(path);
  };

  const shouldShowNavbar = (path: string): boolean => {
    const shownPath: string[] = ["/home", "/blog", "/projects"];
    return shownPath.includes(path);
  };

  const isNavbarShown = shouldShowNavbar(currentTab);

  useEffect(() => {
    const path = Object.keys(pathToTabMap).find(key => pathToTabMap[key] === currentTab) || "/home";
    router.replace(path);
  }, [currentTab]);

  if (isNavbarShown) {
    return null;
  }

  return (
    <div className="container fixed flex h-16 items-center justify-center">
      <Tabs value={currentTab} onValueChange={handleTabChange} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
