import React, { useState } from "react";
import DataItem from "./DataItem/DataItem";

import "./datacanvas.scss";

const DataCanvas = ({ data, translateX }) => {
  return (
    <div
      className="data-canvas"
      style={{ transform: `translateX(${translateX}px)` }}
    >
      <div className="data-canvas__main">
        {data.map((item) => {
          const { month, value, color } = item;
          return (
            <DataItem type="main" key={month} value={value} color={color} />
          );
        })}
      </div>
      <div className="data-canvas__shadow">
        {data.map((item) => (
          <DataItem
            type="shadow"
            key={item.month}
            value={item.value}
            color="black"
          />
        ))}
      </div>
    </div>
  );
};

export default DataCanvas;
