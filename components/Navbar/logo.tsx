"use client";
import { logoProps } from "@/types/interface";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const Logo: React.FC<logoProps> = ({
  logo,
  clientLogo = "",
  clientName = "",
  companyName,
  className,
}) => {
  return (
    <>
      <Image
        className={`${className} px-5 max-w-[200px]`}
        src={logo || `/delivo-primary-logo.png`}
        width={200}
        height={100}
        alt={companyName}
        loading="eager"
      />
    </>
  );
};

export default Logo;
