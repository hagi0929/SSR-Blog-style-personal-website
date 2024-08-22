"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Logo } from "./Logo";
export const Header = () => {

  return (
    <div className="bg-background top-0 z-40 w-full border-b">
      <Logo />
      <Header />
    </div >
  );
};
