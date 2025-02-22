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
    <nav className=" z-20 px-5 md:px-10  lg:px-20 space-x-5 py-3 gap-2 flex flex-col   w-full sticky top-0 justify-center items-center bg-background">
      <section className="  flex   w-full gap-4  justify-between items-center bg-background">
        <div className="w-fulll relative h-auto flex items-center gap-2">
          <Link href={`/`}>
            <Logo
              logo={"/delivo-primary-logo.png"}
              companyName="Delivo"
              className="w-[150px]"
            />
          </Link>
          <div className="w-fulll relative h-auto sm:flex items-center gap-4 hidden  ">
          <LocationModal />
          </div>
        </div>

        <span className="w-full relative xl:block hidden">
          <SearchField />
        </span>
        <div className="w-fulll relative h-auto flex items-center gap-4">
          <div className="w-fulll relative h-auto lg:flex items-center gap-4 hidden  ">
            <SwitchRoutes />
            <LoginModal />
          </div>
          <Bag />
        </div>
      </section>
      <span className="w-full relative flex items-center  mx-auto xl:hidden justify-center">
        <SearchField />
      </span>
    </nav>
  );
};

export default Navbar;
