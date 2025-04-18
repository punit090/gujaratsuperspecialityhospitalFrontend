import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogImg from "@/assets/img/blogImgNew.jpg";
import { FaSearch } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import PostImg from "@/assets/img/gk1.jpg";

const page = () => {
  const blogData = [
    {
      title:
        "Understanding Acute Kidney Injury: Causes, Symptoms, and Treatment",
      date: "December 23, 2024 ",
      subTitle: "Gujarat Superspeciality Hospital",
      description:
        "Acute Kidney Injury (AKI) is a serious condition where the kidneys suddenly lose their ability to filter waste and maintain a proper balance of fluids, electrolytes, and toxins in the body. It can happen quickly, often within a few hours…",
      img: BlogImg,
    },
    {
      title: "The Connection Between High Blood Pressure and Kidney Health",
      date: "December 17, 2024 ",
      subTitle: "Gujarat Superspeciality Hospital",
      description:
        "High blood pressure, or hypertension, is a common condition that can affect various parts of the body. One of the most important areas impacted by high blood pressure is the kidneys. The kidneys are responsible for filtering waste and excess…",
      img: BlogImg,
    },
    {
      title: "kidney Transplant, Procedure, Benefits, Risks and Recovery",
      date: "August 18, 2024 ",
      subTitle: "Gujarat Superspeciality Hospital",
      description:
        "KIDNEY TRANSPLANT A kidney transplant is a surgery to place a healthy kidney from a living or deceased donor into a person whose kidneys no longer function properly. The kidneys are a pair of bean shaped organs that are located…",
      img: BlogImg,
    },
    {
      title: "PCOS – Polycystic Ovary Syndrome",
      date: "June 20, 2024 ",
      subTitle: "Gujarat Superspeciality Hospital",
      description:
        "Polycystic ovary syndrome (PCOS)  is an endocrine system disorder where small fluid-filled sacs develop on the ovaries. It is also known as Stein- Leventhal syndrome. The symptoms include changes in the menstrual cycle , excess hair growth, acne and many…",
      img: BlogImg,
    },
  ];
  return (
    <React.Fragment>
      <Breadcrumb Title="Blog" />
      <div className="pt-100 pb-40">
        <Container>
          <Row>
            <Col lg={8}>
              {blogData?.map((data) => (
                <div>
                  <div className="blogMainDiv">
                    <h5 className="bolgTitle">
                      <Link href="#">{data.title}</Link>
                    </h5>
                    <div>
                      <Link className="dateLink" href="#">
                        {data.date}
                      </Link>
                      <span className="bySpan">by</span>
                      <Link className="dateLink" href="#">
                        {data.subTitle}
                      </Link>
                    </div>
                    <p className="blogDescription">{data.description}</p>
                    <a className="moreDetailsLink" href="#">
                      More Details
                    </a>
                  </div>

                  <Image
                    className="blogImg"
                    src={data.img}
                    unoptimized={true}
                    alt="img"
                    height={500}
                    width={500}
                  />
                </div>
              ))}
              <div className="hrDoted"></div>

              {/* ///// pagination ===>  */}

              <div
                className="blog-page-pagination mt-80 b-top wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <nav aria-label="Page navigation">
                  <ul
                    className="pagination justify-content-center"
                    style={{ gap: "10px" }}
                  >
                    <li className="page-item prev">
                      <span className="page-link">
                        <a href="#" className="newer-posts">
                          <i className="icon-chevron-left" />
                          Previous
                        </a>
                      </span>
                    </li>

                    <li className="page-item active">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        12
                      </a>
                    </li>
                    <li className="page-item next">
                      <span className="page-link">
                        <a href="#" className="older-posts">
                          Next <i className="icon-chevron-right" />
                        </a>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
            <Col lg={4}>
              <form
                action="#"
                role="search"
                method="get"
                id="searchform"
                className="search-form"
              >
                <div className="input-group mb-50">
                  <input
                    className="form-control searcInput"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="search-field"
                    type="text"
                    name="s"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary searchBtn" type="submit">
                      <i className="fa fa-search" aria-hidden="true">
                        <FaSearch />{" "}
                      </i>
                    </button>
                  </div>
                </div>
              </form>
              <div className="mb-50">
                <h5 className="h5-sm categoryTitle widget-title">Categories</h5>
                <ul className="catetoryUl">
                  <li className="cat-item cat-item-82">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Bariatric &amp;
                      Metabolic Surgery
                    </a>{" "}
                    (2)
                  </li>
                  <li className="cat-item cat-item-60">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Cardiology
                    </a>{" "}
                    (15)
                  </li>
                  <li className="cat-item cat-item-127">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Covid Care
                    </a>{" "}
                    (3)
                  </li>
                  <li className="cat-item cat-item-185">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Diabetes
                    </a>{" "}
                    (2)
                  </li>
                  <li className="cat-item cat-item-143">
                    <a href="3">
                      <FaAnglesRight className="rightArrow" /> Gastroenterology
                    </a>{" "}
                    (10)
                  </li>
                  <li className="cat-item cat-item-34">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> General &amp;
                      Laparoscopic Surgery
                    </a>{" "}
                    (6)
                  </li>
                  <li className="cat-item cat-item-1">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Gujarat
                      Superspeciality treatments
                    </a>{" "}
                    (5)
                  </li>
                  <li className="cat-item cat-item-148">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Gynaecology
                    </a>{" "}
                    (4)
                  </li>
                  <li className="cat-item cat-item-4">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Lifestyle
                    </a>{" "}
                    (2)
                  </li>
                  <li className="cat-item cat-item-383">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Nephrology
                    </a>{" "}
                    (26)
                  </li>
                  <li className="cat-item cat-item-48">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Neurology
                    </a>{" "}
                    (2)
                  </li>
                  <li className="cat-item cat-item-80">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Neurosurgery
                    </a>{" "}
                    (3)
                  </li>
                  <li className="cat-item cat-item-47">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Orthopedics &amp;
                      Joint Replacement
                    </a>{" "}
                    (12)
                  </li>
                  <li className="cat-item cat-item-66">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Robotic Surgery
                    </a>{" "}
                    (5)
                  </li>
                  <li className="cat-item cat-item-90">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Trauma Care
                    </a>{" "}
                    (1)
                  </li>
                  <li className="cat-item cat-item-41">
                    <a href="#">
                      <FaAnglesRight className="rightArrow" /> Urology
                    </a>{" "}
                    (21)
                  </li>
                </ul>
              </div>
              <div className="mb-50">
                <h5 className="h5-sm categoryTitle widget-title">
                  Popular Posts
                </h5>
                <div className="post-summary">
                  <a className="rose-hover" href="#">
                    Understanding Acute Kidney Injury: Causes, Symptoms, and
                    Treatment
                  </a>
                  <p>December 23, 2024</p>
                </div>
                <div className="post-summary summaryDiv">
                  <div>
                    <Image
                      height={90}
                      width={90}
                      src={PostImg}
                      unoptimized={true}
                      alt="img"
                      className="summaryImg"
                    />
                  </div>
                  <div>
                    <Link href="#">
                      The Connection Between High Blood Pressure and Kidney
                      Health
                    </Link>
                    <p>December 17, 2024</p>
                  </div>
                </div>

                <div className="post-summary summaryDiv">
                  <div>
                    <Image
                      height={90}
                      width={90}
                      src={PostImg}
                      unoptimized={true}
                      alt="img"
                      className="summaryImg"
                    />
                  </div>
                  <div>
                    <Link href="#">
                      The Connection Between High Blood Pressure and Kidney
                      Health
                    </Link>
                    <p>December 17, 2024</p>
                  </div>
                </div>
              </div>
              <div className="mb-50">
                <h5 className="h5-sm categoryTitle widget-title">Tag Cloud</h5>
                <div>
                  <Link className="tagCloudLink" href="#">
                    best cardiologist in vadodara
                  </Link>
                  <Link className="tagCloudLink" href="#">
                    best heart specialist in vadodara
                  </Link>
                  <Link className="tagCloudLink" href="#">
                    Best Kidney Transplant Hospital
                  </Link>
                  <Link className="tagCloudLink" href="#">
                    best knee replacement surgeon in vadodara
                  </Link>
                  <Link className="tagCloudLink" href="#">
                    best urologist doctor in vadodara
                  </Link>
                </div>
              </div>

              <div className="mb-50">
                <div>
                  <h5>Our Location</h5>
                  <p>
                    New India Mill Compound, Nr. Jetalpur Road, Jetalpur Bridge,
                    Anand Nagar, Haripura, Vadodara, Gujarat 390020
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default page;
