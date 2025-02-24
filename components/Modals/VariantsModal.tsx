import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronDown, ShoppingBag } from "lucide-react";
import { VarinatModalProps } from "@/types/interface";
import Image from "next/image";
import { BASE_URL } from "@/config";

const VariantsModal: React.FC<VarinatModalProps> = ({ skus }) => {
  console.log(skus);

  return (
    <Dialog>
      <DialogTrigger className="w-full line-clamp-1">
        <button className="w-full relative max-h-[30px] flex text-fontPrimary cursor-pointer items-center justify-between text-sm font-medium border px-2 py-1 rounded-md">
          {skus[0].size?.slice(0, 10)}{" "}
          <ChevronDown className="absolute right-2 bg-white h-full" size={16} />
        </button>
      </DialogTrigger>
      <DialogContent className=" overflow-auto sm:rounded-2xl h-fit p-5 gap-2">
        <DialogHeader>
          <DialogTitle className="text-center text-fontPrimary font-bold mb-5">
            Select other options
          </DialogTitle>
        </DialogHeader>

        {skus.map((sku) => (
          <div className="p-2 border content-center relative rounded-xl gap-3 items-center max-h-[calc(100vh-300px)] overflow-auto h-fit bg-white grid grid-cols-[2fr_1fr_1fr]">
            <div className="flex gap-2 items-center">
              <Image
                width={50}
                height={50}
                src={
                  (sku.images.length > 0 && `${BASE_URL}${sku.images[0]}`) || ""
                }
                alt={sku.size}
                className="rounded-lg bg-white border object-cover"
              />
              <span className="text-sm text-fontPrimary font-medium">
                {(sku.size && sku.size) || ""}
              </span>
            </div>
            <div className="grid grid-cols-2 justify-items-center gap-2 items-center">
              <span className="justify-self-end text-fontPrimary font-bold text-sm">
                {(sku.retail !== null ? `₹${sku.retail} ` : "") || ""}
              </span>
              <span className="justify-self-start line-through text-xs text-fontSecondary">
                {(sku.mrp !== null ? `₹${sku.mrp} ` : "") || ""}
              </span>
              <span className="bg-green-600 col-span-2  px-1 text-white rounded py-.5 text-xs">
                {(sku.discount !== null ? `₹${sku.discount} off` : "") || ""}
              </span>
            </div>
            <button className="flex items-center w-fit h-fit justify-self-end hover:bg-accent hover:text-white gap-2 border-accent px-4 py-1 rounded-full border text-accent text-sm font-semibold bg-white">
              <ShoppingBag size={16} />
              Add
            </button>{" "}
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default VariantsModal;
