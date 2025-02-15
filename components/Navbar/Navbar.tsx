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
import ProfileIcon from "../ProfileModal";
import Bag from "../Sheets/Bag";
import Profile from "../Sheets/Profile";
import Info from "../Sheets/Info";
import OrderDetails from "../Sheets/OrderDetails";
import GiftCard from "../Sheets/GiftCard";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isAdmin: boolean = pathname?.startsWith("/admin") ?? false;

  return (
    <nav className="relative px-5 py-3 flex justify-between items-center bg-white shadow-md">
      <Link href={`/`} className="pb-2 border-b">
        <Logo logo={"/delivo-primary-logo.png"} companyName="Delivo" />
      </Link>
      <SearchField />
      <LoginModal />
      <Button
        variant="link"
        className="rounded-full text-white w-[calc(100%-40px)] primaryColor"
      >
        Logout <LogOut size={20} />
      </Button>

      <Bag />
      <Profile />
      <Info />
      <OrderDetails />
      <GiftCard />
      {/* <ProfileIcon /> */}
    </nav>
  );
};

export default Navbar;
