import React from "react";

const HeroCard = ({ Icon, title }) => {
  return (
    <div className="flex flex-col shadow-md rounded-xl bg-white w-48 h-40 p-6 items-center justify-center text-center">
      <Icon size={48} className=" font-bold text-indigo-700 mb-2" />
      <p>{title}</p>
    </div>
  );
};

export default HeroCard;
