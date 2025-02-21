import Image from "next/image";
import React from "react";
import QuickCravesCategoryCard from "../Cards/QuickCraves/QuickCravesCategoryCard";
import Start from "../Svg/Start";
import RestaurantCard from "../Cards/RestaurantCard";
import { ArrowUpRight } from "lucide-react";
import ProductCard from "../Cards/ProductCard";

const QuickCravesSection = () => {
  return (
    <section className="delivo__container bgQuickCraves grid gap-5 p-5 lg:p-[50px] rounded-2xl my-14">
      <h2 className=" justify-self-start  text-xl md:text-2xl text-fontPrimary font-bold">
        What do you want to eat today?
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-5 sm:gap-x-10 gap-y-6 ">
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
        <button className="text-lg text-white rounded-xl  px-4 py-1 hover:underline transition-all ease-linear bg-pink-600 duration-300 w-full">
          View All
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mt-5 gap-5 md:gap-10 items-start md:items-center">
        <h2 className="text-xl font-bold text-fontPrimary">
          Top rated restaurants near you
        </h2>
        <button className="text-lg hidden text-nowrap text-white rounded-full px-4 py-1 hover:underline transition-all ease-linear bg-pink-600 sm:flex items-center group relative overflow-hidden text-center min-w-[90px] hover:min-w-[110px] duration-300">
          View All
          <ArrowUpRight
            size={18}
            className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 bottom-[-20px] group-hover:bottom-3 right-3"
          />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <button className="text-lg sm:hidden text-nowrap text-white rounded-full px-4 py-1 hover:underline transition-all ease-linear bg-pink-600 block items-center group relative overflow-hidden text-center w-full mt-5 sm:mt-0 h-fit col-span-2 sm:col-span-1 duration-300">
          View All
        </button>
      </div>
    </section>
  );
};

export default QuickCravesSection;
