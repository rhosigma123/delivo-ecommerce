"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  name: string;
  link: string;
  icon: (isActive: boolean) => React.ReactNode;
}

const Navlinks: React.FC = () => {
  const pathname: ReturnType<typeof usePathname> = usePathname();

  return (
    <>
      <Link
        key={navItem.link} // Added unique key prop
        href={navItem.link}
        className={`grid grid-cols-[.2fr_1fr] font-medium text-fontPrimary group rounded-full items-center w-full px-4 hover:text-white hover:bg-primary transition-all ease-linear py-2 ${
          isActive ? "text-white bg-primary" : ""
        }`}
      >
        {navItem.icon(isActive)}
        <span className="justify-self-start font-medium text-lg">
          {navItem.name}
        </span>
      </Link>
    </>
  );
};

export default Navlinks;
