import { useContext } from "react";
import { SkuContext } from "../Context/SkuContext";

export const useSku = () => {
  const context = useContext(SkuContext);
  if (!context) {
    throw new Error("useSku must be used within a CategoryContextProvider");
  }
  return context;
};
