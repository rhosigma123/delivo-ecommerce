"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormInputs = z.infer<typeof schema>;
function Newslatter() {
  const route = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    //   formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormInputs> = async () => {
    reset();
    route.push("/thank-you");
  };

  return (
    <section className="w-full relative delivo__container py-7  h-auto border-b flex flex-col md:flex-row  items-start md:items-center justify-between gap-5 ">
      <span className="flex items-start flex-col ">
        <h2 className=" text-2xl md:text-3xl xl:text-5xl font-medium text-primary  leading-[1.3]">
          Newsletter
        </h2>
        <p className=" text-lg font-normal ">
          Subscribe to our newsletter for updates!
        </p>
      </span>
      <form
        action={""}
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full md:w-[500px] relativge h-auto flex items-center  border border-webtext overflow-hidden rounded-full"
      >
        <input
          type="text"
          className="w-full px-4 py-2  relative rounded-l-full h-auto text-p18 text-webaccent placeholder:text-webaccent  "
          placeholder="E.g : Example@gmail.com"
          {...register("email")}
        />
        <button className="text-white h-full py-2 px-2 md:px-4 text-p18 font-medium bg-primary rounded-r-full uppercase">
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
}

export default Newslatter;
