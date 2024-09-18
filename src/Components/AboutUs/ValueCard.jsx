import React from "react";

const ValueCard = ({ Icon, title, description }) => {
  return (
    <div className="flex justify-center items-center px-4 py-8 gap-4 bg-white shadow-lg rounded-lg w-full lg:w-72">
      <Icon size={30} className="text-indigo-700 mb-4" />
      <div className="flex flex-col w-full">
        <h3 className="font-semibold mb-2 text-nowrap">{title}</h3>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
