import NewNavbar from "@/components/commons/NewNavbar";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
function notfound() {
  return (
    <>
      <Navbar />
      <section className="w-full relative h-auto bg-white ">
        <section className="w-full relative h-[90vh] delivo__container gap-5 flex flex-col items-center justify-center bg-[url(/404image.png)]  bg-contain bg-no-repeat lg:bg-cover bg-center ">
          <p className="text-lg text-center  font-meidum text-primary">
            {" "}
            Oops! It looks like you&apos;ve taken a wrong turn. Don&apos;t
            worry, we&apos;ll help
            <br />
            you find your way back to the right page. Let&apos;s get you back on
            track!
          </p>

          <Link
            href={"/"}
            className="w-fit relative h-auto flex items-center justify-center bg-primary px-5 py-2 text-white rounded-lg"
          >
            Back To Home
          </Link>
        </section>
      </section>
    </>
  );
}

export default notfound;
