import React from "react";

const AddressCard = () => {
  return (
    <div className="bg-secondary p-4 rounded-xl grid gap-2">
      <h3 className="text-primary text-lg font-bold">Default Address</h3>
      <hr />
      <div className="grid gap-2 ">
        <span className="grid grid-cols-[1fr_2fr] gap-4 text-fontSecondary text-sm">
          <strong className="text-fontPrimary font-bold text-base">Name</strong>
          Adbussa Salam Samani
        </span>
        <span className="grid grid-cols-[1fr_2fr] gap-4 text-fontSecondary text-sm">
          <strong className="text-fontPrimary font-bold text-base">
            Address
          </strong>
          406 Burak Metering virani business center, opp bharat gears, mumbra
          shil 400612
        </span>
        <span className="grid grid-cols-[1fr_2fr] gap-4 text-fontSecondary text-sm">
          <strong className="text-fontPrimary font-bold text-base">City</strong>
          Mumbra, Thane
        </span>
        <span className="grid grid-cols-[1fr_2fr] gap-4 text-fontSecondary text-sm">
          <strong className="text-fontPrimary font-bold text-base">Pin</strong>
          400612
        </span>
        <span className="grid grid-cols-[1fr_2fr] gap-4 text-fontSecondary text-sm">
          <strong className="text-fontPrimary font-bold text-base">
            Country/origin
          </strong>
          India
        </span>
        <span className="grid grid-cols-[1fr_2fr] gap-4 text-fontSecondary text-sm">
          <strong className="text-fontPrimary font-bold text-base">
            Phone
          </strong>
          7718012809
        </span>
      </div>
    </div>
  );
};

export default AddressCard;
