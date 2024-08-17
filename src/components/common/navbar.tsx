"use client";

import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import Link from 'next/link';

export const Navbar = () => {
  const currentPath = usePathname();

  // Define the possible paths and their corresponding tab values
  const pathToTabMap: { [key: string]: string } = {
    "/home": "home",
    "/blog": "blog",
    "/projects": "projects",
    "/article": "article",
  };

  // Function to determine if the Navbar should be hidden based on the current path
  const shouldHideNavbar = (path: string): boolean => {
    const hiddenPaths: string[] = ["/login", "/register", "/404"]; // Paths where Navbar should be hidden
    return hiddenPaths.includes(path);
  };

  // Function to map the current path to the corresponding tab value
  const mapPathToTabValue = (path: string): string => {
    return pathToTabMap[path] || "home"; // Return an empty string or default value if the path is not in the map
  };

  // Check if the Navbar should be hidden
  const isNavbarHidden = shouldHideNavbar(currentPath);

  // Determine the current tab value based on the path
  const currentTabValue = mapPathToTabValue(currentPath);

  // Render null if Navbar should be hidden, otherwise render the Navbar
  if (isNavbarHidden) {
    return null;
  }

  return (
    <>
      <div className="bg-background top-0 z-40 w-full border-b">
        <div className="container fixed flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Tabs value={currentTabValue} className="w-[400px]">
            <TabsList>
              <Link href="/">
                <TabsTrigger value="home">Home</TabsTrigger>
              </Link>
              <Link href="/projects">
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </Link>
              <Link href="/blog">
                <TabsTrigger value="blog">Blog</TabsTrigger>
              </Link>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </>
  );
};
