import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ pricing }) => {
  const { name, price, features } = pricing;
  return (
    <div className="bg-indigo-300 m-3 rounded-md p-3">
      <h3>
        <span className="text-6xl font-semibold text-white">{price}</span>
        <span className="text-gray-600 font-medium text-xl">/mon</span>
      </h3>
      <h1 className="text-2xl text-white">{name}</h1>
      {features.map((feature, index) => (
        <Feature key={index} feature={feature}></Feature>
      ))}
      <button className="bg-green-600 w-full mt-4 py-2 rounded-md text-white font-bold text-xl hover:bg-green-500">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
