import React from "react";
import HeaderLink from "./HeaderLink/HeaderLink";
import { Link } from "react-router-dom";

import "./header.scss";

const HomeHeader = () => {
  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "Product",
      href: "#product",
    },
    {
      title: "Source Code",
      href: "/source",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="header">
      {/* <div className="container"> */}
      <div className="header__row">
        <div className="header__logo">
          <a href="https://github.com/eql1">
            <img
              className="svg-logo"
              src="src/img/logo-equaalw.svg"
              alt="equaalw."
            />
          </a>
        </div>
        <nav className="header__nav">
          <ul>
            {navItems.map((item, index) => {
              return <HeaderLink key={index} data={item} />;
            })}
          </ul>
        </nav>
        <div className="header__action-wrapper">
          <a href="#!" className="header__action-text">
            Login
          </a>
          <a className="header__action-btn">
            <Link to={"/panel"}>Try it now</Link>
          </a>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default HomeHeader;
