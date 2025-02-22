import React from "react";
import BlogBanner from "@/components/Blogs/BlogBanner";
import BlogsCard from "@/components/Blogs/BlogCard";
import Image from "next/image";
import Link from "next/link";
import NewNavbar from "@/components/commons/NewNavbar";
const AboutDelivoRoute = () => {
  return (
    <>
      <NewNavbar />
      <BlogBanner title={""} image={""} />
      <section className="w-full relative h-auto flex flex-col py-10 lg:py-20 gap-5 delivo__container items-center justify-center  ">
        <h2 className=" text-2xl lg:text-4xl text-center font-medium text-primary ">
          Delivo – India’s Fastest Growing Instant Commerce Platform
        </h2>
        <p className=" text-base lg:text-lg font-medium text-center text-fontPrimary ">
          At Delivo, we are redefining the way people shop by bringing
          essentials to their doorstep within minutes. As one of India's
          fastest-growing instant commerce platforms, we have built a rapid,
          reliable, and tech-driven ecosystem that ensures customers get what
          they need, exactly when they need it.
        </p>
        <p className=" text-base lg:text-lg font-medium text-center text-fontPrimary ">
          At Delivo, we are redefining the way people shop by bringing
          essentials to their doorstep within minutes. As one of India's
          fastest-growing instant commerce platforms, we have built a rapid,
          reliable, and tech-driven ecosystem that ensures customers get what
          they need, exactly when they need it.
        </p>
        <p className=" text-base lg:text-lg font-medium text-center text-fontPrimary ">
          At Delivo, we are redefining the way people shop by bringing
          essentials to their doorstep within minutes. As one of India's
        </p>
      </section>
      <section className="w-full relative h-auto flex flex-col pb-10 md:pb-32 items-center delivo__container  justify-center gap-10">
        <h2 className=" text-3xl lg:text-5xl items-center font-medium text-primary ">
          From Our Blogs
        </h2>
        <section className="w-full relative h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <BlogsCard
            css="hover:bg-websecondary transition-all duration-300 "
            image={"/product.png"}
            createdby={"Ayan mansoor"}
            createdat={"12/10/2000"}
            title={"How Delivo is Redefining Instant Commerce"}
            description={
              "Delivo makes shopping effortless with lightning-fast delivery, bringing essentials to your doorstep in minutes. See how our tech-driven approach is changing e-commerce."
            }
            slug={"/blogs"}
            key={""}
          />
          <BlogsCard
            css="hover:bg-websecondary transition-all duration-300 "
            image={"/product.png"}
            createdby={"Ayan mansoor"}
            createdat={"12/10/2000"}
            title={"How Delivo is Redefining Instant Commerce"}
            description={
              "Delivo makes shopping effortless with lightning-fast delivery, bringing essentials to your doorstep in minutes. See how our tech-driven approach is changing e-commerce."
            }
            slug={"/blogs"}
            key={""}
          />
          <BlogsCard
            css="hover:bg-websecondary transition-all duration-300 "
            image={"/product.png"}
            createdby={"Ayan mansoor"}
            createdat={"12/10/2000"}
            title={"How Delivo is Redefining Instant Commerce"}
            description={
              "Delivo makes shopping effortless with lightning-fast delivery, bringing essentials to your doorstep in minutes. See how our tech-driven approach is changing e-commerce."
            }
            slug={"/blogs"}
            key={""}
          />
        </section>
      </section>
      <section className="w-full relative h-auto flex  flex-col items-center  delivo__container  justify-center gap-10">
        <h2 className="text-3xl lg:text-5xl text-center font-medium text-primary ">
          Our Shared Philosophy at Delivo
        </h2>
        <section className="w-full relative h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <div className=" max-w-[400px] lg:max-w-full w-full mx-auto relative h-auto flex flex-col gap-3 items-start ">
            <Image
              src="/partner.png"
              alt=""
              height={400}
              width={500}
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] relative object-cover border  rounded-lg "
            />
            <h2 className="text-2xl font-medium text-fontPrimary">
              Leadership Mindset & Growth
            </h2>
            <p className="text-base font-medium text-fontPrimary">
              At Delivo, leadership is more than just a title—it's a mindset. We
              cultivate a culture of ownership, innovation, and agility,
              empowering our teams to redefine the future of instant commerce.
            </p>
          </div>
          <div className="max-w-[400px] lg:max-w-full w-full  mx-auto relative h-auto flex flex-col gap-2 items-start ">
            <Image
              src="/partner.png"
              alt=""
              height={400}
              width={500}
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] relative  object-cover border  rounded-lg"
            />
            <h2 className="text-2xl font-medium text-fontPrimary">
              Leadership Mindset & Growth
            </h2>
            <p className="text-base font-medium text-fontPrimary">
              At Delivo, leadership is more than just a title—it's a mindset. We
              cultivate a culture of ownership, innovation, and agility,
              empowering our teams to redefine the future of instant commerce.
            </p>
          </div>
          <div className=" max-w-[400px] lg:max-w-full  mx-auto w-full relative h-auto flex flex-col gap-2 lg:col-start-1 lg:col-end-3 items-start ">
            <Image
              src="/partner.png"
              alt=""
              height={400}
              width={500}
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] relative  object-cover border  rounded-lg"
            />
            <h2 className="text-2xl font-medium text-fontPrimary">
              Leadership Mindset & Growth
            </h2>
            <p className="text-base font-medium text-fontPrimary">
              At Delivo, leadership is more than just a title—it's a mindset. We
              cultivate a culture of ownership, innovation, and agility,
              empowering our teams to redefine the future of instant commerce.
            </p>
          </div>
        </section>
      </section>

      <section className="w-full relative mt-10 h-auto p-5 border rounded-lg bg-secondary  delivo__container  flex flex-col gap-2">
        <p className="text-xl font-medium text-fontPrimary ">
          For media inquiries, write to us at press@delivo.com or check out our
          press page
        </p>
        <p className="text-xl font-medium text-fontPrimary ">
          For media inquiries, write to us at press@delivo.com or check out our
          press page
        </p>

        <h2 className="text-medium text-foreground text-xl">
          Operational Address :
        </h2>
        <h2 className="text-lg font-semibold text-fontPrimary ">
          <p className="text-xl font-medium text-fontPrimary leading-[1.2]">
            {" "}
            Kodeinnovate Private{" "}
          </p>{" "}
          Limited S.D Garden, Jilani Park, Mumbra-400612
        </h2>

        <div className="w-full relative h-auto flex items-center gap-3">
          <Link
            href={"tel:9326500602"}
            className="text-lg flex items-center gap-3 font-medium text-"
          >
            <strong> Phone No :</strong> 9326500602
          </Link>
          <Link
            href={"melto:info@kodeinnovate.in"}
            className="text-lg flex items-center gap-3 font-medium text-"
          >
            <strong>Email :</strong> info@kodeinnovate.in
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutDelivoRoute;
