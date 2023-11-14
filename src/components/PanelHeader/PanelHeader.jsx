import { NavLink } from "react-router-dom";

import "./header.scss";

const PanelHeader = () => {
  const navItems = [
    { title: "Dashboard", href: "/panel" },
    { title: "Segments", href: "/segments" },
    { title: "Customers", href: "/customers" },
  ];

  return (
    <>
      <header className="panel-header">
        <div className="container">
          <div className="panel-header__row">
            <div className="panel-header__logo">
              <a href="/">
                <img
                  className="svg-logo"
                  src="src/img/logo-equaalw.svg"
                  alt="equaalw."
                />
              </a>
            </div>
            <nav className="panel-header__nav">
              {navItems.map((item, index) => (
                <NavLink key={index} to={item.href}>
                  {item.title}
                </NavLink>
              ))}
            </nav>
            <div className="panel-header__control-btns"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default PanelHeader;
