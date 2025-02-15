"use client";
import Link from "next/link";
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
import { AiOutlineEye } from "react-icons/ai";
import { RxEyeClosed } from "react-icons/rx";
import { useSession, signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import React, { useEffect, useState } from "react";
import { isEmail } from "validator";
import Button from "../Button";
import Logo from "../Navbar/logo";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Email is too short")
    .refine(isEmail, { message: "Invalid Email Address" }),
  password: z.string().min(8, "Password is too short"),
});
type FormInputs = z.infer<typeof formSchema>;

const LoginForm = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session) {
      switch (session.user.role) {
        case "ADMIN":
          router.push("/admin");
          break;
        case "MANAGER":
          router.push("/manager");
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
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        toast.error("Login Failed", {
          description: result.error,
          action: {
            label: "Retry",
            onClick: () => onSubmit(data),
          },
        });
        console.error("Login error:", result.error);
      } else {
        const session = await getSession();
        if (session) {
          toast.success("Login Successful", {
            description: session.user.fullName,
          });
          switch (session.user.role) {
            case "ADMIN":
              router.push("/admin");
              break;
            case "MANAGER":
              router.push("/manager");
              break;
            default:
              router.push("/");
              break;
          }
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const viewPasswordHandler = () => {
    setViewPassword((prev) => !prev);
  };

  return (
    <div className="bg-white grid gap-3 w-[calc(100vw-30px)] sm:w-[450px] rounded-3xl p-5 py-10 sm:p-10">
      <div className="mx-auto gap-5 w-[160px] h-[140px] p-5 bg-secondary rounded-xl">
        <Logo
          className="min-w-[120px] min-h-[100px] object-fill"
          logo={"/login-logo.png"}
          companyName={"Audiaq - Zepto"}
        />
      </div>
      <h1 className="text-2xl font-medium mx-auto text-nowrap text-fontPrimary">
        Welcome Again!
      </h1>

      <Form {...form}>
        <form className="grid gap-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={viewPassword ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    {viewPassword ? (
                      <AiOutlineEye
                        onClick={viewPasswordHandler}
                        className={`cursor-pointer text-secondary-foreground/40 text-2xl absolute right-3 ${
                          form.formState.errors.password
                            ? "bottom-[10px]"
                            : "bottom-[10px]"
                        }`}
                      />
                    ) : (
                      <RxEyeClosed
                        onClick={viewPasswordHandler}
                        className={`cursor-pointer text-secondary-foreground/40 text-xl absolute right-3 ${
                          form.formState.errors.password
                            ? "bottom-[10px]"
                            : "bottom-[12px]"
                        }`}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage>
                  {form.formState.errors.password?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <Link
            className="underline justify-self-end font-medium text-sm"
            href={"/forgot-password"}
          >
            Forgot Password?
          </Link>
          <Button className="rounded-md" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
