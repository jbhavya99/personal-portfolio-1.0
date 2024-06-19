import React, { useState } from "react";
//we will be using the FaBars and FaTimes later for mobile version
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  // here initial state will be false
  const [nav, setNav] = useState(false);

  //just to avoid the copying of code for home about etc in navbar
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Projects",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div
      className="flex justify-between items-center w-full h-14 md:h-20 px-4
    text-white bg-black fixed z-10"
    >
      <div>
        <h1 className="text-4xl font-signature ml-2 mt-1">mySite</h1>
      </div>
      {/* remmeber that tailwind is mobile first */}
      {/* for MOBILE VIEW NAVBAR */}
      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 mt-4 cursor-pointer text-gray-500 hover:scale-105"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* z-10 for keeping it always on top ICON BAR */}
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {" "}
        {nav ? <FaTimes size={30} /> : <FaBars size={25} />}
        {/* ? is a conditional statement */}
      </div>

      {/* to change the state from FaBars to normal and back */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {/* this is for inside the FaBars */}
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
