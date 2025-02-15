import Image from "next/image";
import React from "react";
import QuickCravesCategoryCard from "../Cards/QuickCraves/QuickCravesCategoryCard";
import Start from "../Svg/Start";
import RestaurantCard from "../Cards/RestaurantCard";
import { ArrowUpRight } from "lucide-react";
import ProductCard from "../Cards/ProductCard";

const QuickCravesSection = () => {
  return (
    <section className="delivo__container bgQuickCraves grid gap-5 p-[50px] rounded-2xl my-14">
      <h2 className="text-xl font-bold text-fontPrimary">
        What do you want to eat today?
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-10 gap-y-6 ">
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <QuickCravesCategoryCard />
        <button className="text-lg text-white rounded-xl px-4 py-1 hover:underline transition-all ease-linear bg-pink-600 flex items-center duration-300  text-center w-fit ">
          View All
        </button>
      </div>
      <div className="flex justify-between gap-10 items-center">
        <h2 className="text-xl font-bold text-fontPrimary">
          Top rated restaurants near you
        </h2>
        <button className="text-lg text-white rounded-full px-4 py-1 hover:underline transition-all ease-linear bg-pink-600 flex items-center group relative overflow-hidden text-center min-w-[90px] hover:min-w-[110px] duration-300">
          View All
          <ArrowUpRight
            size={18}
            className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 bottom-[-20px] group-hover:bottom-3 right-3"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default QuickCravesSection;
