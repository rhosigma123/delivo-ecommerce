"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import apiClient from "@/lib/axiosInterceptor";
import { AdminProfileData } from "@/types/interface";
import AdminProfileModal from "./AdminProfile";

export const ProfileIcon: React.FC = () => {
  const [userData, setUserData] = useState<AdminProfileData>();
  const { data: session } = useSession();

  const fetchUserData = async () => {
    try {
      const role = session?.user.role.toLowerCase();
      const url = `/${role}/profile`;
      const response = await apiClient.get(url);

      setUserData(response.data);
    } catch (error: any) {
      console.error(error.response.message);
    }
  };

  useEffect(() => {
    if (session) {
      fetchUserData();
    }
  }, [session]);

  if (!userData) {
    return (
      <div className="flex relative cursor-pointer border px-2 items-center select-none gap-2 py-2 rounded-xl bg-secondary transition-all ease-linear my-2">
        <span className="rounded-full object-cover border gap-5 w-[50px] h-[50px] bg-white animate-pulse" />
        <div className="grid content-center text-base text-gray-400 my-auto">
          Fetching Profile...
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex relative cursor-pointer border px-2 items-center select-none gap-2 py-2 rounded-xl bg-secondary transition-all ease-linear my-2">
        {userData.user.photo ? (
          <Image
            className="rounded-full object-cover border bg-white w-[50px] h-[50px]"
            height={50}
            width={50}
            alt={userData.user.fullName}
            src={`http://192.168.100.103:3002${userData.user.photo || ""}`}
          />
        ) : (
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex items-center overflow-hidden justify-center text-white font-bold text-xl">
            {userData.user.fullName?.charAt(0).toUpperCase() || "NA"}
          </div>
        )}
        <div className="grid content-center my-auto">
          <h2 className="leading-4 text-fontPrimary text-lg font-medium">
            {(userData.user.fullName &&
              userData.user.fullName.split(" ").slice(0, 2).join(" ")) ||
              "User"}
          </h2>
          <span className="text-sm text-fontSecondary">
            {userData.user.role
              ? userData.user.role.charAt(0).toUpperCase() +
                userData.user.role.slice(1).toLowerCase()
              : ""}
          </span>
        </div>
        <AdminProfileModal userData={userData} refreshData={fetchUserData} />
      </div>
    </>
  );
};

export default ProfileIcon;
