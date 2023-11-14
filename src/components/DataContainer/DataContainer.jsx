import React from "react";

import "./datacontainer.scss";

const DataContainer = ({
  title,
  updateTime,
  children,
  optionalButtonText,
  href,
}) => {
  return (
    <div className="data-container">
      <div className="data-container__header">
        <div className="header-info">
          <h3>{title}</h3>
          <p>Updated {updateTime}</p>
        </div>
        <div className="header-btns">
          {optionalButtonText && (
            <a className="opt-btn">{optionalButtonText}</a>
          )}
          <a className="ref-btn" href={href}>
            &#8599;
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DataContainer;
