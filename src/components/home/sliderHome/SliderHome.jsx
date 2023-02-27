import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./SliderHome.scss";

function SliderHome() {
  const dataImages = [
    {
      name: "First slide",
      imgSrc:
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Second slide",
      imgSrc:
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Third slide",
      imgSrc:
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <div className="w-100">
      <Carousel>
        {dataImages.map((image, index) => (
          <Carousel.Item key={`image-${index}`}>
            <div
              className="slider-home-item"
              style={{ backgroundImage: `url(${image.imgSrc})` }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderHome;
