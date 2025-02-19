"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession, signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import CopyRight from "./CopyRight";
import apiClient from "@/lib/axiosInterceptor";

const formSchema = z.object({
  phone: z
    .string()
    .regex(
      /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
      "Invalid phone number format"
    ),
});

type FormInputs = z.infer<typeof formSchema>;

const LoginForm = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session) {
      switch (session.user.role) {
        case "USER":
          router.push("/");
          break;
        default:
          router.push("/");
          break;
      }
    }
  }, [session, status, router]);

  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormInputs) => {
    try {
      const response = await apiClient.post("/auth/login/otp", {
        phone: data.phone,
      });
      if (response.status === 200) router.push(`/?phone=${data.phone}`);
    } catch (error) {
      console.error(`[Error]: ${error}`);
    }
  };

  return (
    <div className="bg-white grid gap-3 rounded-3xl p-5 py-10 sm:p-10">
      <h1 className="text-2xl font-bold leading-5 text-nowrap text-primary">
        Login
      </h1>
      <p className="text-fontPrimary text-center">
        Get desired products at your doorstep in Minutes*
      </p>

      <Form {...form}>
        <form className="grid gap-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Enter phone number"
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.phone?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <button
            className="bg-primary rounded-full px-4 py-2 text-white font-bold"
            type="submit"
          >
            Continue
          </button>
        </form>
      </Form>
      <CopyRight />
    </div>
  );
};

export default LoginForm;
