import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SwitchRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex gap-3 items-center text-nowrap">
      {pathname?.startsWith("/restaurant") && (
        <>
          <button
            onClick={() => router.push("/")}
            className="text-white px-4 py-1 rounded-full bg-primary"
          >
            Grocery
          </button>
          <button
            onClick={() => router.push("/quick-craves")}
            className="text-white px-4 py-1 rounded-full bg-[#D03860]"
          >
            Quick Craves
          </button>
        </>
      )}
      {pathname?.startsWith("/quick-craves") && (
        <>
          <button
            onClick={() => router.push("/")}
            className="text-white px-4 py-1 rounded-full bg-primary"
          >
            Grocery
          </button>
          <button
            onClick={() => router.push("/restaurant")}
            className="text-white px-4 py-1 rounded-full bg-[#FF835E]"
          >
            Restaurant
          </button>
        </>
      )}
      {!pathname?.startsWith("/restaurant") &&
        !pathname?.startsWith("/quick-craves") && (
          <>
            <button
              onClick={() => router.push("/restaurant")}
              className="text-white px-4 py-1 rounded-full bg-[#FF835E]"
            >
              Restaurant
            </button>
            <button
              onClick={() => router.push("/quick-craves")}
              className="text-white px-4 py-1 rounded-full bg-[#D03860]"
            >
              Quick Craves
            </button>
          </>
        )}
    </div>
  );
};

export default SwitchRoutes;
