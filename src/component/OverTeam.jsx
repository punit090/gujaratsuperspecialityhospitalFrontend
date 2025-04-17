"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import TeamOne from "../assets/img/Hardik.png";
import TeamTwo from "../assets/img/Hardik.png";
import TeamThree from "../assets/img/Hardik.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    image: TeamOne,
    name: "Dr. Vivek Patel",
    designation: "M.S. (Orthopedics)",
    title: "Orthopedic and Joint Replacement Surgeon",
  },
  {
    image: TeamTwo,
    name: "Dr. Neha Sharma",
    designation: "MBBS, MD",
    title: "Senior Cardiologist",
  },
  {
    image: TeamThree,
    name: "Dr. Raj Mehta",
    designation: "BDS, MDS",
    title: "Oral and Maxillofacial Surgeon",
  },
];

const OverTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-4 py-10 pt-100">
      <h3 className="text-3xl amenitiesTitle font-semibold text-center mb-8">Our Team of Experts</h3>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-lg shadow-md p-4 text-center">
              <Image
                height={300}
                width={300}
                src={member.image}
                alt={member.name}
                className="mx-auto rounded-full object-cover"
                unoptimized
                style={{backgroundColor:"#e0e0e0"}}
              />
              <h5 className="mt-4 text-xl teamTitle font-semibold">{member.name}</h5>
              <div className="text-sm font-medium">{member.designation}</div>
              <p style={{ textAlign: "center" }} className="mt-1 text-gray-600 text-sm">
                {member.title}
              </p>
              <button className="mt-3 viewProfile px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OverTeam;
