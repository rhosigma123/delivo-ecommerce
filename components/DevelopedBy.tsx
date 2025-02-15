import React from "react";

const DevelopedBy = () => {
  return (
    <div className="delivo__container flex items-center py-2 px-10 justify-between">
      <p className="text-base text-gray-400">
        “Delivo” is owned & managed by "kodeinnovate pvt. ltd".
      </p>
      <p className="text-gray-400 text-base flex gap-1 items-center">
        Developed by
        <a
          className="font-bold text-lg text-primary hover:underline"
          target="_blank"
          title="#1 Website Design and Development Agency in Mumbai"
          href="https://sovorun.com/"
        >
          sovorun
        </a>
      </p>
    </div>
  );
};

export default DevelopedBy;
