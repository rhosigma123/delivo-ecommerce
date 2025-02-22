import React from "react";
import BlogBanner from "@/components/Blogs/BlogBanner";
import NewNavbar from "@/components/commons/NewNavbar";
function page() {
  return (
    <>
      <NewNavbar />
      <BlogBanner
        title="How Delivo is Redefining Instant Commerce"
        image="/Drone-image.png"
        css="h-[300px] sm:h-[400px] md:h-[600px]"
      />
      <section className="w-full delivo__container   lg:-mt-40 z-10 pb-10 h-auto grid lg:grid-cols-[.7fr_2fr] gap-10">
        {/* table of Content */}
        <section className="w-full gap-4   h-fit sticky top-20 hidden lg:flex flex-col  border p-5 rounded-lg bg-white">
          <h2 className="text-2xl font-medium text-primary ">
            Table of Content
          </h2>

          <ul className="w-full relative h-auto flex flex-col gap-2">
            <li className="w-full px-3  relative text-base font-medium text-foreground py-1  border-b ">
              SEction{" "}
            </li>

            <li className="w-full px-3  relative text-base font-medium text-foreground py-1  border-b ">
              SEction{" "}
            </li>
            <li className="w-full px-3  relative text-base font-medium text-foreground py-1  border-b ">
              SEction{" "}
            </li>
            <li className="w-full px-3  relative text-base font-medium text-foreground py-1  border-b ">
              SEction{" "}
            </li>
          </ul>
        </section>

        <section className="w-full relative bg-white p-10 rounded-lg h-auto flex  flex-col gap-4 roundend-lg ">
          <div className="w-full relative h-auto  flex-wrap flex items-center gap-3 text-base font-medium  text-secondary ">
            <p className=" text-base text-fontPrimary">Help Center /</p>
            <p className=" text-base text-fontPrimary">
              Buyer Knowledge Base /
            </p>
            <p className=" text-base text-primary">
              t id ullam temporibus animi nihil
            </p>
          </div>

          <div
            className="w-full relative h-auto flex flex-col  gap-2"
            // dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </section>
      </section>
    </>
  );
}

export default page;
