import { useSku } from "@/app/Hooks/useSku";
import apiClient from "@/lib/axiosInterceptor";
import { Product, ProductProps, SKU } from "@/types/interface";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const whyDelivo = [
  {
    id: 1,
    image: "/favicon",
    title: "Lightning-Fast Delivery",
    message:
      "Get your essentials delivered to your doorstep in record time from nearby Darkstores.",
  },
  {
    id: 2,
    image: "/favicon",
    title: "Unbeatable Prices & Deals",
    message:
      "Enjoy direct-from-manufacturer pricing with exclusive discounts and offers.",
  },
  {
    id: 3,
    image: "/favicon",
    title: "Massive Product Range",
    message:
      "Explore 5000+ products across groceries, personal care, household essentials, and more.",
  },
];

const ProductDetail: React.FC<ProductProps> = ({ data }) => {
  const [activeSkuIndex, setActiveSkuIndex] = useState(0);
  const activeSku = data?.SKU[activeSkuIndex];
  const { data: session } = useSession();
  const skuid = activeSku?.id;
  const { skuData, setSkuData, skuId, setSkuId } = useSku();

  return (
    <div className="sticky top-[100px]">
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
              onClick={() => {
                setActiveSkuIndex(index); // Function 1: Set the active SKU
                setSkuId(sku.id);
              }}
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

        <div className=" grid gap-5 mt-5">
          <h3 className="text-fontPrimary font-bold text-lg">
            Why shop from Delivo?
          </h3>
          {whyDelivo.map((why) => (
            <div
              key={why.id}
              className="grid grid-cols-[50px_1fr] gap-2 items-start"
            >
              <Image
                width={100}
                height={100}
                src={why.image}
                alt={why.title}
                className="border bg-white rounded-full"
              />
              <div className="grid">
                <h4 className="font-bold text-base text-fontPrimary">
                  {why.title}
                </h4>
                <p className=" text-sm text-fontSecondary">{why.message}</p>
              </div>
            </div>
          ))}
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
