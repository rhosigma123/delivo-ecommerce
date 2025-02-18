"use client";
import React from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import SearchField from "../SearchFiled";
import { Button } from "../ui/button";
import LoginModal from "../Modals/LoginModal";
import Bag from "../Sheets/Bag";
import LocationModal from "../Modals/LocationModal";
import SwitchRoutes from "../SwitchRoutes";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isAdmin: boolean = pathname?.startsWith("/admin") ?? false;

  return (
    <nav className="relative px-20 space-x-5 py-3 flex justify-between items-center bg-background">
      <Link href={`/`}>
        <Logo
          logo={"/delivo-primary-logo.png"}
          companyName="Delivo"
          className="w-[150px]"
        />
      </Link>
      <LocationModal />
      <SearchField />
      <SwitchRoutes />
      <LoginModal />
      <Bag />
    </nav>
  );
};

export default Navbar;
