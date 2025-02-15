import React from "react";

const ProductDetail = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-fontPrimary">
        Spinach- Cleaned without rroots{" "}
      </h1>
      <hr className="my-2" />
      <div className="grid gap-4">
        <span className="text-fontPrimary font-medium">Select Unit</span>
        <div className="grid grid-cols-3 gap-3">
          <div className="hover:border-2 bg-background border-2 border-transparent hover:border-[#B6C8FF] p-2 rounded-xl flex gap-2 ">
            <span className="grid rounded-tr-lg text-white p-2 break-word text-lg rounded-bl-lg bg-green-500">
              <strong>50%</strong> off
            </span>
            <div className="grid ">
              <span className="text-fontPrimary font-bold">2 Bunck</span>
              <span className="text-green-500 text-base font-semibold">
                $60
              </span>
              <span className="text-sm text-gray-400 flex gap-2 font-medium">
                MRP
                <span className="line-through text-red-600 text-sm">$120</span>
              </span>
            </div>
          </div>
        </div>
        <span className="text-xs text-gray-400 block">
          (Inclusive of all taxes)
        </span>
        <div className="grid grid-cols-[100px_1fr] gap-3">
          <select
            name="quantity"
            className="border outline-none focus:outline-none px-2 py-1 rounded-lg"
          >
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="1">1</option>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="3">3</option>
          </select>
          <button
            type="button"
            className="bg-accent rounded-full text-white py-2 px-4 text-base border-accent border-2 active:bg-white transition-all active:text-accent font-bold"
          >
            Add to Bag
          </button>
        </div>
        <span className="text-fontPrimary underline">
          View all products from this Brand
        </span>
        <hr />
      </div>

      {/* <div>
        <h3>Why shop from Delivo?</h3>
        <div className="flex gap-3">

        </div>
      </div> */}
    </div>
  );
};

export default ProductDetail;
