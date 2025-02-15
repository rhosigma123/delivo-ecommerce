"use client";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { LoginData } from "@/types/interface";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/axiosInterceptor";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import Button from "../Button";
import Logo from "../Navbar/logo";
import { Input } from "../ui/input";

const ForgotPassword = () => {
  const form = useForm<LoginData>();
  const router = useRouter();

  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = form;

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      const response = await apiClient.post(`/auth/forgot-password`, {
        email: data.email,
      });
      reset(); // Reset the form after successful submission
      router.push(`/otp?email=${data.email}`); // Redirect to /otp
    } catch (error) {
      console.error("Error submitting forgot password request:", error);
    }
  };

  return (
    <div className="bg-white grid gap-5 w-full sm:w-[500px] rounded-3xl p-5 sm:p-10">
      <Link
        href="/"
        className="flex items-center gap-1 text-fontPrimary w-fit bg-[#FAFAFA] px-3 py-2 rounded-sm"
      >
        <IoIosArrowBack /> Back
      </Link>
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 justify-center">
        <Logo logo="/inventro.png" companyName="Inventro" />
        <hr className="border-fontPrimary border-r-[1px] h-[40px]" />
        <span className="font-medium text-fontPrimary text-2xl mt-2">
          Forget Password
        </span>
      </div>

      <Form {...form}>
        <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Enter Email" />
                </FormControl>
                <FormDescription>
                  Please enter the email associated with your account.
                </FormDescription>
                <FormMessage>{errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />

          <Button className="rounded-md mt-3" type="submit">
            Send OTP
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPassword;
