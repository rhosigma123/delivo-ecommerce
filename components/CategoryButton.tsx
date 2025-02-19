import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/config";

export interface CategoryBtnProps {
  categoryName: string;
  categoryImage: string;
}

const CategoryButton: React.FC<CategoryBtnProps> = ({
  categoryName,
  categoryImage,
}) => {
  const imgUrl = BASE_URL + categoryImage;

  return (
    <button
      type="button"
      className="flex w-full gap-2 items-center border-l-4 hover:border-primary border-transparent px-2 py-1 hover:bg-background transition-all ease-linear"
    >
      <Image
        src={imgUrl || "/"}
        width={50}
        height={50}
        alt={categoryName || "Category"}
        className="rounded-full bg-white object-cover"
      />
      <span className="text-lg text-fontPrimary font-semibold">
        {categoryName && categoryName}
      </span>
    </button>
  );
};

export default CategoryButton;
