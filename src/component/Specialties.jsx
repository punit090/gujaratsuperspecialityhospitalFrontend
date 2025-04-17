import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Urology from "@/assets/img/gsh-Urology.png"
import Nephrology from "@/assets/img/gsh-Nephrology.png";
import CardiacCare from "@/assets/img/gsh-CardiacCare.png";
import Neurology from "@/assets/img/gsh-Neurology.png";
import Hernia from "@/assets/img/gsh-Hernia.png";
import Gastroenterology from "@/assets/img/gsh-Gastroenterology.png";
import KidneyTransplant from "@/assets/img/Renal-Transplant.png";
import Orthopedics from "@/assets/img/Orthopedic.png";
import Neurosurgery from "@/assets/img/gsh-Neurosurgery.png";
import TraumaCareCenter from "@/assets/img/Trauma.png"
import SpineClinic from "@/assets/img/gsh-SpineClinic.png";
import OBGYN from "@/assets/img/gsh-OB-GYN.png";

const specialties = [
  {
    title: "Urology",
    imgSrc:Urology,
    link: "#",
  },
  {
    title: "Nephrology",
    imgSrc:Nephrology    ,
    link: "#",
  },
  {
    title: "Cardiac Care",
    imgSrc:CardiacCare ,
    link: "#",
  },
  {
    title: "Neurology",
    imgSrc:Neurology    ,
    link: "#",
  },
  {
    title: "Neurosurgery",
    imgSrc:Neurosurgery    ,
    link: "#",
  },
  {
    title: "Hernia",
    imgSrc:Hernia    ,
    link: "#",
  },
  {
    title: "Gastroenterology",
    imgSrc:Gastroenterology    ,
    link: "#",
  },
  {
    title: "Kidney Transplant",
    imgSrc:KidneyTransplant    ,
    link: "#",
  },
  {
    title: "Orthopedics",
    imgSrc:Orthopedics    ,
    link: "#",
  },
  {
    title: "Trauma Care Center",
    imgSrc:TraumaCareCenter    ,
    link: "#",
  },
  {
    title: "Spine Clinic",
    imgSrc:SpineClinic,
    link: "#",
  },
  {
    title: "OB-GYN",
    imgSrc:OBGYN    ,
    link: "#",
  },,
 
];

const Specialties = () => {
  return (
    <div className="specialtisMainDiv">
      <Container>
        <h3 className="text-3xl amenitiesTitle font-semibold text-center mb-8">
          Our Specialties
        </h3>
        <Row>
          {specialties.map((item, index) => (
            <Col lg={2} key={index}>
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                    <a
                      href={item.link}
                      target="_self"
                      className="vc_single_image-wrapper vc_box_border_grey"
                    >
                      <Image
                        decoding="async"
                        className="vc_single_image-img img-fluid"
                        src={item.imgSrc}
                        alt={`${item.title} image`}
                        height={400}
                        width={400}
                        unoptimized={true}
                      />
                    </a>
                  </figure>
                </div>
                <div className="wpb_text_column wpb_content_element">
                  <div className="wpb_wrapper">
                    <p style={{ textAlign: "center" }}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener"
                        className="specialtiesTitle"
                      >
                        <strong>{item.title}</strong>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 20 }}>
                  <span className="vc_empty_space_inner" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Specialties;
