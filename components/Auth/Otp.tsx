"use client";

import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import apiClient from "@/lib/axiosInterceptor";

// Import shadcn's Form components
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

interface OtpData {
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
  digit5: string;
  digit6: string;
}

const Otp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Retrieve 'phone' instead of 'email'
  const phone = searchParams ? searchParams.get("phone") : null;

  const form = useForm<OtpData>({
    defaultValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
      digit6: "",
    },
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState<number>(90); // 90 seconds
  const [canResend, setCanResend] = useState<boolean>(false);
  const [isResending, setIsResending] = useState<boolean>(false);

  // State for error messages
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true); // Enable resend after timer reaches zero
    }
  }, [timeLeft]);

  // Watch all digit fields to determine if focus needs to change
  const digits = watch([
    "digit1",
    "digit2",
    "digit3",
    "digit4",
    "digit5",
    "digit6",
  ]);

  // Handle focus movement between inputs
  useEffect(() => {
    digits.forEach((digit, index) => {
      if (digit.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    });
  }, [digits]);

  const onSubmit: SubmitHandler<OtpData> = async (data) => {
    const otpValue = Object.values(data).join("");

    if (phone && otpValue.length === 6) {
      const result = await signIn("credentials", {
        redirect: false,
        phone,
        otp: otpValue,
        verificationId: "masterstation",
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
            case "USER":
              router.push("/");
              break;
            default:
              router.push("/");
              break;
          }
        }
      }
    } else {
      console.error("Phone or OTP is missing!");
      setErrorMessage("Phone or OTP is missing!");
    }
  };

  const handleResendOtp = async () => {
    if (phone) {
      setIsResending(true);
      setErrorMessage(null);
      try {
        const response = await apiClient.post(`/auth/forgot-password`, {
          phone,
        });
        setTimeLeft(90); // Reset timer for 90 seconds
        setCanResend(false); // Disable resend button until timer expires
      } catch (error: any) {
        console.error("Error resending OTP:", error);
        setErrorMessage(
          error.response?.data?.message ||
            "Failed to resend OTP. Please try again."
        );
      } finally {
        setIsResending(false);
      }
    }
  };

  // Handler for key down events to manage backspace navigation
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (digits[index] === "") {
        // Move focus to previous input if exists
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
          // Optionally, clear the previous input
          setValue(`digit${index}` as keyof OtpData, "");
        }
      } else {
        // If current input has a value, clear it
        setValue(`digit${index + 1}` as keyof OtpData, "");
      }
    }
  };

  return (
    <div className="bg-white flex flex-col items-center gap-5 w-full sm:w-[500px] rounded-3xl p-5 sm:p-10">
      <Link
        href="/"
        className="flex items-center gap-1 text-fontPrimary self-start w-fit bg-[#FAFAFA] px-3 py-2 rounded-sm"
      >
        <IoIosArrowBack /> Back
      </Link>
      <span className="font-medium text-fontPrimary text-2xl mt-2">
        Enter OTP
      </span>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 w-full">
          {/* OTP Input Fields */}
          <div className="flex gap-2 justify-center">
            {Array.from({ length: 6 }, (_, index) => (
              <FormField
                key={index}
                control={form.control}
                name={`digit${index + 1}` as keyof OtpData}
                rules={{
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]$/,
                    message: "Only digits are allowed",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        maxLength={1}
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        className="border-[1px] w-[40px] h-[40px] border-[#E8E8E8] rounded-md text-center focus:border-[#3f41a6] focus:outline-none transition-colors duration-200"
                        ref={(el) => {
                          field.ref(el);
                          inputRefs.current[index] = el;
                        }}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^[0-9]?$/.test(value)) {
                            setValue(
                              `digit${index + 1}` as keyof OtpData,
                              value
                            );
                          }
                        }}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          {/* Countdown Timer */}
          <p className="text-fontPrimary text-sm font-semibold text-center">
            Resend in{" "}
            <span className="text-blue-500">
              {Math.floor(timeLeft / 60)
                .toString()
                .padStart(2, "0")}
              :{(timeLeft % 60).toString().padStart(2, "0")}
            </span>{" "}
            seconds
          </p>
          {/* Resend OTP Button */}
          {canResend && (
            <Button
              className="rounded-md w-full"
              onClick={handleResendOtp}
              disabled={isResending}
              type="button" // Prevent form submission
            >
              {isResending ? "Resending..." : "Resend OTP"}
            </Button>
          )}
          {/* Submit OTP Button */}
          <Button className="rounded-md w-full" type="submit">
            Submit OTP
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Otp;
