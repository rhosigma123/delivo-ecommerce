import React from "react";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import Link from "next/link";

const FooterBottom = () => {
  return (
    <section className="bg-background px-10 py-10 md:py-2">
      <div className="delivo__container flex gap-5 md:gap-10 justify-between items-center md:flex-row flex-col">
        <SocialLinks />
        <div className="flex gap-3 items-center md:flex-row flex-col">
          <h3 className="text-fontSecondary text-base">Download App</h3>
          <Link
            target="_blank"
            href={
              "https://apps.apple.com/sl/app/delivo-app-grocery-delivery/id6737229220"
            }
          >
            <Image
              src={"/apple-store.png"}
              alt={"App Store"}
              width={150}
              height={150}
              loading="lazy"
              className="bg-white rounded-xl border max-w-[100%] h-auto"
            />
          </Link>
          <Link
            target="_blank"
            href={
              "https://play.google.com/store/apps/details?id=com.delivoapp.app&pcampaignid=web_share"
            }
          >
            <Image
              src={"/google-play-store.png"}
              alt={"Playstore"}
              width={150}
              height={150}
              loading="lazy"
              className="bg-white rounded-xl border max-w-[100%] h-auto"
            />
          </Link>
        </div>
        <p className="text-fontSecondary text-base text-center">
          Copyright &copy; 2025 - <span id="currentYearInline"></span>
          delivoapp.com - All Rights Reserved
          {/* {
              document.getElementById("currentYearInline").textContent = new
            Date().getFullYear();
            } */}
        </p>
      </div>
    </section>
  );
};

export default FooterBottom;
