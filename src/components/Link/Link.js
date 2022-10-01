import React from "react";

const Link = ({ route }) => {
  return (
    <li className="md:px-3 py-4 mx-auto font-semibold">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
