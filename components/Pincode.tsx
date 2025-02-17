import React, { useEffect, useState } from "react";
import InputField from "@/components/inventro/FormFileds/InputField";
import { CityName } from "./CityName";
import axios from "axios";

interface PostOffice {
  Name: string;
  State: string;
  District: string;
}

interface PincodeProps {
  data?: {
    pincode: string;
    city: string;
    state: string;
    district: string;
  };
  onCitySelect: (data: {
    pincode: string;
    city: string;
    state: string;
    district: string;
  }) => void;
  className?: string;
}

const Pincode: React.FC<PincodeProps> = ({ data, onCitySelect, className }) => {
  const [pincode, setPincode] = useState(data?.pincode || "");
  const [postOffices, setPostOffices] = useState<PostOffice[]>([]);
  const [selectedCity, setSelectedCity] = useState(data?.city || "");
  const [state, setState] = useState(data?.state || "");
  const [district, setDistrict] = useState(data?.district || "");

  useEffect(() => {
    if (data) {
      setPincode(data.pincode);
      setSelectedCity(data.city);
      setState(data.state);
      setDistrict(data.district);
    }
  }, [data]);

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      if (value.length === 6) {
        fetchPinCode(value); // Fetch data only if the pincode is exactly 6 digits
      } else {
        clearLocationData(); // Clear related fields if pincode is not valid
      }
    }
  };

  const fetchPinCode = async (code: string) => {
    if (!/^\d{6}$/.test(code)) return; // Ensure pincode is exactly 6 digits before fetching

    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${code}`
      );
      const offices = response.data[0]?.PostOffice || [];
      if (offices.length > 0) {
        setPostOffices(offices);
        setState(offices[0].State);
        setDistrict(offices[0].District);
      } else {
        clearLocationData();
      }
    } catch (error) {
      console.error("Error fetching pincode data:", error);
      clearLocationData();
    }
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    const updatedData = {
      pincode,
      city,
      state,
      district,
    };
    onCitySelect(updatedData);
  };

  const clearLocationData = () => {
    setPostOffices([]);
    setSelectedCity("");
    setState("");
    setDistrict("");
  };

  return (
    <div className={`${className} grid gap-3`}>
      <InputField
        name="pincode"
        inputType="text"
        value={pincode}
        onChange={handlePincodeChange}
        placeholder="6-digit pincode"
        MaxLength={6}
      />
      <CityName
        options={postOffices.map((office) => ({
          value: office.Name,
          label: office.Name,
        }))}
        selectedValue={selectedCity}
        onSelect={handleCitySelect}
      />
      <InputField
        name="state"
        inputType="text"
        placeholder="State"
        value={state}
        disabled
      />
      <InputField
        name="district"
        inputType="text"
        placeholder="District"
        value={district}
        disabled
      />
    </div>
  );
};

export default Pincode;
