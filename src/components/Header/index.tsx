"use client";

import {Menu} from "@/components/Header/Menu";

export const Header = () => {
    return (
        <div className="bg-background top-0 z-40 w-full border-b">
            <div className="mx-auto flex items-center justify-between px-4">
                <Menu/>
            </div>
        </div>
    );
};
