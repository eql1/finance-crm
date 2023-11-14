import React from "react";

const HeaderLink = ({ data }) => {
  console.log(data);
  return (
    <li className="header__nav-item">
      <a href={data.href}>{data.title}</a>
    </li>
  );
};

export default HeaderLink;
