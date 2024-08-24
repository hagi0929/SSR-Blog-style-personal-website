"use client";

import { Menu } from "@/components/Header/Menu";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="bg-background top-0 z-40 w-full border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-1 flex justify-center">
          <Menu />
        </div>
        <div className="flex-1">
          {/* Blank space */}
        </div>
      </div>
    </div>
  );
};
