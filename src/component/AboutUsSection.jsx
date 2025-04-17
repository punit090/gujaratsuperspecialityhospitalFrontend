import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImage from "../assets/img/aboutImg.jpg";
import AmenitiesOne from "../assets/img/ICU-Icon-A.png";
import AmenitiesTwo from "../assets/img/Patient-Counselling-Icon.png";
import AmenitiesThree from "../assets/img/Rooms-Icon.png";
import AmenitiesFour from "../assets/img/Operation-Theater-Icon.png";
import AmenitiesFive from "../assets/img/Dialysis-Center-Icon.png";
import AmenitiesSix from "../assets/img/monitoring-Icon.png";

import Link from "next/link";

const AboutUsSection = () => {
  return (
    <React.Fragment>
      <div className="bg-lightgrey  about-section   pt-100  ">
        <Container>
          <Row className="aboutRow">
            <Col lg={6}>
              <Image
                src={AboutImage}
                alt="aboutImg"
                height={500}
                width={500}
                unoptimized={true}
              />
            </Col>
            <Col className="aboutCol" lg={6}>
              <div className="aboutTitle">
                Gujarat Kidney and Super Speciality Limited (Formerly known as
                Vihaan Medicare Private Limited)
              </div>
              <div className="aboutSubTitle">
                Complete Medical Solutions in One Place
              </div>
              <p>
                With the effective use of advanced technology and high-quality
                equipment, we aim at providing top-notch treatment facilities to
                all our patients. We have 16 beds in the Intensive Care Unit
                (ICU) along with an ICU on wheels to meet the emergency needs of
                the patients. Other facilities are sonography, CT scan, dialysis
                center, blood storage, 4 modular operation theatres, and
                round-the-clock pathological laboratory & pharmacy. Thus, the
                patients can certainly expect all sorts of treatments under one
                roof.
              </p>
              <div>
                <button className="knowMoreBtn">Know More</button>
              </div>
            </Col>
          </Row>
          <div className="amenities">
            <Row>
              <h3 className="amenitiesTitle">Our Amenities</h3>
              <Col lg={2}>
                <div className="ImgDiv">
                  <Image
                    className="amenitiesImg"
                    height={70}
                    width={70}
                    src={AmenitiesOne}
                    alt="amenities"
                    unoptimized={true}
                  />
                </div>
                <p className="amenitiesText">
                  <Link href="#">Intensive Care Unit (ICU) </Link>
                </p>
              </Col>
              <Col lg={2}>
                <div className="ImgDiv">
                  <Image
                    className="amenitiesImg"
                    height={70}
                    width={70}
                    src={AmenitiesTwo}
                    alt="amenities"
                    unoptimized={true}
                  />
                </div>
                <p className="amenitiesText">
                  <Link href="#">Patient Counselling Areas</Link>
                </p>
              </Col>
              <Col lg={2}>
                <div className="ImgDiv">
                  <Image
                    className="amenitiesImg"
                    height={70}
                    width={70}
                    src={AmenitiesThree}
                    alt="amenities"
                    unoptimized={true}
                  />
                </div>
                <p className="amenitiesText">
                  <Link href="#">Rooms</Link>
                </p>
              </Col>{" "}
              <Col lg={2}>
                <div className="ImgDiv">
                  <Image
                    className="amenitiesImg"
                    height={70}
                    width={70}
                    src={AmenitiesFour}
                    alt="amenities"
                    unoptimized={true}
                  />
                </div>
                <p className="amenitiesText">
                  <Link href="#">Operation Theatre</Link>
                </p>
              </Col>
              <Col lg={2}>
                <div className="ImgDiv">
                  <Image
                    className="amenitiesImg"
                    height={70}
                    width={70}
                    src={AmenitiesFive}
                    alt="amenities"
                    unoptimized={true}
                  />
                </div>
                <p className="amenitiesText">
                  <Link href="#">Dialysis Center</Link>
                </p>
              </Col>
              <Col lg={2}>
                <div className="ImgDiv">
                  <Image
                    className="amenitiesImg"
                    height={70}
                    width={70}
                    src={AmenitiesSix}
                    alt="amenities"
                    unoptimized={true}
                  />
                </div>
                <p className="amenitiesText">
                  <Link href="#">Equipment and Facilities</Link>
                </p>
              </Col>
            </Row>
          </div>
         


        
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AboutUsSection;
