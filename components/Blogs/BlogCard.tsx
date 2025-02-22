import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

type blogscardtyep = {
  css?: string;
  image: string;
  createdby: string;
  createdat: string;
  title: string;
  description: string;
  slug: string;
};

function BlogsCard({
  css,
  image,
  createdat,
  createdby,
  title,
  description,
  slug,
}: blogscardtyep) {
  return (
    <section
      className={`w-full group max-w-[450px] self-center transition-all duration-300   justify-self-center md:max-w-full relative h-full cursor-pointer  p-5 flex flex-col gap-5 ${
        css ? `${css}` : "bg-white"
      }`}
    >
      <Image
        src={image}
        alt="placeholder"
        height={500}
        width={500}
        className="w-full h-[200px] md:h-[250px] rounded-lg object-cover cursor-pointer"
      />
      <div
        className="w
            -full relative h-auto flex flex-col gap-2"
      >
        <ul className="flex items-center gap-4 w-full relative h-auto justify-between">
          <li className="text-base font-medium text-webaccent">{createdat}</li>
          <li className="text-base font-medium underline text-webaccent list-disc">
            {createdby}
          </li>
        </ul>
        <h2 className="text-2xl  group-hover:underline font-semibold text-primary ">
          {title}
        </h2>
        <p className="text-base font-medium text-fontPrimary">{description}</p>
        <Link
          href={`blogs/${slug}`}
          className="text-base font-medium group-hover:gap-5 transition-all duration-300 mt-2 border-b border-primary w-fit text-fontPrimary flex items-center gap-2"
        >
          Read Blog
          <MdKeyboardArrowRight className="text-base" />
        </Link>
      </div>
    </section>
  );
}

export default BlogsCard;
