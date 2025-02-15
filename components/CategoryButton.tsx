import React from "react";
import Image from "next/image";

const CategoryButton = () => {
  return (
    <button
      type="button"
      className="flex w-full gap-2 items-center border-l-4 hover:border-primary border-transparent px-2 py-1 hover:bg-background transition-all ease-linear"
    >
      <Image
        src={"/product.png"}
        width={50}
        height={50}
        alt="Category"
        className="rounded-full bg-white object-cover"
      />
      <span className="text-lg text-fontPrimary font-semibold">All</span>
    </button>
  );
};

export default CategoryButton;
