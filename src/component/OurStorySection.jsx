import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogImg from "../assets/img/blogImg.jpg"

const OurStorySection = () => {
  return (
    <React.Fragment>
      <div className=" reviewsMainDiv pb-100 pt-100">
        <h3 className="text-3xl amenitiesTitle font-semibold text-center mb-8">
          Our Stories, Tips & Latest News
        </h3>

        <div className="d-flex justify-center">
          <p className="reviewsDesc sotriesDesc">
            Get to know about all the latest happenings at Gujarat
            Superspeciality Hospital
          </p>
        </div>

        <Container>
          <Row>
            <Col lg={4}>
              <div>
                <Link href="#">
                  <div className="blogDesc">
                    Understanding Acute Kidney Injury: Causes, Symptoms, and
                    Treatment
                  </div>
                  <div className="blogDate">
                    December 23, 2024 <span> by</span>
                  </div>
                  <div className="blogSubDesc">Gujarat Superspeciality Hospital</div>
                  <div className="blogShortDesc">
                    Acute Kidney Injury (AKI) is a serious condition where the
                    kidneys suddenly lose their ability to filter waste...
                  </div>
                </Link>
                <Link className="moreDetailsLink" href="#" >
                More Details
                </Link>
              </div>
            </Col>
            <Col lg={4}>
            <div>
                <Image src={BlogImg} alt="blog" className="blogImg" height={500} width={300} unoptimized={true} />
                <Link href="#">
                  <div className="blogDesc">
                    Understanding Acute Kidney Injury: Causes, Symptoms, and
                    Treatment
                  </div>
                  <div className="blogDate">
                    December 23, 2024 <span> by</span>
                  </div>
                  <div className="blogSubDesc">Gujarat Superspeciality Hospital</div>
                  <div className="blogShortDesc">
                    Acute Kidney Injury (AKI) is a serious condition where the
                    kidneys suddenly lose their ability to filter waste...
                  </div>
                </Link>
                <Link className="moreDetailsLink" href="#" >
                More Details
                </Link>
              </div>
            </Col>
            <Col lg={4}>
            <div>
                <Image src={BlogImg} alt="blog" className="blogImg" height={500} width={300} unoptimized={true} />
                <Link href="#">
                  <div className="blogDesc">
                    Understanding Acute Kidney Injury: Causes, Symptoms, and
                    Treatment
                  </div>
                  <div className="blogDate">
                    December 23, 2024 <span> by</span>
                  </div>
                  <div className="blogSubDesc">Gujarat Superspeciality Hospital</div>
                  <div className="blogShortDesc">
                    Acute Kidney Injury (AKI) is a serious condition where the
                    kidneys suddenly lose their ability to filter waste...
                  </div>
                </Link>
                <Link className="moreDetailsLink" href="#" >
                More Details
                </Link>
              </div>
            </Col>
            <div className="readMorDiv">
                <Link className="readMoreLink" href="#" >
                Read More Posts
                </Link>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default OurStorySection;
