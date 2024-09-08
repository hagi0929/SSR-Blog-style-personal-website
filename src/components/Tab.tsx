"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from 'react';
import Link from "next/link";

const Tab = () => {
    const router = useRouter();
    const currentPath = usePathname();

    const tabItems = [
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "Writings",
            path: "/writings"
        },
    ];

    const getBasePath = (path: string) => {
        const matchingItem = tabItems.find(item => path.startsWith(item.path));
        return matchingItem ? matchingItem.path : null;
    };

    const [currentTab, setCurrentTab] = useState(getBasePath(currentPath) || tabItems[0].path);
    const [isTabVisible, setIsTabVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const basePath = getBasePath(currentPath);
        if (!basePath) {
            router.push("/home");
        } else {
            setCurrentTab(basePath);
        }
    }, [currentPath]);

    const handleTabChange = (tab: string) => {
        setCurrentTab(tab);
        router.push(tab);
    };

    const shouldShowNavbar = (path: string): boolean => {
        return tabItems.some(item => path.startsWith(item.path));
    };

    // const [tabShown, setTabShown] = useState(shouldShowNavbar(currentPath));

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollY = window.scrollY;
    //         if (currentScrollY > lastScrollY) {
    //             // Scrolling down
    //             setIsTabVisible(false);
    //             setTimeout(() => setTabShown(false), 300); // Wait for the transition to finish
    //         } else {
    //             // Scrolling up
    //             setTabShown(true);
    //             setTimeout(() => setIsTabVisible(true), 300); // Delay to trigger the CSS transition
    //         }
    //         setLastScrollY(currentScrollY);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [lastScrollY]);

    return (
        <div
            className={`transition-all duration-300 ${isTabVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
        >
            <Tabs value={currentTab} onValueChange={handleTabChange}>
                <TabsList>
                    {tabItems.map(({ name, path }) => (
                        <Link key={name} href={path}>
                            <TabsTrigger value={path}>
                                {name}
                            </TabsTrigger>
                        </Link>
                    ))}
                </TabsList>
            </Tabs>
        </div>
    );
}

export default Tab;
