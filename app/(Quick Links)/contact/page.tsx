import React from "react";
import Contactsection from "@/components/Contact/ContactSection";
import Newslatter from "@/components/commons/Newsletter";
import NewNavbar from "@/components/commons/NewNavbar";

const ContactRoute = () => {
  return (
    <>
      <NewNavbar/>
      <Contactsection />;
      <section className="w-full delivo__container  relative h-auto flex flex-col gap-5">
        <h2 className="text-4xl font-semibold text-primary  ">
          We are near you!
        </h2>

        <div className="w-full items-center justify-center relative h-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-y-6 ">
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
          <p className="text-fontPrimary text-base">mumbra</p>
        </div>
      </section>
    </>
  );
};

export default ContactRoute;
