import React from "react";
import AddressCard from "../Cards/AddressCard";

const Address = () => {
  return (
    <div className="space-y-4">
      <button className="text-white text-bold text-lg bg-primary px-4 py-1 rounded-full">
        Add New Address
      </button>
      <hr />
      <div className="grid grid-cols-3 gap-5">
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </div>
    </div>
  );
};

export default Address;
