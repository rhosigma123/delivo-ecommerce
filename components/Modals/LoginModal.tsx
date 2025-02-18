import React from "react";
import Image from "next/image";
import LoginForm from "../Auth/LoginForm";
import CopyRight from "../Auth/CopyRight";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../Navbar/logo";
import Otp from "../Auth/Otp";
import { CircleUser } from "lucide-react";

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="text-fontPrimary gap-2 flex items-center text-lg font-bold hover:text-primary">
          <CircleUser  size={20}/>
          Login
        </button>
      </DialogTrigger>
      <DialogContent className="bg-primary content-center items-center grid grid-cols-2 gap-10 sm:rounded-3xl p-10 border-none max-w-[calc(100vw-50px)] lg:max-w-[950px] max-h-[calc(100vw-50px)] lg:max-h-[500px]">
        <div className="grid gap-5">
          <Logo
            companyName="Delivo"
            logo="/delivo-secondary-logo.png"
            className="w-[250px] h-[100px] object-contain mx-auto"
          />
          <LoginForm />
          <Otp />
        </div>
        <div className="relateive h-full flex flex-col justify-center align-middle">
          <Image
            src={"/qucik-craves-mockup.png"}
            alt={"Login"}
            width={500}
            height={500}
            loading="eager"
            className="h-[350px] object-contain w-full"
          />
          <div className="flex gap-2 items-center bg-white rounded-xl justify-center p-2 w-full">
            <h3 className="col-span-2 text-primary font-medium text-lg px-4 text-nowrap">
              Or find the app on
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
                width={130}
                height={50}
                loading="lazy"
                className="bg-white rounded-md border max-w-[100%] h-auto"
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
                width={130}
                height={50}
                loading="lazy"
                className="bg-white rounded-md border max-w-[100%] h-auto"
              />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
