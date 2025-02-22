import React from "react";
import Link from "next/link";
import CompnainForm from "@/components/complain/ComplainForm";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import NewNavbar from "@/components/commons/NewNavbar";

const ComplaintRoute = () => {
  return (
    <>
      <NewNavbar />
      <section className="w-full relative h-auto py-10 md:py-20 delivo__container grid  grid-cols-1 lg:grid-cols-[1fr_1fr]   gap-5 md:gap-10 lg:gap-20 xl:gap-40">
        <CompnainForm />

        <div
          className="w-full gap-3  relative h-aut
         flex flex-col"
        >
          <h2 className="text-3xl font-medium text-primary  ">Contact Us</h2>

          <span className="w-full relative h-auto flex flex-col  gap-2 md:gap-3 ">
            <h2 className="w-full text-xl   font-medium  text-fontPrimary  ">
              Contact :
            </h2>
            <div className="w-full relative flex  flex-wrap items-center gap-3 md:gap-5 ">
              <Link
                href={"tel:(+91) 9773141989"}
                className="text-lg font-medium  text-fontSecondary "
              >
                (+91) 9773141989
              </Link>
              /
              <Link
                href={"tel:(+91) 9773141989"}
                className="text-lg font-medium text-fontSecondary"
              >
                (+91) 9773141989
              </Link>
            </div>
          </span>

          <div className="w-full relative flex  flex-wrap items-centergap-3 gap-2 md:gap-3 ">
            <h2 className="w-full text-xl font-medium text-fontPrimary  ">
              Email :
            </h2>
            <Link
              href={"/"}
              className="text-lg font-medium text-fontSecondary "
            >
              sales@pcd-flowmeter.com
            </Link>
            /
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-lg font-medium text-fontSecondary "
            >
              sales.pcdpl@gmail.com
            </Link>
          </div>
          <div className="w-full relative flex  flex-wrap items-center gap-5 ">
            <Link
              href={"/"}
              className="text-p18 font-medium bg-primary rounded-full p-2 text-webtext "
            >
              <FaFacebook className="text-white text-[25px]" />
            </Link>
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-p18 font-medium bg-primary p-2 rounded-full text-webtext "
            >
              <FaTwitter className="text-[25px] text-white " />
            </Link>

            <Link
              href={"/"}
              className="text-p18 font-medium bg-primary rounded-full p-2 text-webtext "
            >
              <FaInstagram className="text-white text-[25px]" />
            </Link>
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-p18 font-medium bg-primary p-[10px] rounded-full text-webtext "
            >
              <BsLinkedin className="text-[20px] text-white " />
            </Link>
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-p18 font-medium bg-primary p-2 rounded-full text-webtext "
            >
              <FaYoutube className="text-[25px] text-white " />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComplaintRoute;
