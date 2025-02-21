import React from "react";
import ImageCard from "./ImageCard";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/types/interface";

export interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  console.log(data);
  const image = data.SKU.map(
    (sku: any) =>
      sku.images[0] ||
      sku.images[1] ||
      sku.images[2] ||
      sku.images[3] ||
      sku.images[4] ||
      sku.images[5]
  );

  return (
    <Link
      href={`/product/${data.id}`}
      className="grid gap-1 p-3 hover:bg-white rounded-2xl hover:border border border-transparent"
    >
      <ImageCard
        imageUrl={"/uploads/" + image || "/"}
        altText={data.name && data.name}
        bgColor={"bg-white"}
      />
      <div className="grid gap-1">
        <strong className="font-bold text-fontPrimary text-lg flex items-center gap-3">
          ₹450
          <span className="text-red-500 line-through font-medium text-base">
            70
          </span>
        </strong>
        <h3 className="text-fontPrimary  break-words px-2 font-bold capitalize text-base w-fit line-clamp-2 leading-6">
          {(data.name && data.name) || "NA"}
        </h3>
        <span className="text-gray-400 text-base font-medium block">5Kg</span>
        {data.status === "Available" && (
          <span
            className={` ${
              data.status !== "Available" ? "text-red-500" : "text-green-500"
            } text-gray-400 text-xs font-medium block`}
          >
            {(data.status && data.status) || ""}
          </span>
        )}

        <button className="flex items-center hover:bg-accent hover:text-white gap-2 border-accent px-4 py-1 rounded-full border text-accent text-sm font-semibold bg-white">
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
    </Link>
  );
};

export default ProductCard;
