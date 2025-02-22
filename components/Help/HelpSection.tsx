import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

import { HiOutlineDocumentText } from "react-icons/hi2";
import { type } from "os";
function HelpSection() {
  return (
    <>
      <section className=" max-w-[600px] relative delivo__container mt-20 bg-white rounded-full  gap-2 px-2 h-auto flex items-center border  justify-between overflow-hidden  ">
        <select
          name="cars"
          className="w-fit text-base text-primary border-r pr-2 relative h-full "
        >
          <option value="categoty">Category</option>
          <option value="products">Products</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <input
          type="text"
          className=" relative h-auo py-3 text-fontPrimary text-base font-medium px-5 placeholder:text-secondary xl:w-[500px] max-w-[500px] bg-transparent   "
          placeholder="Enter Quetion or Keyword like Example: Payment "
        />

        <button className="p-2 rounded-full relative h-auto bg-primary  cursor-pointer">
          <CiSearch className="text-[20px] text-white" />
        </button>
      </section>
      
      <section className="w-full relative  h-auto delivo__container  py-20 grid grid-cols-1 lg:grid-cols-[1fr_3fr]  gap-10 md:gap-20 lg:gap-32 rounde items-start justify-between">
        <div className="w-full relative h-auto border  hidden lg:flex p-2 bg-secondary rounded-lg ">
          <Accordion
            type="single"
            collapsible
            className="w-full relative h-auto"
          >
            <AccordionItem
              value="item-1"
              className="w-full relative h-auto border-b"
            >
              <AccordionTrigger className="text-2xl py-1  w-full font-medium text-primary">
                Title
              </AccordionTrigger>
              <AccordionContent className=" w-full relative h-auto">
                <ul className="w-full relative h-auto flex flex-col gap-5 py-5">
                  <li className="w-fll relative h-auto flex items-centern gap-2 hover:bg-secondary p-2 ">
                    <HiOutlineDocumentText className="text-[20px] text-fontPrimary" />
                    Ayan mansoor
                  </li>
                  <li className="w-fll relative h-auto flex items-centern gap-2 hover:bg-secondary p-2 ">
                    <HiOutlineDocumentText className="text-[20px] text-secondary" />
                    Ayan mansoor
                  </li>
                  <li className="w-fll relative h-auto flex items-centern gap-2 hover:bg-secondary p-2 ">
                    <HiOutlineDocumentText className="text-[20px] text-secondary" />
                    Ayan mansoor
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <section className="w-full relative h-auto flex  border p-5 flex-col gap-4 ">
          <div className="w-full relative h-auto flex items-center gap-3 text-base font-medium  text-secondary ">
            <p className=" text-base text-fontPrimary">Help Center /</p>
            <p className=" text-base text-fontPrimary">Buyer Knowledge Base /</p>
            <p className=" text-base text-fontPrimary">
              t id ullam temporibus animi nihil
            </p>
          </div>

          <div className="w-full relative h-auto flex flex-col  gap-5">
            <h2 className="text-3xl font-medium text-primary ">About Us</h2>

            <p className="w-full relative  text-base font-medium text-fontPrimary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              modi accusantium, soluta voluptatum sit, ipsa, ea perferendis
              velit laboriosam delectus harum? Cupiditate in accusamus
              consequatur maxime nam inventore sint illo?
            </p>
            <Image
              src="/"
              alt=""
              height={500}
              width={500}
              className="w-full relartive h-[250px] lg:h-[300px]"
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default HelpSection;
