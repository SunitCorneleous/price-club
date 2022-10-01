import React from "react";

const Link = ({ route }) => {
  return (
    <li className="px-8">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
