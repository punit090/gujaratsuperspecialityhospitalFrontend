"use client";
import Image from "next/image";
import Slider from "react-slick";

import IcuImg from "@/assets/img/Top1-A.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
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

const IcuSection = ({Img,Title,subTitle ,description}) => {
  return (
    <div className="IcusetionMainDiv">
      <div className="icuMainDiv">
        <Image className="icuImg" src={Img} alt="ICU Icon" unoptimized />
      </div>
      <h3
        style={{
          textAlign: "center",
          color: "#393185",
          fontWeight: "500",
          letterSpacing: "1",
        }}
      >
     
        {Title}
      </h3>
      <p style={{ textAlign: "center" }}>
        <b>{subTitle}</b> {description}
      </p>

      <hr style={{ color: "#e31e24", border: "1px solid" }} />

      <Slider {...sliderSettings}>
        <div>
          <Image src={IcuImg} height={500} width={500} alt="ICU" unoptimized />
        </div>
        <div>
          <Image src={IcuImg} height={500} width={500} alt="ICU" unoptimized />
        </div>
        <div>
          <Image src={IcuImg} height={500} width={500} alt="ICU" unoptimized />
        </div>
      </Slider>
    </div>
  );
};

export default IcuSection;
