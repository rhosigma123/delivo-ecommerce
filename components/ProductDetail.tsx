import { Product } from "@/types/interface";
import Image from "next/image";
import React, { useState } from "react";

export interface ProductProps {
  data: Product | undefined;
}

const ProductDetail: React.FC<ProductProps> = ({ data }) => {
  // Track active SKU index, default to the first SKU
  const [activeSkuIndex, setActiveSkuIndex] = useState(0);

  // Get active SKU details
  const activeSku = data?.SKU[activeSkuIndex];

  return (
    <div>
      <h1 className="text-4xl font-bold text-fontPrimary">
        {(data?.name && data?.name) || ""} -{" "}
        {data?.SKU.map((sku, index) =>
          activeSkuIndex === index ? sku.size || "" : null
        )}
      </h1>
      <hr className="my-2" />

      <div className="grid gap-4">
        <span className="text-fontPrimary font-medium">Select Unit</span>

        {/* SKU Selection */}
        <div className="grid grid-cols-3 gap-3">
          {data?.SKU.map((sku, index) => (
            <div
              key={sku.id}
              onClick={() => setActiveSkuIndex(index)}
              className={`cursor-pointer bg-background border-2 rounded-xl flex gap-2 p-2 transition-all ${
                activeSkuIndex === index
                  ? "border-[#B6C8FF]"
                  : "border-transparent"
              } hover:border-[#B6C8FF]`}
            >
              <span className="grid rounded-tr-lg text-white items-center gap-0 leading-3 p-1 break-word text-base px-2 rounded-bl-lg bg-green-500">
                <strong>{sku.discount}%</strong> off
              </span>
              <div className="gap-0 grid content-center">
                <span className="text-fontPrimary font-bold">
                  {sku.size || ""}
                </span>
                <span className="text-green-500 text-base font-semibold">
                  ${sku.retail || ""}
                </span>
                <span className="text-sm text-gray-400 flex gap-2 font-medium">
                  MRP
                  <span className="line-through text-red-600 text-sm">
                    ${sku.mrp || ""}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <span className="text-xs text-gray-400 block">
          (Inclusive of all taxes)
        </span>

        {/* Quantity Selection & Add to Cart */}
        <div className="grid grid-cols-[100px_1fr] gap-3">
          {activeSku && (
            <select
              key={activeSku.id}
              name="quantity"
              className="border outline-none focus:outline-none px-2 py-1 rounded-lg"
            >
              {Array.from({ length: activeSku.moq }, (_, i) => i + 1).map(
                (num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                )
              )}
            </select>
          )}

          <button
            type="button"
            className="bg-accent rounded-full text-white py-2 px-4 text-base border-accent border-2 active:bg-white transition-all active:text-accent font-bold"
          >
            Add to Bag
          </button>
        </div>
        <div>
          <h3>Why shop from Delivo?</h3>
          <div>
            <Image src={"/public/apple-store.png"} alt="Fast Delivery" />
            <div className="grid">
              <h4>Why shop from Delivo?</h4>
              <p>
                Get your essentials delivered to your doorstep in record time
                from nearby Darkstores.
              </p>
            </div>
          </div>
        </div>

        {/* 
        <span className="text-fontPrimary underline">
          View all products from this Brand
        </span> */}
        <hr />
      </div>
    </div>
  );
};

export default ProductDetail;
