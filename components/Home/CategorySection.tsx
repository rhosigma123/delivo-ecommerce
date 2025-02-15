import React from "react";
import CategoryCard from "../Cards/CategoryCard";
import { ImageCardProps } from "@/types/interface";

const CategorySection = () => {
  return (
    <section className="delivo__container bg-background rounded-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-8 gap-y-6 p-12 my-[50px] justify-">
      <h2 className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 xl:col-span-6 2xl:col-span-7 text-xl text-fontPrimary font-bold">
        Grocery & Kitchen
      </h2>
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
      <CategoryCard imgData={undefined} name={"Fruits & Vegetables"} />
    </section>
  );
};

export default CategorySection;
