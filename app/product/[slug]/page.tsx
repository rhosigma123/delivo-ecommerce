"use client";
import { useSku } from "@/app/Hooks/useSku";
import ProductDetail from "@/components/ProductDetail";
import SingleProductSlider from "@/components/ProductGallery";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductSkeleton from "@/components/Skeletons/ProductDetailSkeleton";
import apiClient from "@/lib/axiosInterceptor";
import { Product } from "@/types/interface";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const ProductDetailRoute = () => {
  const { data: session } = useSession();
  const [productData, setProductData] = useState<Product>();
  const searchParams = useSearchParams();
  const pid = searchParams?.get("pid");
  const { skuData } = useSku();

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        try {
          const response = await apiClient.get(`/user/products/${pid}`);
          console.log(response.data.product);
          setProductData(response.data.product);
        } catch (error: any) {
          console.error(`[Error]: ${error.response?.data?.message}`);
        }
      };
      fetchData();
    }
  }, [session, pid]);

  if (!productData) {
    return (
      <div className="delivo__container pt-10">
        <ProductSkeleton />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-[2fr_1.2fr] gap-5 delivo__container my-14">
      <SingleProductSlider productData={productData} />
      <ProductDetail data={productData} />
      <ProductInfo />
    </section>
  );
};

export default ProductDetailRoute;
