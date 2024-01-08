import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import DropdownComponent from "./DropdownComponent";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [t] = useTranslation("global");

  const links = [
    {
      id: 1,
      link: t("nav.navigation-routes.1"),
      title: t("nav.1"),
    },
    {
      id: 2,
      link: t("nav.navigation-routes.2"),
      title: t("nav.2"),
    },
    {
      id: 3,
      link: t("nav.navigation-routes.3"),
      title: t("nav.3"),
    },
    {
      id: 4,
      link: t("nav.navigation-routes.4"),
      title: t("nav.4"),
    },
    {
      id: 6,
      link: t("nav.navigation-routes.6"),
      title: t("nav.6"),
    },
  ];

  const handleLinkClick = (id, link) => {
    setCurrentSection(id);
    setNav(false);
    // Puedes agregar lógica adicional aquí si es necesario
  };

  const navLinkClass = (id) =>
    `px-4 cursor-pointer capitalize font-bold text-blue-100 hover:scale-105 duration-200 ${
      currentSection === id ? "border-b-2 border-yellow-500" : ""
    }`;

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-blue-600 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">CSN</h1>
      </div>

      <div>
        <ul className="hidden flex justify-between items-center md:flex">
          {links.map(({ id, link, title }) => (
            <li key={id} className={navLinkClass(id)}>
              <Link
                to={link}
                smooth={true}
                duration={400}
                onClick={() => handleLinkClick(id, link)}
              >
                {title}
              </Link>
            </li>
          ))}
          <li className={navLinkClass("dropdown")}>
            <DropdownComponent />
          </li>
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white duration-100 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-blue-100 ">
          {links.map(({ id, link, title }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold">
              <Link
                onClick={() => handleLinkClick(id, link)}
                to={link}
                smooth={true}
                duration={400}
                className={navLinkClass(id)}
              >
                {title}
              </Link>
            </li>
          ))}
          <li className={navLinkClass("dropdown")}>
            <DropdownComponent />
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
