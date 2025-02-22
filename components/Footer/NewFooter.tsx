import React from "react";
import Image from "next/image";
import Newslatter from "../commons/Newsletter";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

function NewFooter() {
  return (
    <footer className="w-full relative  h-auto pb-10 bg-secondary flex flex-col  gap-2 ">
      <Newslatter />

      <section className="w-full relative delivo__container py-5 h-auto grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1.5fr] gap-5">
        <ul className="flex flex-col gap-3 relative h-auto w-full ">
          <li className="text-2xl font-medium text-foreground ">Company</li>

          <li className="text-base font-medium text-fontPrimary mt-3">
            About us
          </li>

          <li className="text-base font-medium text-fontPrimary ">About us</li>

          <li className="text-base font-medium text-fontPrimary ">About us</li>

          <li className="text-base font-medium text-fontPrimary ">About us</li>
        </ul>
        <ul className="flex flex-col gap-3 relative h-auto w-full ">
          <li className="text-2xl font-medium text-foreground ">Quick Links</li>

          <Link
            href={"/privacy-policy"}
            className="text-base font-medium text-fontPrimary mt-3"
          >
            Privacy Policy
          </Link>

          <Link
            href={"/terms-and-condition"}
            className="text-base font-medium text-fontPrimary "
          >
            Terms & Conditions
          </Link>

          <Link
            href={"/help"}
            className="text-base font-medium text-fontPrimary "
          >
            Help
          </Link>

          <Link
            href={"/feedback"}
            className="text-base font-medium text-fontPrimary "
          >
            Feedback
          </Link>

          <Link
            href={"/complaint"}
            className="text-base font-medium text-fontPrimary "
          >
            Complaint
          </Link>

          <Link
            href={"/contact"}
            className="text-base font-medium text-fontPrimary "
          >
            Contact
          </Link>
        </ul>
        <ul className="flex flex-col gap-3 relative h-auto w-full ">
          <li className="text-2xl font-medium text-foreground ">Follow Us</li>

          <li className="text-lg font-semibold text-fontPrimary flex items-center gap-3 mt-3">
            <Link
              href={"/"}
              className="text-base font-medium  flex items-center gap-3 bg-primary rounded-full p-2 text-webtext "
            >
              <FaFacebook className="text-white text-[15px]" />
            </Link>
            Facebook
          </li>

          <li className="text-lg font-semibold flex items-center gap-3  text-fontPrimary ">
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-p18 font-medium bg-primary p-2 rounded-full text-webtext "
            >
              <FaTwitter className="text-[15px] text-white " />
            </Link>
            X
          </li>

          <li className="text-lg font-semibold  flex items-center gap-3 text-fontPrimary ">
            <Link
              href={"/"}
              className="text-p18 font-medium bg-primary rounded-full p-2 text-webtext "
            >
              <FaInstagram className="text-white text-[15px]" />
            </Link>
            Instagram
          </li>

          <li className="text-lg font-semibold text-fontPrimary flex items-center gap-3 ">
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-p18 font-medium bg-primary p-[10px] rounded-full text-webtext "
            >
              <BsLinkedin className="text-[15px] text-white " />
            </Link>
            LinkedIn
          </li>
        </ul>
        <ul className="flex flex-col gap-2 ">
          <h2 className="text-2xl font-medium text-foreground ">
            {" "}
            Download App
          </h2>
          <section className=" flex items-center gap-2   w-full relative h-auto rounded-xl  ">
            <Image
              src="/downloadapp.png"
              alt="App COde"
              height={300}
              width={500}
              className=" w-auto relative h-auto object-contain"
            />
          </section>
        </ul>
      </section>
    </footer>
  );
}

export default NewFooter;
