// app/videos/page.tsx (if using App Router)

import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import VideoImg1 from "@/assets/img/videoImg.jpg";
import React from "react";

const VideosPage = () => {
  // Normally this would come from backend
  const videoData = [
    { id: 1, title: "What is Pelvic Organ Prolapse?", img: VideoImg1 },
    { id: 2, title: "Understanding Pelvic Floor Health", img: VideoImg1 },
    { id: 3, title: "How to Strengthen Core Muscles", img: VideoImg1 },
    { id: 4, title: "Importance of Early Diagnosis", img: VideoImg1 },
    { id: 5, title: "Treatment Options Available", img: VideoImg1 },
    { id: 6, title: "Preventive Exercises Guide", img: VideoImg1 },
  ];

  return (
    <>
      <Breadcrumb Title="Videos" />
      <div className="pt-100 pb-50">
        <Container>
          <Row>
            {videoData.map((video) => (
              <Col lg={4} key={video.id}>
                <div>
                  <Image
                    src={video.img}
                    className="videoImg"
                    alt="Video Thumbnail"
                    unoptimized
                  />
                  <h3 className="yotu-video-title">{video.title}</h3>
                </div>
              </Col>
            ))}
            <div className="yotu-pagination">
              <a
                href="#"
                className="yotu-pagination-more yotu-button-prs yotu-button-prs-1"
                data-page="more"
              >
                Load more
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default VideosPage;
