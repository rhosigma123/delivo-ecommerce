import Image from "next/image";
import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

function NewNavbar() {
  return (
    <nav className="w-full sticky top-0 h-auto bg-white flex items-center  z-40 ">
      <section className="w-full py-3 relative  delivo__container h-auto flex items-center justify-between gap-5">
        <Link href={"/"} className="max-w-fit relative max-h-fit">
          <Image
            src={"/delivo-logo.png"}
            alt="Delivo"
            height={200}
            width={200}
            className="w-[130px] max-w-[130px]  object-contain relative "
          />
        </Link>

        <ul className=" relative  hidden md:flex items-center gap-5 w-fit h-auto ">
          <Link href={"/"} className="text-lg font-medium text-fontPrimary ">
            Home
          </Link>
          <Link
            href={"/about-delivo"}
            className="text-lg font-medium text-fontPrimary "
          >
            About
          </Link>
          <Link
            href={"/careers"}
            className="text-lg font-medium text-fontPrimary "
          >
            Careers
          </Link>
          <Link href={""} className="text-lg font-medium text-fontPrimary ">
            Partners
          </Link>
          <Link href={""} className="text-lg font-medium text-fontPrimary ">
            Blogs
          </Link>
        </ul>
        <span className="p-1 rounded-md bg-primary text-white block md:hidden ">
          <RxHamburgerMenu className="text-[25px] text-white" />
        </span>
      </section>
    </nav>
  );
}

export default NewNavbar;
