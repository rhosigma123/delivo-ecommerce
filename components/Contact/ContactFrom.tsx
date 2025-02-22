"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter, usePathname } from "next/navigation";

const schema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  requirements: z.string().nullish(),
});

type FormInputs = z.infer<typeof schema>;

function ContactForm() {
  const route = useRouter();
  const path = usePathname();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  // const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  //   if (!executeRecaptcha) {
  //     alert("ReCAPTCHA not loaded");
  //     return;
  //   }

  //   try {
  //     const token = await executeRecaptcha();
  //     const response = await axios.post(`${NEXT_PUBLIC_API_URL}/contact-us`, {
  //       ...data,
  //       token,
  //       url,
  //     });
  //     console.log(response.data);
  //     reset();
  //     router.push("/thank-you"); // Navigate to a thank you page or similar
  //   } catch (error) {
  //     console.error("There was an error submitting the form:", error);
  //   }
  // };
  const onSubmit: SubmitHandler<FormInputs> = async () => {
    reset();
    route.push("/thank-you");
  };

  return (
    <form
      action={""}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full relative h-auto flex flex-col items-start gap-5 bg-secondary px-5 py-5 border rounded-lg border-[#D4E8EA]"
    >
      <span className="w-full relative h-auto flex flex-col gap-1">
        <h2 className="text-4xl  font-semibold flex items-center gap-2  text-primary ">
          Connect with Delivo
        </h2>
        <p className="text-base font-normal text-fontPrimary">
          Fill out the form to connect with us, we’ll reach back to you ASAP!
        </p>
      </span>
      <div className="w-full relative h-auto flex flex-col   gap-2 md:gap-5  ">
        <span className="w-full relative h-auto flex flex-col col-start-1 col-end-3 ">
          <label
            htmlFor="name"
            className="text-base font-semibold text-foreground"
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="text-base text-webtext w-full relative  h-auto rounded-lg  px-4 py-3  placeholder:text-[#666]  border border-[#E8E8E8]"
            placeholder="Enter Your Name"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-sm font-medium text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </span>
        <span className="w-full relative h-auto   flex flex-col  col-end-3 ">
          <label
            htmlFor="name"
            className="text-base font-semibold text-foreground"
          >
            Name*
          </label>

          <input
            type="text"
            className="text-base text-webtext w-full rounded-lg relative h-auto px-4 py-3 placeholder:text-[#666]  border border-[#E8E8E8]  "
            placeholder="Enter Your Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm font-medium text-red-500">
              {errors.email.message}
            </p>
          )}
        </span>

        <span className="w-full relative h-auto   flex flex-col  col-end-3 ">
          <label
            htmlFor="name"
            className="text-base font-semibold text-foreground"
          >
            Name*
          </label>

          <textarea
            rows={3}
            className="text-base rounded-md text-webtext w-full relative h-auto px-3  col-end-3 col-start-1 py-1 placeholder:text-[#666]  border border-[#E8E8E8]"
            placeholder="Enter Your Message"
          />
        </span>
      </div>
      <button className=" w-full   justify-center md:w-fit relative h-auto flex items-center px-6 py-2 md:py-1 text-white hover:text-primary transition-all duration-300  bg-primary rounded-full cursor-pointer border border-transparent hover:border-primary hover:bg-white hover:text-webaccent text-p18">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
