"use client";
import ProductDetail from "@/components/ProductDetail";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import AmazonLoader from "@/components/Skeletons/ProductDetailSkeleton";
import apiClient from "@/lib/axiosInterceptor";
import { Product } from "@/types/interface";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetailRoute = () => {
  const { data: session } = useSession();
  const [productData, setProductData] = useState<Product>();
  const searchParams = useSearchParams();
  const pid = searchParams?.get("pid");
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

  const images = productData?.SKU.map((img) => img.images);
  console.log(images);

  if (!productData) {
    return (
      <div className="delivo__container pt-10">
        {" "}
        <AmazonLoader />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-2 gap-5 delivo__container my-14">
      <ProductGallery images={images} />
      <ProductDetail data={productData} />
      <ProductInfo />
    </section>
  );
};

export default ProductDetailRoute;
