import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronDown, ChevronRight, LocateIcon, MapPin } from "lucide-react";
import Image from "next/image";

type LocationType = {
  latitude: number;
  longitude: number;
} | null;

const LocationModal = () => {
  const [location, setLocation] = useState<LocationType>(null);
  const [error, setError] = useState<string | null>(null);
  const [locationEnabled, setLocationEnabled] = useState(false);

  // Function to enable location permission and get current location
  const enableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationEnabled(true);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null); // Clear any previous errors
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Continuously watch location if permission is granted
  useEffect(() => {
    let watchId: number;
    if (locationEnabled) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    }

    // Cleanup
    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [locationEnabled]);

  // Log updated state values whenever location or locationEnabled changes

  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex flex-col w-full text-nowrap">
          <span className="text-fontSecondary text-left font-bold  text-base">
            Delivery in <strong className="text-fontPrimary">12 Minutes</strong>
          </span>
          <span className="text-fontPrimary text-sm flex items-center gap-2">
            <MapPin size={18} color="#373737" /> Select location, Area, street
            <ChevronDown size={18} color="#373737" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="border-none grid content-end p-0 pb-5 rounded-2xl bg-[url(/location-bg.png)] bg-no-repeat bg-contain h-[calc(100vh-400px)] overflow-clip bg-white">
        <DialogHeader className="px-5 pt-5 locationGradiant">
          <Image
            src={"/location-pin.svg"}
            alt="Location pin"
            width={50}
            height={50}
            className="h-[50px] w-full"
          />
          <DialogTitle className="text-center text-fontPrimary font-bold text-lg">
            Location permission is {locationEnabled ? "On" : "Off"}
          </DialogTitle>
          <DialogDescription className="text-center text-fontSecondary font-bold text-sm">
            Turn on the location permission to get the best delivery experience
          </DialogDescription>
          <button
            disabled={locationEnabled}
            onClick={enableLocation}
            className={`bg-[#13ab7b] px-5 py-2 rounded-lg text-white text-sm w-full ${
              locationEnabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {locationEnabled ? "Enabled" : "Enable"}
          </button>
        </DialogHeader>

        <div className="px-5 grid gap-2">
          <label htmlFor="location">Select delivery location</label>
          <input type="search" placeholder="Search for Area, Street name..." />
          <button
            type="button"
            onClick={enableLocation}
            disabled={!locationEnabled}
            className={`flex items-center gap-3 w-full bg-secondary relative border-green-500 border px-4 py-2 rounded-lg text-green-500 `}
          >
            <LocateIcon /> Use Current Location
            <ChevronRight
              size={20}
              className="absolute top-1/2 transform -translate-y-1/2 right-4"
            />
          </button>

          {error && (
            <p className="text-red-600 text-center text-sm">Error: {error}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationModal;
