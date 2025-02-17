import React from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import OrderDetails from "../Sheets/OrderDetails";

const Orders = () => {
  return (
    <div className="grid gap-3">
      <div className="px-3 grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-5 items-center">
        <span>Orders ID</span>
        <span>Product</span>
        <span>Order Count</span>
        <span>Amount</span>
        <span>Date</span>
        <span className="text-center">Actions</span>
      </div>
      <div className="bg-secondary p-3 rounded-xl grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-5 items-center content-center">
        <span>#12345</span>
        <div className="flex items-center gap-3">
          <Image
            src={"/appBanner.png"}
            alt="Order"
            width={80}
            height={100}
            loading="lazy"
            className="rounded-lg object-cover border bg-white w-[50px] h-[50px]"
          />
          <h4 className="text-fontPrimary font-bold text-lg">
            Aloo Lachha Paratha
          </h4>
        </div>
        <span className="white p-2 rounded-md text-fontSecondary font-semibold">
          +2 More
        </span>
        <span className="text-primary font-bold text-lg">$250</span>
        <span className="text-fontSecondary text-base font-medium">
          12 jan 2024
        </span>
        <OrderDetails />
      </div>
    </div>
  );
};

export default Orders;
