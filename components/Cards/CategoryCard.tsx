import Link from "next/link";
import React from "react";
import ImageCard from "./ImageCard";
import { CategoryCardProps } from "@/types/interface";

const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <Link
      href={`/category/${data.slug}`}
      className="w-fit grid gap-2 justify-items-center content-start"
    >
      <ImageCard
        imageUrl={data.image || ""}
        altText={(data.name && data.name) || ""}
        bgColor={"bg-white"}
      />
      <h3 className="text-fontPrimary text-center break-words px-2 font-bold capitalize text-lg w-fit">
        {(data.name && data.name) || ""}
      </h3>
    </Link>
  );
};

export default CategoryCard;
