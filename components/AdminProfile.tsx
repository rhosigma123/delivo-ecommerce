import React, { useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "@/lib/axiosInterceptor";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import UpdatePassword from "./UpdatePassword";
import { AdminProfileProps } from "@/types/interface";
import Button from "./Button";
import ImagePreview, { ImagePreviewHandle } from "./ImagePreview";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Invalid phone number." }),
  role: z.string(),
  image: z.string().optional(),
});

const AdminProfileModal: React.FC<AdminProfileProps> = ({
  userData,
  refreshData,
}) => {
  const [image, setImage] = useState<string | File | null>(
    userData?.user.photo || null
  );
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const imagePreviewRef = useRef<ImagePreviewHandle>(null);
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: userData?.user.fullName || "",
      email: userData?.user.email || "",
      phone: userData?.user.phone || "",
      role: userData?.user.role || "",
    },
  });

  const {
    formState: { errors },
    reset,
    handleSubmit,
  } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);

      if (
        image &&
        image !== userData?.user.photo &&
        typeof image !== "string"
      ) {
        formData.append("image", image);
      } else if (userData?.user.photo) {
        formData.append("image", userData.user.photo);
      }

      const role = session?.user.role.toLowerCase();
      const response = await apiClient.put(`/${role}/profile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      reset(response.data.user);
      setIsFormDialogOpen(false);
      refreshData();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && imagePreviewRef.current) {
      imagePreviewRef.current.handleImagePreview(e);
      setImage(file);
    }
  };

  const handlePasswordResetClick = () => {
    setIsFormDialogOpen(false);
    setIsSecondDialogOpen(true);
  };

  return (
    <>
      <Dialog open={isFormDialogOpen} onOpenChange={setIsFormDialogOpen}>
        <DialogTrigger asChild>
          <button className="rounded-full absolute inset-0 bg-transparent hover:bg-transparent hover:shadow-none " />
        </DialogTrigger>
        <DialogContent className="rounded-xl w-[calc(100vw-20px)] sm:w-full px-0 py-0 bg-white">
          <div className="bg-modalHeader py-[20px] px-[30px] border-b border-b-[#E8E8E8] rounded-t-[20px]">
            <p className="text-primary text-base font-medium">Edit Profile</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 max-h-[calc(100vh-300px)] gap-x-5 overflow-auto p-5 grid sm:grid-cols-2"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your full name" />
                    </FormControl>
                    <FormMessage>{errors.fullName?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        disabled
                      />
                    </FormControl>
                    <FormMessage>{errors.email?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your phone number"
                        disabled
                      />
                    </FormControl>
                    <FormMessage>{errors.phone?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Role" disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-4 sm:col-span-2 flex  justify-between w-full gap-3 items-center">
                <button type="button" onClick={handlePasswordResetClick}>
                  Change Password
                </button>
                <Button type="submit" className="rounded-full">
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <UpdatePassword
        open={isSecondDialogOpen}
        onOpenChange={setIsSecondDialogOpen}
      />
    </>
  );
};

export default AdminProfileModal;
