"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { VscQuote } from "react-icons/vsc";

import RiewviewsImg from "../assets/img/Logo-Google-02.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import ReviewImg from "../assets/img/reviewIm.png";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="nextArrowNew">
    <IoIosArrowDroprightCircle />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      left: "-33px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
      fontSize: "35px",
      color: "rgb(0 0 0 / 20%)",
    }}
    className="prevArrow"
  >
    <IoIosArrowDropleftCircle />
  </div>
);

const reviewData = [
  {
    name: "Punit Nirmal",
    date: "January 28, 2023",
    avatar: ReviewImg,
    text:
      "The best hospital with best staff and doctors. Doctors clear all doubts and very supportive in all aspects. Other staff, the support system is really the best and give their best so family of patients does not get any hurdles. Thank you so much for the best service.",
  },
  {
    name: "Punit Nirmal",
    date: "January 28, 2023",
    avatar:ReviewImg,
    text:
      "The best hospital with best staff and doctors. Doctors clear all doubts and very supportive in all aspects. Other staff, the support system is really the best and give their best so family of patients does not get any hurdles. Thank you so much for the best service.",
  },
  {
    name: "Punit Nirmal",
    date: "January 28, 2023",
    avatar:ReviewImg,
    text:
      "The best hospital with best staff and doctors. Doctors clear all doubts and very supportive in all aspects. Other staff, the support system is really the best and give their best so family of patients does not get any hurdles. Thank you so much for the best service.",
  },
  {
    name: "Punit Nirmal",
    date: "January 28, 2023",
    avatar:ReviewImg,
    text:
      "The best hospital with best staff and doctors. Doctors clear all doubts and very supportive in all aspects. Other staff, the support system is really the best and give their best so family of patients does not get any hurdles. Thank you so much for the best service.",
  },
];

const PatientsReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="slider-container reviewsMainDiv py-10 pb-100 pt-100">
      <div className="reieviewsDiv mb-8">
        <Image
          className="riewviewsImg"
          src={RiewviewsImg}
          alt="Reviews"
          height={80}
          width={190}
          unoptimized
        />
      </div>

      <h3 className="text-3xl amenitiesTitle font-semibold text-center mb-8">
        What Our Patients Say
      </h3>

      <div className="d-flex justify-center">
        <p className="reviewsDesc">
          We love it when our patients feel inspired to write about the care
          they received at GSH! Here are some of the wonderful testimonials we
          have recently received.
        </p>
      </div>

      <Container>
        <Slider {...settings}>
          {reviewData.map((review, index) => (
            <div className="wprevpro_t1_DIV_1 w3_wprs-col l4" key={index}>
              <div className="indrevdiv wprevpro_t1_DIV_2 wprev_preview_bg1_T1 wprev_preview_tcolor1_T1 wprev_preview_bradius_T1">
                <VscQuote className="quotessLeft" />
                <p className="wprevpro_t1_P_3 wprev_preview_tcolor1_T1">
                  <FaStar className="starIcon" /> 
                  <FaStar className="starIcon" />
                  <FaStar className="starIcon" />
                  <FaStar className="starIcon" />
                  <FaStar  className="starIcon" />
                  
                  {review.text}
                </p>
              </div>
              <div className="revimgdiv wprevpro_t1_DIV_6">
                <span className="wprevpro_t1_A_8">
                  <Image
                  width={50}
                  height={50}
                  unoptimized={true}
                    decoding="async"
                    src={review.avatar}
                    alt={`${review.name} Avatar`}
                    className="wprevpro_t1_IMG_4"
                    loading="lazy"
                  />
                </span>
                <span className="wprevpro_t1_SPAN_5 wprev_preview_tcolor2_T1">
                  {review.name}
                  <br />
                  <span className="wprev_showdate_T1">{review.date}</span>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default PatientsReviews;
