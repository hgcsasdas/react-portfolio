import React, { useState, useEffect, useMemo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Events } from "react-scroll";
import DropdownComponent from "./DropdownComponent";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [t] = useTranslation("global");

  const links = useMemo(
    () => [
      {
        id: 0,
        link: t("nav.navigation-routes.0"),
        title: t("nav.0"),
      },
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
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.floor(
        (scrollPosition + windowHeight / 2) / windowHeight
      );

      const sections = links.map((link) => link.link);

      const sectionName = sections[newSection];

      setCurrentSection(sectionName);
    };

    Events.scrollEvent.register("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  const navLinkClass = (section) =>
    `px-4 cursor-pointer capitalize font-bold text-blue-100 hover:scale-105 duration-200 ${
      currentSection === section ? "border-b-2 border-yellow-500" : ""
    }`;

  const handleLinkClick = (link) => {
    setCurrentSection(link);
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-blue-600 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">CSN</h1>
      </div>

      <div>
        <ul className="hidden justify-between items-center md:flex">
          {links.map(({ id, link, title }) => (
            
            <li key={id} className={navLinkClass(link)}>
              <Link
                to={link}
                smooth={true}
                duration={400}
                onClick={() => handleLinkClick(link)}
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
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold"
            >
              <Link
                onClick={() => handleLinkClick(id, link)}
                to={link}
                smooth={true}
                duration={400}
                className={navLinkClass(link)}
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
