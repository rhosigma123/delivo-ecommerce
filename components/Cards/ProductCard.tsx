import React from "react";
import ImageCard from "./ImageCard";
import Link from "next/link";
import { ChevronDown, ShoppingBag } from "lucide-react";
import { Product } from "@/types/interface";
import { useRouter } from "next/navigation";
import VariantsModal from "../Modals/VariantsModal";

export interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const image = data.SKU.map(
    (sku: any) =>
      sku.images[0] ||
      sku.images[1] ||
      sku.images[2] ||
      sku.images[3] ||
      sku.images[4] ||
      sku.images[5]
  );
  const handleVariantsSelect = (e: any) => {
    e.stopPropagation();
  };

  const firstSku = data.SKU[0];

  return (
    <div
      onClick={() => router.push(`/product/${data.slug}?pid=${data.id}`)}
      className="grid gap-1 p-3 hover:bg-white rounded-2xl hover:border border border-transparent cursor-pointer content-between"
    >
      <ImageCard
        imageUrl={"/uploads/" + image || "/"}
        altText={data.name && data.name}
        bgColor={"bg-white"}
      />
      <div className="grid gap-1 content-between">
        <strong className="font-bold text-fontPrimary text-base flex items-center gap-2">
          {"₹" + (firstSku.retail && firstSku.retail) || ""}
          <span className="text-red-500 line-through font-medium text-sm">
            {"₹" + (firstSku.mrp && firstSku.mrp) || ""}
          </span>
        </strong>
        <h3 className="text-fontPrimary  break-words px-2 font-extrabold capitalize text-sm w-fit line-clamp-2 leading-5">
          {(data.name && data.name) || "NA"}
        </h3>
        {data.SKU.length === 1 ? (
          <span className="text-fontSecondary text-sm py-2">
            {data.SKU.map((sku) => sku.size.slice(0, 20))}
          </span>
        ) : (
          <div onClick={handleVariantsSelect} className="w-full">
            <VariantsModal skus={data.SKU} />
          </div>
        )}
        {data.status !== "Available" && (
          <span
            className={` ${
              data.status !== "Available" ? "text-red-500" : "text-green-500"
            } text-gray-400 text-xs font-medium block`}
          >
            {(data.status && data.status) || ""}
          </span>
        )}

        <button
          onClick={handleVariantsSelect}
          className="flex items-center h-fit self-end hover:bg-accent hover:text-white gap-2 border-accent px-4 py-1 rounded-full border text-accent text-sm font-semibold bg-white"
        >
          <ShoppingBag size={16} />
          Add to Bag
        </button>
        {/* <div className="flex justify-center h-[44px] items-center rounded-full w-full gap-4 border-accent border-2 relative bg-white">
          <button className="absolute right-0 bg-accent h-10 w-10 text-white rounded-full grid place-content-center">
            +{" "}
          </button>
          <span className="text-fontSecondary text-lg">0</span>
          <button className="absolute left-0 bg-accent h-10 w-10 text-white rounded-full grid place-content-center">
            -
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
