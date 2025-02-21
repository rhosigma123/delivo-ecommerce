import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5 justify-between">
      <Link href={"/"}>
        <Image
          src={"/facebook.svg"}
          width={40}
          height={40}
          alt="facebook facebook"
          loading="lazy"
        />
      </Link>
      <Link href={"/"}>
        <Image
          src={"/x.svg"}
          width={40}
          height={40}
          alt="X - Delivo"
          loading="lazy"
        />
      </Link>
      <Link href={"/"}>
        <Image
          src={"/linkedin.svg"}
          width={40}
          height={40}
          alt="linkedin - Delivo"
          loading="lazy"
        />
      </Link>
      <Link href={"/"}>
        <Image
          src={"/youtube.svg"}
          width={40}
          height={40}
          alt="youtube - Delivo"
          loading="lazy"
        />
      </Link>
      <Link href={"/"}>
        <Image
          src={"/instagram.svg"}
          width={40}
          height={40}
          alt="intagram - Delivo"
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
