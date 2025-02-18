import Link from "next/link";
import React from "react";

const CopyRight = () => {
  return (
    <p className="text-fontSecondary text-sm">
      By continuing, you agree to our Terms of Service &{" "}
      <Link
        href={"/privacy-policy"}
        className="font-bold text-fontPrimary underline"
      >
        privary policy
      </Link>
    </p>
  );
};

export default CopyRight;
