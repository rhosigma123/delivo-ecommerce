import React from "react";

const Footer = () => {
  return (
    <footer className="delivo__container py-10 grid grid-cols-2">
      <div className="flex flex-col gap-5 border-r-2">
        <h2 className="text-xl text-fontPrimary font-bold">
          Popular Categories
        </h2>
        <ul className="flex flex-wrap gap-y-3 gap-x-10">
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
          <li>harum</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-10 place-content-center p-5">
        <div className="grid justify-center">
          <h2 className="text-center mb-5 text-xl text-fontPrimary font-bold">
            Company
          </h2>
          <ul className="grid gap-3">
            <li>About Us</li>
            <li>Career</li>
            <li>BLogs</li>
            <li>Lead</li>
            <li>Values</li>
            <li>Lead</li>
          </ul>
        </div>
        <div className="grid justify-center">
          <h2 className="text-center mb-5 text-xl text-fontPrimary font-bold">
            Links
          </h2>
          <ul className="grid gap-3">
            <li>About Us</li>
            <li>Career</li>
            <li>BLogs</li>
            <li>Lead</li>
            <li>Values</li>
            <li>Lead</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
