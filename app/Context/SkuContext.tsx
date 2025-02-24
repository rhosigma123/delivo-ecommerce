"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import apiClient from "@/lib/axiosInterceptor";
import { useSession } from "next-auth/react";
import { Product, SKU } from "@/types/interface";
import { useSearchParams } from "next/navigation";

interface SkuContextType {
  skuData: SKU | undefined;
  skuId: number | null; // Make sure it's a number or null
  setSkuId: React.Dispatch<SetStateAction<number | null>>; // Allow setting SKU ID
  setSkuData: React.Dispatch<SetStateAction<SKU | undefined>>;
}

export const SkuContext = createContext<SkuContextType | null>(null);

export const SkuContextProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  // ✅ Initial SKU ID from URL params
  const initialSkuId = searchParams?.get("skuid")
    ? Number(searchParams.get("skuid"))
    : null;

  const [skuId, setSkuId] = useState<number | null>(null);
  const [skuData, setSkuData] = useState<SKU | undefined>(undefined);

  useEffect(() => {
    if (!session || !skuId) return;

    const fetchData = async () => {
      try {
        const response = await apiClient.get(`/user/skus/${skuId}`);
        setSkuData(response.data.sku);
      } catch (error: any) {
        console.error(`[Error]: ${error.response?.data?.message}`);
      }
    };

    fetchData();
  }, [session, skuId]);

  return (
    <SkuContext.Provider value={{ skuData, setSkuData, skuId, setSkuId }}>
      {children}
    </SkuContext.Provider>
  );
};
