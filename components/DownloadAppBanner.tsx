import React from "react";
import Image from "next/image";
import Link from "next/link";

const DownloadAppBanner = () => {
  return (
    <div className="rounded-2xl content-center items-center relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 border px-10 py-8 delivo__container my-14  bg-[url(/appBanner.png)] bg-no-repeat bg-cover">
      <div className="gap-2 grid">
        <h2 className="lg:col-start-1 lg:col-end-2 text-primary text-6xl font-bold w-[80%]">
          Download the Delivo App
        </h2>
        <p className="lg:col-start-1 lg:col-end-2 text-lg text-fontPrimary font-medium">
          Get desired products at your doorstep in Minutes*
        </p>
      </div>
      <div className="lg:col-start-1 lg:col-end-2 flex gap-3 bg-primary rounded-xl p-5 content-center">
        <Image
          src={"/QrCode.svg"}
          alt={"Download Delivo App"}
          width={200}
          height={200}
          loading="lazy"
          className="bg-white rounded-xl border w-[150px] h-[150px] bg-cover p-3"
        />
        <div className="grid grid-cols-2 gap-5 content-center">
          <h3 className="col-span-2 text-white font-medium text-xl">
            Scan the QR code to download the app now.
          </h3>
          <Link
            target="_blank"
            href={
              "https://apps.apple.com/sl/app/delivo-app-grocery-delivery/id6737229220"
            }
          >
            <Image
              src={"/apple-store.png"}
              alt={"App Store"}
              width={200}
              height={200}
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
              width={200}
              height={200}
              loading="lazy"
              className="bg-white rounded-xl border max-w-[100%] h-auto"
            />
          </Link>
        </div>
      </div>
      <Image
        src={"/qucik-craves-mockup.png"}
        alt={"Dowmload Application"}
        width={500}
        height={500}
        loading="lazy"
        className="row-start-1 row-end-4 col-start-2 col-end-3 absolute -bottom-[40%]  max-w-[100%]  h-auto 2xl:w-[600px] 2xl:h-[600px]"
      />
    </div>
  );
};

export default DownloadAppBanner;
