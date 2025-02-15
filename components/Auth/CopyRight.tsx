import Link from "next/link";
import React from "react";

const CopyRight = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-x-5 gap-y-2 justify-self-center mt-5">
      <p className="text-white text-center text-sm">
        &#169; 2024 Audiaq. All Rights Reserved
      </p>
      <p className="text-white text-sm">
        Developed by{" "}
        <Link
          target="_blank"
          className="underline font-semibold"
          href="https://sovorun.com"
        >
          Sovorun
        </Link>
      </p>
    </div>
  );
};

export default CopyRight;
