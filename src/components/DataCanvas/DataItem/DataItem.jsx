import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

import "./dataitem.scss";

const DataItem = ({ value, color, type }) => {
  const mainRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(mainRef.current, {
  //     height: 0,
  //     duration: 2,
  //     ease: "power2.out",
  //   });
  // }, []);

  const heightValue = value;
  return (
    <div
      className={`data__${type}`}
      ref={mainRef}
      style={{ height: heightValue, backgroundColor: color }}
    ></div>
  );
};

export default DataItem;
