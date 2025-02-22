"use client";
// import { Careers } from "@/types/interface";
// import axios from "@/config/config";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TbLoader2 } from "react-icons/tb";
import CareersForm from "./CareerFrom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const SingleCareer = () => {
  //   const [data, setData] = useState<Careers>();
  //   const params = useParams<{ id: string }>();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`/careers/${params.id}`);
  //         console.log("Brands Data Detailed:", response.data.career);
  //         setData(response.data.career);
  //       } catch (errors) {
  //         console.log(errors);
  //       }
  //     };
  //     fetchData();
  //   }, [params.id]);

  // if (!data) {
  //   return (
  //     <h1 className="h-[calc(100vh-150px)] grid place-content-center">
  //       <TbLoader2 className="text-primary animate-spin text-2xl" />
  //     </h1>
  //   );
  // }

  return (
    <>
      <div className=" delivo__container  grid grid-cols-1 lg:grid-cols-2 gap-20 content-start p-5 md:py-10">
        <h2 className="lg:col-span-2 text-2xl font-medium text-secondary-foreground">
          Contact Us
        </h2>
        <CareersForm />

        <div className="w-full relative flex flex-col gap-4 md:gap-4 h-auto ">
          <h2 className="w-full relative text-xl md:text-2xl lg:text-3xl text-primary font-medium ">
            Head Office
          </h2>

          <span className="w-full relative h-auto flex flex-col gap-1 ">
            <h2 className="w-full  text-lg  lg:text-2xl font-medium text-fontprimary  ">
              Address :
            </h2>
            <p className=" text-base font-normal text-webtext ">
              Plot No. 22, Rautara Industrial Estate, Beside Hanuman Hotel,
              Shil-Mahape Road, Shilphata, Thane 400 612
            </p>
          </span>
          <span className="w-full relative h-auto flex flex-col gap-1 ">
            <h2 className="w-full text-lg  lg:text-2xl font-medium text-fontprimary  ">
              Contact :
            </h2>
            <div className="w-full relative flex  flex-wrap items-center gap-3 md:gap-5 ">
              <Link
                href={"tel:(+91) 9773141989"}
                className="text-lg font-medium text-webtext "
              >
                (+91) 9773141989
              </Link>
              /
              <Link
                href={"tel:(+91) 9773141989"}
                className="text-lg font-medium text-webtext "
              >
                (+91) 9773141989
              </Link>
            </div>
          </span>

          <div className="w-full relative flex  flex-wrap items-centergap-3 md:gap-3 ">
            <h2 className="w-full text-lg  lg:text-2xl font-medium text-fontprimary  ">
              Email :
            </h2>
            <Link href={"/"} className="text-lg font-medium text-webtext ">
              sales@pcd-flowmeter.com
            </Link>
            /
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-lg font-medium text-webtext "
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
      </div>
    </>
  );
};

export default SingleCareer;
