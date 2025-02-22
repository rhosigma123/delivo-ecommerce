"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import apiClient from "@/lib/axiosInterceptor";
import { useSession } from "next-auth/react";

interface CategoryContextType {
  mainCategoryData: any[] | null;
  setMainCategoryData: React.Dispatch<React.SetStateAction<any[] | null>>;
}

export const CategoryContext = createContext<CategoryContextType | null>(null);

export const CategoryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { data: session } = useSession();
  const [mainCategoryData, setMainCategoryData] = useState<any[] | null>(null);

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        try {
          const response = await apiClient.get("/user/mainCategories");
          console.log("Main Categories Data", response.data);
          setMainCategoryData(response.data.maincategories);
        } catch (error: any) {
          console.log(`[Error]: ${error.response?.message}`);
        }
      };
      fetchData();
    }
  }, [session]);

  return (
    <CategoryContext.Provider value={{ mainCategoryData, setMainCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};
