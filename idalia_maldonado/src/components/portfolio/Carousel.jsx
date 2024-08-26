// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./portfolio.css";
import Car1 from "../../assets/car1.jpeg";
import Car2 from "../../assets/car2.jpeg";
import Car3 from "../../assets/car3.jpeg";
import Car4 from "../../assets/Car4.jpeg";
import Car5 from "../../assets/Car5.jpeg";
import Car6 from "../../assets/Car6.jpeg";
import Car7 from "../../assets/Car7.jpeg";
import Car8 from "../../assets/Car8.jpeg";
import Car9 from "../../assets/Car9.jpeg";
import Car10 from "../../assets/Car10.jpeg";
import Car11 from "../../assets/Car11.jpeg";
import Car12 from "../../assets/Car12.jpeg";
import Car13 from "../../assets/Car13.jpeg";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        right: "10px", // Ajustar según sea necesario para centrar
        top: "50%",
        transform: "translate(0, -50%)",
        zIndex: 2,
      }}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        left: "10px", // Ajustar según sea necesario para centrar
        top: "50%",
        transform: "translate(0, -50%)",
        zIndex: 2,
      }}
      onClick={onClick}
    ></div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    Car1,
    Car2,
    Car3,
    Car4,
    Car5,
    Car6,
    Car7,
    Car8,
    Car9,
    Car10,
    Car11,
    Car12,
    Car13,
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="img__carousel" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
