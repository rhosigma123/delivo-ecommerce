import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MoreVertical } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import apiClient from "@/lib/axiosInterceptor";
import { ProfileProps } from "@/types/interface";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .regex(
      /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
      "Invalid phone number format"
    ),
  address: z.string().optional(),
});

type formData = z.infer<typeof profileSchema>;

const Profile: React.FC<ProfileProps> = ({ id, data, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<formData>({
    resolver: zodResolver(profileSchema),
    // defaultValues: {
    //   name: data.user.name,
    //   email: data.user.email,
    //   phone: data.user.phone,
    //   address: data.user.address,
    // },
  });

  const { reset, handleSubmit } = form;

  // useEffect(() => {
  //   const fetchStaffData = async () => {
  //     try {
  //       const response = await apiClient.get(`/user/profile/${id}`);
  //       const pincode = Pincode?.code || "";
  //       const city = Pincode?.name || "";

  //       // Reset form data with extracted values
  //       reset({
  //         name: User.name || "",
  //         email: User.email || "",
  //         phone: User.phone || "",
  //         address: User.address || "",
  //         pincode: pincode,
  //         city: city,
  //       });

  //       setPincodeData({ pincode, city, state, district });
  //     } catch (error: any) {
  //       console.error(error.response.data.message);
  //       toast.error(error.response.data.message);
  //     }
  //   };
  //   if (id) fetchStaffData();
  // }, [id, reset]);

  // const handlePincodeSelect = (data: any) => {
  //   setPincodeData(data);
  //   setValue("pincode", data?.pincode || ""); // Ensuring that pincode is set with a fallback value
  //   setValue("city", data?.city || "");
  //   setValue("state", data?.state || "");
  //   setValue("district", data?.district || "");
  // };

  const onSubmit: SubmitHandler<formData> = async (data) => {
    try {
      const response = await apiClient.put(`/user/profile/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 201 || response.status === 200) {
        toast.success(response.data.message);
        onUpdate(response.data.user);
        setIsOpen(false);
        reset();
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    }
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="hover:bg-background p-2 rounded-lg border-transparent border hover:border text-primary">
          <MoreVertical />
        </button>
      </SheetTrigger>
      <SheetContent className="w-[500px] bg-white grid gap-5 content-start">
        <SheetHeader>
          <SheetTitle>profile</SheetTitle>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel className="text-fontPrimary">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel className="text-fontPrimary">Mobile</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Mobile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel className="text-fontPrimary">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel className="text-fontPrimary">Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Pincode
              data={pincodeData}
              onCitySelect={handlePincodeSelect}
              className="col-span-2"
            /> */}
            <button
              type="submit"
              className="bg-primary px-4 py-2 rounded-full text-white mt-5 justify-self-end"
            >
              Save changes
            </button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default Profile;
