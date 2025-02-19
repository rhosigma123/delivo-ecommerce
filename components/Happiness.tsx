import React from "react";
import Image from "next/image";

const Happiness = () => {
  return (
    <div className="grid gap-5 delivo__container my-14 px-5 md:px-0">
      <h2 className="text-3xl md:text-5xl text-gray-300 font-bold flex items-center  gap-2">
        Happiness Quickly Delivered{" "}
        <Image
          src={"/heart.svg"}
          alt="Love"
          width={30}
          height={30}
          loading="lazy"
        />
      </h2>
      <Image
        src={"/delivo-primary-logo.png"}
        alt="Delivo"
        width={100}
        height={100}
        loading="lazy"
      />
    </div>
  );
};

export default Happiness;
