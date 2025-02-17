"use client";
import Profile from "@/components/Sheets/Profile";
import Address from "@/components/Tabs/Address";
import Orders from "@/components/Tabs/Orders";
import Support from "@/components/Tabs/Support";
import Wallet from "@/components/Tabs/Wallet";
import { LogOut, MoreVertical } from "lucide-react";
import React, { useState } from "react";

type TabKeys = "orders" | "address" | "wallet" | "support";

const AccountRoute = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>("orders");

  const tabs = ["orders", "address", "wallet", "support"];
  const tabsComponent = {
    orders: <Orders />,
    address: <Address />,
    wallet: <Wallet />,
    support: <Support />,
  };

  const handleTab = (tab: TabKeys) => {
    setActiveTab(tab);
  };

  return (
    <section className="grid gap-10 delivo__container my-14">
      <div className="border-2 rounded-xl p-2 bg-white flex w-full justify-between">
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-3">
            <span className="text-white capitalize font-bold text-xl bg-primary p-2 h-12 w-12 rounded-full flex items-center justify-center">
              LA
            </span>
            <span className="text-fontPrimary font-semibold">
              Lanjekar Saeed
            </span>
          </div>
          <hr className="rotate-90 text-gray-400 h-2" />
          <span>+91 77180 12809</span>
          <hr className="rotate-90 text-gray-400 h-2" />
          <span>ayaan@ayaan.com</span>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-red-600 bg-secondary border px-3  py-2 rounded-lg text-nowrap font-bold flex items-center gap-2">
            Log Out <LogOut size={18} />
          </button>
          <Profile
            id={0}
            data={undefined}
            onUpdate={function (data: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
      <div>
        <div className="flex border-b w-fit items-center">
          {tabs.map((tab: any) => (
            <button
              key={tab}
              onClick={() => handleTab(tab)}
              className={`text-fontPrimary text-lg font-bold px-8 py-2  border-b-0
            border transition-colors duration-300  first:rounded-tl-xl last:rounded-tr-xl
            ${activeTab === tab ? "border  text-primary bg-background " : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="border p-5 rounded-b-2xl rounded-br-2xl">
          {tabsComponent[activeTab]}
        </div>
      </div>
    </section>
  );
};

export default AccountRoute;
