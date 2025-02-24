import { useSku } from "@/app/Hooks/useSku";
import React from "react";

const ProductInfo = () => {
  const { skuData } = useSku();
  console.log(skuData?.information);
  

  return (
    <>
      {skuData?.information && (
        <div className="space-y-2">
          {Object.entries(skuData.information).map(([key, value]) => (
            <div key={key} className="grid grid-cols-[1fr_2fr] border-b py-2">
              <span className="font-semibold text-gray-700 mr-3">
                {key.replace(/_/g, " ")}:
              </span>
              <span className="text-gray-600">{value as string}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductInfo;
