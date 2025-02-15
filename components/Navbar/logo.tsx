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
          className={`${className} px-5 w-[150px] h-[50px] object-contain`}
          src={logo}
          width={1000}
          height={1000}
          alt={companyName}
          loading="eager"
        />
      )}

      {showClientImages && (
        <div className="flex items-center gap-3">
          <Image
            className={`${className}w-[150px] h-[50px] object-contain`}
            src={logo}
            width={400}
            height={400}
            alt={companyName}
            loading="eager"
          />
          <hr className="h-10 w-[3px] bg-primary" />
          <Image
            className={`${className}w-[150px] h-[50px] object-contain`}
            src={clientLogo}
            width={400}
            height={400}
            alt={clientName}
            loading="eager"
          />
        </div>
      )}
    </>
  );
};

export default Logo;
