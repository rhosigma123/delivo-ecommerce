import React from "react";
import CopyRight from "../Auth/CopyRight";
import Otp from "../Auth/Otp";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { OTPProps } from "@/types/interface";

const OTPModal: React.FC<OTPProps> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="link">OTP</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter OTP to verify your account</DialogTitle>
          <DialogDescription>OTP sent to {data.phone}</DialogDescription>
        </DialogHeader>
        <Otp />
        <CopyRight />
      </DialogContent>
    </Dialog>
  );
};

export default OTPModal;
