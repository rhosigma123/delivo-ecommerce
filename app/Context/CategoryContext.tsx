// "use client"
// import { createContext, ReactNode, useState } from "react";

// interface CategoryProviderProps {
//   children: ReactNode;
// }
// export const CategoryContext = createContext(null);

// export const CategoryContextProvider: React.FC<CategoryProviderProps> = ({
//   children,
// }) => {
//   const [categoryData, setCategoryData] = useState(null);
//   return (
//     <CategoryContext.Provider value={{ categoryData, setCategoryData }}>
//       {children}
//     </CategoryContext.Provider>
//   );
// };
