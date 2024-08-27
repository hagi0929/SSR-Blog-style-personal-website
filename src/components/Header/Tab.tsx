"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from 'react';

const Tab = () => {
    const router = useRouter();
    const currentPath = usePathname();

    const tabItems = [
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "Blog",
            path: "/blog"
        },
        {
            name: "Projects",
            path: "/projects"
        },
    ];

    const getBasePath = (path: string) => {
        const matchingItem = tabItems.find(item => path.startsWith(item.path));
        return matchingItem ? matchingItem.path : null;
    };

    const [currentTab, setCurrentTab] = useState(getBasePath(currentPath) || tabItems[0].path);

    useEffect(() => {
        const basePath = getBasePath(currentPath);
        if (!basePath) {
            router.replace("/home");
        } else {
            setCurrentTab(basePath);
        }
    }, [currentPath]);

    const handleTabChange = (tab: string) => {
        setCurrentTab(tab);
        router.replace(tab);
    };

    const shouldShowNavbar = (path: string): boolean => {
        return tabItems.some(item => path.startsWith(item.path));
    };

    const isNavbarShown = shouldShowNavbar(currentPath);

    return (
        isNavbarShown &&
        <div className="container fixed flex h-16 items-center justify-center">
            <Tabs value={currentTab} onValueChange={handleTabChange} className="w-[400px]">
                <TabsList>
                    {tabItems.map(({ name, path }) => (
                        <TabsTrigger key={name} value={path}>
                            {name}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>
    );
}

export default Tab;
