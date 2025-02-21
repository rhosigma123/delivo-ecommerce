"use client";
import ProductCard from "@/components/Cards/ProductCard";
import CategoryButton from "@/components/CategoryButton";
import apiClient from "@/lib/axiosInterceptor";
import { Category, Product, Subcategory } from "@/types/interface";
import { ChevronDown } from "lucide-react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryRoute = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const cid = searchParams?.get("cid");

  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

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

  // Fetch products when active category changes
  useEffect(() => {
    if (activeCategory) {
      const fetchProducts = async () => {
        try {
          const response = await apiClient.get(
            `/user/subcategories/${activeCategory}`
          );
          console.log(response.data);
          setProducts(response.data.subcategory.Product || []);
        } catch (error: any) {
          console.error(`[Error]: ${error.response?.data?.message}`);
        }
      };
      fetchProducts();
    }
  }, [activeCategory]);
  console.log(products);

  return (
    <>
      {/* Category Navigation */}
      <section className="bg-secondary py-1 mb-10">
        <div className="min-h-[50px] overflow-hidden flex flex-wrap delivo__container gap-3">
          <button className="hover:bg-background text-fontPrimary text-base rounded-full px-4 py-1 my-3 flex items-center">
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

      {/* Main Layout */}
      <div className="delivo__container grid grid-cols-[250px_1fr] items-start relative">
        {/* Sidebar - Category List */}
        <aside className="max-h-[calc(100vh-100px)] overflow-auto sticky top-[50px]">
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

        {/* Main Content - Products */}
        <main className="grid grid-cols-6 gap-5">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))
          ) : (
            <p className="text-gray-500 col-span-6">No products available</p>
          )}
        </main>
      </div>
    </>
  );
};

export default CategoryRoute;
