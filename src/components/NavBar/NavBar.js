import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "About", path: "/about" },
  ];

  return (
    <nav className="py-4 bg-purple-200">
      <div className="md:w-11/12 flex justify-between  mx-auto">
        <h1 className="font-bold text-4xl px-3">LOGO</h1>
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden h-8 w-8 black-blue-500 cursor-pointer mr-3"
        >
          {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
        </div>

        {/* links */}
        <ul
          className={`w-full md:z-[100] z-[-1] md:w-2/4 bg-purple-200 md:static md:flex justify-center absolute ease-in duration-500 ${
            open ? "top-14" : "top-[-280px]"
          }`}
        >
          {routes.map(route => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
