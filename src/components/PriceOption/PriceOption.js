import React from "react";

const PriceOption = ({ pricing }) => {
  return (
    <div>
      <h3>{pricing.price}</h3>
      <h1>{pricing.name}</h1>
    </div>
  );
};

export default PriceOption;
