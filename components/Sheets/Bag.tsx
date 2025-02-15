import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BadgePercent, ShoppingBag } from "lucide-react";
import Image from "next/image";
import ProductCard from "../Cards/ProductCard";

const Bag = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="shadow-none border-none h-full flex gap-2 items-center">
          <ShoppingBag size={40} color="#373737" />
          <span className="text-fontSecondary w-full grid text-nowrap text-left font-medium text-base">
            Shopping Bag{" "}
            <strong className="text-fontPrimary font-bold text-xl">
              $20.00
            </strong>
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white w-[500px]">
        <SheetHeader className="border-b pb-5">
          <SheetTitle className="text-fontPrimary text-xl font-bold">
            Shopping Bag
          </SheetTitle>
          <div className="bg-[#E0FFF5] px-5 py-2 rounded-lg flex justify-between items-center">
            <strong className="text-fontPrimary font-bold">$40</strong>
            <span className="text-fontPrimary text-base">
              Saved on this order
            </span>
            <Image
              src={"/coin.svg"}
              alt="Coin"
              width={30}
              height={30}
              loading="lazy"
            />
          </div>
        </SheetHeader>
        <div className="grid gap-3 border-b border-dashed">
          <h3>Items in your bag</h3>
          <div>
            <Image
              src={"/qucik-craves-mockup.png"}
              alt="Order Image"
              width={80}
              height={80}
              loading="lazy"
              className="rounded-lg object-cover"
            />
            <div className="grid grid-cols-[1fr_.5fr_.5fr] gap-3">
              <div>
                <h3 className="text-fontPrimary text-lg font-medium">
                  Aloo Lachha Paratha
                </h3>
                <p className="text-gray-400 text-sm">2 Pieces</p>
              </div>
              <div className="flex justify-center h-[44px] items-center rounded-full w-full gap-4 border-accent border-2 relative bg-white">
                <button className="absolute right-0 bg-accent h-10 w-10 text-white rounded-full grid place-content-center">
                  +{" "}
                </button>
                <span className="text-fontSecondary text-lg">0</span>
                <button className="absolute left-0 bg-accent h-10 w-10 text-white rounded-full grid place-content-center">
                  -
                </button>
              </div>
              <div className="grid">
                <strong className="text-fontPrimary font-bold text-base">
                  $110
                </strong>
                <span className="text-fontSecondary text-base">
                  MRP <span className="line-through text-red-500">$130</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5f5] px-4 py-2 rounded-lg flex items-center">
          <span className="text-lg text-font-primary">Missed Something?</span>
          <button className="text-white font-medium px-4 py-2 rounded-lg bg-green-500">
            Shop now
          </button>
        </div>

        <div>
          <span className="text-lg text-font-primary">Missed Something?</span>
          <ProductCard />
        </div>

        <div className="bg-[#E0FFF5] p-4 rounded-xl">
          <label htmlFor="note">Add Note</label>
          <textarea
            className="rounded-xl border p-4 text-gray-400 h-[100px]"
            name="note"
            id="note"
          >
            Write a short note
          </textarea>
        </div>

        <div>
          <h3>Tip your delivery partner</h3>
          <p>100% of the amount goes to your delivery partner</p>

          <span className="bg-white px-4 py-2 rounded-lg">$10 😊</span>
          <span className="bg-white px-4 py-2 rounded-lg relative">
            $20 😁
            <span className="absolute bottom-2 bg-green-500 text-xs p-1 rounded-b-md text-white">
              Most Tipped
            </span>
          </span>
          <span className="bg-white px-4 py-2 rounded-lg">$10 🤑</span>
          <button className="bg-white px-4 py-2 rounded-lg">Custom</button>
        </div>
        <div className="bg-[#E0FFF5] rounded-xl grid grid-cols-[2px_1fr] p-3">
          <BadgePercent />
          <div className="grid">
            <p>Promo Code Applied</p>
            <p className="text-xs text-fontSecondary flex gap-2 items-center">
              <strong className="text-green-500 font-medium uppercase">
                DELIVONEW26
              </strong>{" "}
              $26 coupon savings
            </p>
          </div>
        </div>
        <div className="bg-[#E0FFF5] rounded-xl p-3 ">
          <p className="text-base font-bold text-fontPrimary">
            Ordering for someone else?
          </p>
          <p className="text-xs font-medium text-fontSecondary">
            Add name info and contact
          </p>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Bag;
