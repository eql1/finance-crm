import React from "react";

import "./trailcard.scss";

const TrailCard = ({ item }) => {
  const { title, duration, durationUnit, backgroundColor, color } = item;

  const styles = {
    background: backgroundColor,
    color: color,
  };

  return (
    <div className="trailcard" style={styles}>
      <div className="trailcard__header">
        <h1>{title}</h1>
      </div>
      <div className="trailcard__content">
        <div className="trailcard__duration">
          <h2>{duration}</h2>
          <p style={{ color: color }}>{durationUnit}</p>
        </div>
        <div className="trailcard__content-ref">
          <a className="trailcard__link" style={{ color: color }}>
            &#8599;
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrailCard;
