"use client"; // If you're using Next.js App Router

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import BannerOne from "@/assets/img/hero-slide-1.jpg";
import BannerTwo from "@/assets/img/hero-slide-2.jpg";
import BannerThree from "@/assets/img/hero-slide-3.jpg";
import Link from "next/link";

// Dynamically import Slider to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="nextArrow"
    >
      <FaChevronCircleRight />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "25px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        fontSize: "35px",
        color: "rgb(0 0 0 / 50%)",
        
      }}
      className="prevArrow"
    >
      <FaChevronCircleLeft />
    </div>
  );
};

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      title: "One",
      image: BannerOne,
    },
    {
      title: "Two",
      image: BannerTwo,
    },
    {
      title: "Three",
      image: BannerThree,
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.image.src})`,
              }}
              className="banner-slider-main-div"
            >
              <div>
                <div className="bannerMain">
                  <div className="bannerTitle">
                    <div>Elevated </div>
                    <div>Dialysis Care </div>
                  </div>
                  <div className="bannerSubTitle">
                    Upgraded Dialysis Unit for Optimal Treatment
                  </div>
                  <div>
                    <Link className="bookAppointmentLink" href="#" >
                    Book an Appointment 
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
