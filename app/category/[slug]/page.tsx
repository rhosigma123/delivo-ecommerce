"use client";
import { CategoryContext } from "@/app/Context/CategoryContext";
import { useCategory } from "@/app/Hooks/useCategory";
import ProductCard from "@/components/Cards/ProductCard";
import CategoryButton from "@/components/CategoryButton";
import apiClient from "@/lib/axiosInterceptor";
import { Category, Product } from "@/types/interface";
import { ChevronDown } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SubCategorySkeleton from "@/components/Skeletons/SubCategorySekeleton";
import ProductCardsSkeleton from "@/components/Skeletons/ProductCardSkeleton";
import CategorySkeleton from "@/components/Skeletons/CategorySkeleton";

const CategoryRoute = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const cid = searchParams?.get("cid");
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { mainCategoryData } = useCategory();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleCategory = (e: any) => {
    const newQuery = createQueryString("cid", e || "cid");
    router.push(`?${newQuery}`, { scroll: false });
  };

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        try {
          const response = await apiClient.get(`/user/categories/${cid}`);
          setCategoryData(response.data.category);

          // Automatically set the first subcategory as active
          if (response.data.category?.Subcategory?.length > 0) {
            const firstSubCategory = response.data.category.Subcategory[0];
            setActiveCategory(firstSubCategory.id);
          }
        } catch (error: any) {
          console.error(`[Error]: ${error.response?.data?.message}`);
        }
      };
      fetchData();
    }
  }, [session, cid]);

  useEffect(() => {
    if (activeCategory) {
      const fetchProducts = async () => {
        try {
          const response = await apiClient.get(
            `/user/subcategories/${activeCategory}`
          );
          setProducts(response.data.subcategory.Product || []);
        } catch (error: any) {
          console.error(`[Error]: ${error.response?.data?.message}`);
        }
      };
      fetchProducts();
    }
  }, [activeCategory]);

  const handleMore = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {mainCategoryData ? (
        <section className="bg-secondary">
          <div className="delivo__container relative">
            <div className="flex flex-wrap h-[40px] delivo__container relative gap-y-3 overflow-hidden">
              {mainCategoryData?.map((main: any) =>
                main.Category.map((cat: any) => (
                  <button
                    onClick={() => handleCategory(cat.id)}
                    className="border bg-white text-fontPrimary text-sm px-4 py-2 flex items-center"
                  >
                    {cat.name}
                  </button>
                ))
              )}
              <button
                onClick={handleMore}
                type="button"
                className="absolute top-0 right-0 z-10 flex gap-2 h-full items-center text-fontPrimary  py-2 w-[120px] text-right px-5 bg-gradient-to-r pl-10 from-[#ffffffd3] to-[#ffffff]"
              >
                More <ChevronDown size={16} />
              </button>
            </div>
            {isOpen && (
              <motion.div
                initial={{ maxHeight: 0, opacity: 0, scale: 0.95 }}
                animate={
                  isOpen
                    ? { maxHeight: "500px", opacity: 1, scale: 1 }
                    : { maxHeight: 0, opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-auto bg-white w-[200px] grid absolute top-9 z-50 right-0"
              >
                {mainCategoryData?.map((main: any) =>
                  main.Category.map((cat: any) => (
                    <button
                      onClick={() => handleCategory(cat.id)}
                      key={cat.id}
                      className="border hover:bg-secondary text-fontPrimary text-left text-sm px-4 py-2 flex items-center"
                    >
                      {cat.name}
                    </button>
                  ))
                )}
              </motion.div>
            )}
          </div>
        </section>
      ) : (
        <div className="delivo__container">
          <CategorySkeleton />
        </div>
      )}

      {/* Main Layout */}
      <div className="delivo__container grid grid-cols-[250px_1fr] items-start relative">
        {categoryData ? (
          <aside className="max-h-[calc(100vh-100px)] noScrollBar overflow-auto sticky top-[50px]">
            {categoryData?.Subcategory.map((subCat) => (
              <CategoryButton
                key={subCat.id}
                categoryName={subCat.name}
                categoryImage={subCat.image}
                isActive={subCat.id === activeCategory}
                onClick={() => setActiveCategory(subCat.id)}
              />
            ))}
          </aside>
        ) : (
          <SubCategorySkeleton />
        )}

        {products.length > 0 ? (
          <main className="grid grid-cols-6 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </main>
        ) : (
          <ProductCardsSkeleton />
        )}
      </div>
    </>
  );
};

export default CategoryRoute;
