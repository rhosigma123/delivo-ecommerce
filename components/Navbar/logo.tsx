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
  const pathname = usePathname();
  const showClientImages = pathname?.startsWith("/client");

  return (
    <>
      {!showClientImages && (
        <Image
          className={`${className}`}
          src={logo}
          width={200}
          height={100}
          alt={companyName}
          loading="eager"
        />
      )}
    </>
  );
};

export default Logo;
