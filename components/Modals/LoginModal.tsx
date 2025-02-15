import React from "react";
import LoginForm from "../Auth/LoginForm";
import CopyRight from "../Auth/CopyRight";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="link"
          className="text-fontPrimary text-xl font-medium hover:text-primaryColor"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Bringing happiness with fastest grocery delivery
          </DialogTitle>
          <LoginForm />
          <DialogDescription>
            <CopyRight />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
