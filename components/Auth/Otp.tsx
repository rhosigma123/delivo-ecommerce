"use client";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import apiClient from "@/lib/axiosInterceptor";
import Logo from "../Navbar/logo";
import Button from "../Button";

const Otp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams ? searchParams.get("email") : null;

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState<number>(90); // 90 seconds
  const [canResend, setCanResend] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value.length === 1 && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const otpValue = otp.join("");
    if (email && otpValue.length === 6) {
      router.push(
        `/reset-password?email=${encodeURIComponent(
          email
        )}&otp=${encodeURIComponent(otpValue)}`
      );
    } else {
      console.error("Email or OTP is missing!");
    }
  };

  const handleResendOtp = async () => {
    if (email) {
      try {
        await apiClient.post(`/auth/forgot-password`, { email });
        setTimeLeft(60); // Reset timer for 90 seconds
        setCanResend(false); // Disable resend button until timer expires
      } catch (error) {
        console.error("Error resending OTP:", error);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="flex gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleOtpChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            maxLength={1}
            className="border-[1px] w-[40px] h-[40px] border-[#E8E8E8] rounded-md text-center focus:border-[#3f41a6] focus:outline-none transition-colors duration-200"
          />
        ))}
      </div>
      <p className="text-fontPrimary text-sm font-semibold">
        Resend in
        <span className="text-blue-500">
          {Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, "0")}
          :{(timeLeft % 60).toString().padStart(2, "0")}
        </span>{" "}
        seconds
      </p>
      {canResend && (
        <Button className="rounded-md w-full" onClick={handleResendOtp}>
          Resend OTP
        </Button>
      )}
      <Button className="rounded-md w-full" type="submit">
        Submit OTP
      </Button>
    </form>
  );
};

export default Otp;
