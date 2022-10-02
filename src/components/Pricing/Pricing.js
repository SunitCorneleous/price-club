import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOptions = [
    { id: 1, name: "Free", price: "9.99" },
    { id: 2, name: "Medium", price: "19.99" },
    { id: 3, name: "Premium", price: "59.99" },
  ];

  return (
    <div>
      <h1 className="bg-indigo-300 p-8 text-5xl text-white font-bold">
        Best deal in the town
      </h1>
      <div className="grid grid-cols-3 gap-2">
        {pricingOptions.map(pricingOption => (
          <PriceOption
            key={pricingOption.id}
            pricing={pricingOption}
          ></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
