import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MoreVertical, Receipt } from "lucide-react";
import Image from "next/image";

const OrderDetails = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-center w-fit justify-self-center p-2 rounded-md hover:bg-white">
          <MoreVertical />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white p-5 grid gap-5 content-between w-[500px] ">
        <div>
          <SheetHeader>
            <SheetTitle className="border-b pb-4 text-fontPrimary text-lg font-bold">
              Order Details
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4 overflow-auto h-[calc(100vh-300px)] content-start">
            <div className="grid grid-cols-[1fr_200px] content-center items-center">
              <span className="text-fontPrimary font-bold text-lg">
                Order ID
              </span>
              <p className="text-fontSecondary text-base col-start-1 col-end-2">
                #21231243412312
              </p>
              <span className="row-start-1 justify-self-end row-end-3 col-start-2 col-end-3 text-green-500 text-base font-bold">
                Delivered
              </span>
            </div>

            <div>
              <span className="text-fontPrimary font-bold text-lg">
                Date & Time
              </span>
              <p className="text-fontSecondary text-base col-start-1 col-end-2">
                13 Dec 2024 | 10:47:02
              </p>
            </div>
            <div>
              <span className="text-fontPrimary font-bold text-lg">
                Delivered to
              </span>
              <p className="text-fontSecondary text-base col-start-1 col-end-2">
                601/B Virani Residency, Shil, Mumbra, Thane 400612.
              </p>
            </div>
            <div>
              <span className="text-fontPrimary font-bold text-lg">
                Payment Method
              </span>
              <p className="text-fontSecondary text-base col-start-1 col-end-2">
                Cash On Delivery
              </p>
            </div>
            <hr className="my-5" />
            <div className="grid gap-3">
              <h3>Items</h3>
              <div className=" grid grid-cols-[50px_1fr_100px] gap-2">
                <Image
                  src={"/qucik-craves-mockup.png"}
                  alt="Aloo Tikka"
                  className="rounded-lg object-cover w-[50px] h-[50px] bg-white border"
                  width={80}
                  height={80}
                />
                <div>
                  <h3 className="text-fontPrimary font-bold text-lg">
                    Aloo Lachha Paratha
                  </h3>
                  <span className="text-base text-gray-400">2 Pieces</span>
                </div>
                <span className="text-fontPrimary font-bold text-lg justify-self-end">
                  $120
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 ">
          <div className="bg-[#f5f5f5] rounded-lg grid grid-cols-[20px_1fr] p-3">
            <Receipt color="#373737" size={18} />
            <h3 className="text-sm font-semibold text-black">Bill Summary</h3>
            <div className="grid gap-1 w-full col-span-2 mt-3">
              <div className="w-full flex justify-between items-center">
                <p className="text-sm font-medium text-fontSecondary">
                  Item Total
                </p>
                <span className="flex gap-2 items-center text-sm text-black font-semibold">
                  <strong className="line-through text-fontSecondary text-xs">
                    $77
                  </strong>{" "}
                  $26
                </span>
              </div>
              <hr className="bg-black h-[2px] my-3" />
            </div>
            <div className="flex justify-between gap-5 w-full col-span-2">
              <span className="text-md text-black font-medium">To Pay</span>
              <span className="flex gap-2 items-center text-sm text-black font-semibold">
                <strong className="line-through text-fontSecondary text-xs">
                  $757
                </strong>{" "}
                $300
              </span>
            </div>
            <div className="flex justify-between gap-5 w-full col-span-2">
              <span className="text-xs text-fontSecondary">
                Incl. of all taxes and charges
              </span>
              <strong className="text-green-500 text-sm font-medium">
                Saved $900
              </strong>
            </div>
          </div>
          <button
            className="bg-gray-800 text-white w-full rounded-lg py-2 px-4"
            type="button"
          >
            Reorder
          </button>{" "}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OrderDetails;
