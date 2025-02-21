"use client";
import React, { useContext, useEffect, useState } from "react";
import CategoryCard from "../Cards/CategoryCard";
import { useSession } from "next-auth/react";
import apiClient from "@/lib/axiosInterceptor";

const CategorySection = () => {
  const { data: session } = useSession();
  const [homeData, setHomeData] = useState<any[] | null>(null);

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        try {
          const response = await apiClient.get("/user/mainCategories");
          console.log("Main Categories Data", response.data);
          setHomeData(response.data.maincategories);
        } catch (error: any) {
          console.log(`[Error]: ${error.response.message}`);
        }
      };
      fetchData();
    }
  }, [session]);

  return (
    <>
      {homeData &&
        homeData?.map(
          (main, index) =>
            main.Category.length > 0 && (
              <section
                key={main.id}
                className={`delivo__container justify-items-center ${
                  index % 2 === 0 ? "bg-background" : "bg-white"
                } rounded-none md:rounded-2xl grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-8 gap-y-6 py-5 md:py-10 px-5 md:p-8 lg:p-12 my-[50px]`}
              >
                <h2 className="col-span-2 justify-self-start sm:col-span-4 md:col-span-5 lg:col-span-5 xl:col-span-6 2xl:col-span-7  text-xl md:text-2xl text-fontPrimary font-bold">
                  {main.name && main.name}
                </h2>
                {main.Category.map((category: any) => (
                  <CategoryCard key={category.id} data={category} />
                ))}
              </section>
            )
        )}
    </>
  );
};

export default CategorySection;
