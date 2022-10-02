import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Awesome Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Hudai feature",
        "Ajaira Feature",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 9.99,
      features: [
        "Everything on Free",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Hudai feature",
        "Ajaira Feature",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      features: [
        "Everything on Premium",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Hudai feature",
        "Ajaira Feature",
      ],
    },
  ];

  return (
    <div>
      <h1 className="bg-indigo-300 p-8 text-5xl text-white font-bold">
        Best deal in the town
      </h1>
      <div className="grid md:grid-cols-3 gap-2">
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
