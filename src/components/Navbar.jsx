import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

import logo from "../assets/ainGlobalLogo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const hash = location.hash.substr(1);
    const foundNav = navLinks.find((nav) => nav.id === hash);
    if (foundNav) {
      setActive(foundNav.title);
    } else {
      setActive("");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.hash]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex py-2 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center mx-auto h-24">
        <Link
          to="/"
          className="flex items-center sm:mt-0 mt-4 sm:ml-0 ml-16"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="mt-4 w-64 h-64" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 justify-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`underline-hover relative ${
                active === nav.title
                  ? "active text-white font-semibold"
                  : "text-white font-extralight"
              } text-[22px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                if (nav.id === "") {
                  window.scrollTo(0, 0);
                }
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="hidden sm:flex md:flex">
          <button className="rounded-lg border-2 border-[#04358b] font-bold text-white px-2 py-3 text-[20px] gradient-button md:px-2 md:py-2">
            Contact us
          </button>
        </div>

        {/* mobile navigation */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 dark-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[18px] ${
                    active === nav.title
                      ? "active text-white font-bold"
                      : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <button className="rounded-full border border-300 font-bold text-white-600 px-6 py-2 text-[20px] gradient-button">
                  Get in touch
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
