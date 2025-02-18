import { usePathname } from "next/navigation";
import React from "react";

const SwitchRoutes = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-3 items-center">
      {pathname?.startsWith("/restaurant") && (
        <>
          <button className="text-white px-4 py-1 rounded-full bg-primary">
            Grocery
          </button>
          <button className="text-white px-4 py-1 rounded-full bg-[#FF835E]">
            Restaurant
          </button>
          <button className="text-white px-4 py-1 rounded-full bg-[#D03860]">
            Quick Craves
          </button>
        </>
      )}
    </div>
  );
};

export default SwitchRoutes;
