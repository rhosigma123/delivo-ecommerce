import React from "react";
import BlogsCard from "./BlogCard";
import Newslatter from "../commons/Newsletter";
import NewNavbar from "../commons/NewNavbar";

function BlogPage() {
  return (
    <>
      <NewNavbar />
      <section className="w-full relative delivo__container flex flex-col gap-10 py-10">
        <div className="w-full relative h-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-1 ">
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
        </div>
      </section>

      <Newslatter />
    </>
  );
}

export default BlogPage;
