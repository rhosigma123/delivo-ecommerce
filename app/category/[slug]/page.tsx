import ProductCard from "@/components/Cards/ProductCard";
import CategoryButton from "@/components/CategoryButton";
import { ChevronDown } from "lucide-react";
import React from "react";

const CategoryRoute = () => {
  return (
    <>
      <section className="bg-secondary py-1 mb-10">
        <div className="min-h-[50px] overflow-hidden flex flex-wrap delivo__container gap-3 ">
          <button
            className="hover:bg-background text-fontPrimary text-base rounded-full px-4 py-1 my-3
           flex items-center"
          >
            Fruits & Vegetables
          </button>

          <button
            type="button"
            className="flex gap-2 items-center text-fontPrimary"
          >
            More <ChevronDown />
          </button>
        </div>
      </section>
      <div className="delivo__container grid grid-cols-[250px_1fr] items-start">
        <aside className="max-h-[calc(100vh-100px)] overflow-auto">
          <CategoryButton
            categoryName={"Ayaan shaikh"}
            categoryImage={"/public/appBanner.png"}
          />
        </aside>
        <main className="grid grid-cols-6 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </main>
      </div>
    </>
  );
};

export default CategoryRoute;
