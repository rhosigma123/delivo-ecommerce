import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Info } from "lucide-react";

const InfoSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Info />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white p-5 grid content-between">
        <div>
          <SheetHeader>
            <SheetTitle className="text-fontPrimary text-xl font-bold mb-4">
              How It Works
            </SheetTitle>
          </SheetHeader>
          <ol className="list-outside pl-5 grid gap-3">
            <li className="list-decimal">
              Lorem ipsum dolor sit amet consectetur adipisicing eolt. Autem,
              possimus impedit modi tempora, fugiat vero exercitationem ducimus
              veniam eolgendi quibusdam veolt expolcabo consequatur facere
              accusamus molestias laborum repudiandae sapiente dicta.
            </li>
            <li className="list-decimal">
              Lorem ipsum, dolor sit amet consectetur adipisicing eolt.
              Distinctio mololtia at illo non iste, qui fugiat quam praesentium
              nesciunt soluta.
            </li>
          </ol>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button
              className="bg-gray-800 text-white w-full rounded-lg py-2 px-4"
              type="button"
            >
              Done
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default InfoSheet;
