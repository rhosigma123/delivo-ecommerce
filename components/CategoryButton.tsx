import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/config";

export interface CategoryBtnProps {
  categoryName: string;
  categoryImage: string | null;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryButton: React.FC<CategoryBtnProps> = ({
  categoryName,
  categoryImage,
  isActive = false,
  onClick,
}) => {
  console.log(categoryImage, categoryName);

  const imgUrl = categoryImage ? BASE_URL + categoryImage : "/placeholder.png";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full gap-2 items-center border-l-4 px-2 py-1 transition-all ease-linear hover:border-primary 
        ${
          isActive
            ? "border-primary bg-gray-100"
            : "border-transparent hover:bg-background"
        }
      `}
    >
      <Image
        src={imgUrl}
        width={50}
        height={50}
        alt={categoryName || "Category"}
        className="rounded-full bg-white object-cover border h-[50px] w-[50px]"
      />
      <span className="text-base text-left line-clamp-2 text-fontPrimary font-semibold">
        {categoryName}
      </span>
    </button>
  );
};

export default CategoryButton;
