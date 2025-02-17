import ProductDetail from "@/components/ProductDetail";
import ProductGallery from "@/components/ProductGallery";
import React from "react";

const ProductDetailRoute = () => {
  return (
    <section className="grid grid-cols-2 gap-5 delivo__container my-14">
      <ProductGallery />
      <ProductDetail />
    </section>
  );
};

export default ProductDetailRoute;
