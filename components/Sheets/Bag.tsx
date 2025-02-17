import React from "react";
import { Button } from "@/components/ui/button";
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
import {
  BadgePercent,
  ChevronDown,
  MessageSquareMore,
  Receipt,
  ShoppingBag,
} from "lucide-react";
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
      <SheetContent className="bg-white w-[500px] p-3">
        <SheetHeader className="border-b pb-5">
          <SheetTitle className="text-fontPrimary text-xl font-bold">
            Shopping Bag
          </SheetTitle>
          <div className="bg-[#e0fff5] px-5 py-2 rounded-lg flex justify-between items-center">
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

        <main className=" h-[calc(100vh-200px)] overflow-auto content-start p-2">
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

          <div className="bg-[#f5f5f5] p-4 rounded-xl">
            <label htmlFor="note">Add Note</label>
            <textarea
              className="rounded-xl border p-4 text-gray-400 h-[100px]"
              name="note"
              id="note"
            >
              Write a short note
            </textarea>
          </div>

          <div className="relative bg-[#f5f5f5] p-4 rounded-lg">
            <Image
              alt="Delivery Partner"
              src={"/partner.png"}
              className="absolute -top-[20%] right-0 transform -translate-y-[20%] w-[100px] object-contain h-[100px]"
              width={100}
              height={100}
            />

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
          <div className="bg-[#f5f5f5] rounded-xl grid grid-cols-[2px_1fr] p-3">
            <BadgePercent />
            <div className="grid">
              <p>Promo Code Applied</p>
              <p className="text-xs text-fontSecondary flex gap-2 items-center">
                <strong className="text-green-500 font-medium uppercase">
                  DELIVONEW26
                </strong>
                $26 coupon savings
              </p>
            </div>
          </div>
          <div className="bg-[#f5f5f5] rounded-xl p-3 ">
            <h4 className="text-base font-bold text-fontPrimary">
              Ordering for someone else?
            </h4>
            <p className="text-xs font-medium text-fontSecondary">
              Add name info and contact
            </p>
          </div>

          <div className="items-center grid bg-[#f5f5f5] rounded-xl p-3 grid-cols-[20px_1fr] gap-2">
            <MessageSquareMore size={20} color="#373737" />
            <div>
              <h4 className="text-base font-bold text-fontPrimary">
                Delivery Instructions
              </h4>
              <p className="text-xs font-bold text-fontSecondary">
                Delivry partner will be notified
              </p>
            </div>
            <pre className="text-fontPrimary text-sm bg-white p-3 rounded-md w-max">
              <ul className="list-inside ">
                <li className="list-disc">Leave with security guard</li>
                <li className="list-disc">Dono t ringt the bell</li>
              </ul>
            </pre>
          </div>

          <details className="group bg-[#f5f5f5] rounded-xl p-3">
            <summary className="flex items-center gap-2 cursor-pointer list-none">
              <MessageSquareMore size={20} color="#373737" />
              <div>
                <h4 className="text-base font-bold text-fontPrimary">
                  Delivery Partner's Safety
                </h4>
                <p className="text-xs font-bold text-fontSecondary">
                  Here's how we ensure our delivery partner's safety
                </p>
              </div>
              <ChevronDown className="ml-auto transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="mt-2 text-sm text-fontSecondary leading-relaxed overflow-hidden transition-all duration-300 group-open:max-h-fit max-h-0">
              Our delivery partners are equipped with safety gear and trained to
              follow health protocols. We continuously monitor safety standards.
            </div>
          </details>
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
        </main>

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
