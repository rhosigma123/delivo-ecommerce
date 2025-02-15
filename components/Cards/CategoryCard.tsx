import Link from "next/link";
import React from "react";
import ImageCard from "./ImageCard";
import { CategoryCardProps } from "@/types/interface";

const CategoryCard = ({ imgData, name }: CategoryCardProps) => {
  return (
    <Link href={"/"} className="w-fit grid gap-2 justify-items-center">
      <ImageCard
        imageUrl={imgData?.imageUrl || ""}
        altText={(imgData?.altText && imgData?.altText) || ""}
        bgColor={"bg-white"}
      />
      <h3 className="text-fontPrimary text-center break-words px-2 font-bold capitalize text-lg w-fit">
        {(name && name) || ""}
      </h3>
    </Link>
  );
};

export default CategoryCard;
