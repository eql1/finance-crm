import React, { useState, useEffect } from "react";

import "./slider.scss";

const Slider = () => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  useEffect(() => {
    const imageInterval = setInterval(nextImage, 3000);
    return () => clearInterval(imageInterval);
  }, [currentImageIndex]);

  return (
    <div className="slider">
      <div className="slider__content">
        <button className="slider__button" onClick={prevImage}>
          &#8249;
        </button>
        <div className="slider__image-container">
          <div
            className="slider__image-wrapper"
            style={{ transform: `translateX(${currentImageIndex * -600}px)` }}
          >
            {images.map((image, index) => {
              return (
                <img
                  src={`./images/${image}`}
                  key={index}
                  alt="Image"
                  className="slider__image"
                />
              );
            })}
          </div>
        </div>
        <button className="slider__button" onClick={nextImage}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Slider;
