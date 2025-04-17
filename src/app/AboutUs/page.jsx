import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MiisonImg from "@/assets/img/Mission.jpg";
import Vision from "@/assets/img/Vision.jpg";
import PatientFirst from "@/assets/img/Patient-First.jpg";
import QualityService from "@/assets/img/Quality-Service.jpg";
import Integrity from "@/assets/img/Integrity.jpg";
import TeamWork from "@/assets/img/Team-Work-.jpg";
import StriveforInnovation from "@/assets/img/Strive-for-Innovation.jpg";
import ContinuousLearning from "@/assets/img/Continuous-Learning.jpg";
import SpecialistImg from "@/assets/img/DRPB700.jpg";
import ICU from "@/assets/img/ICU-Icon-A.png";
import Counselling from "@/assets/img/Patient-Counselling-Icon.png";
import Rooms from "@/assets/img/Rooms-Icon.png";
import OperationTheatre from "@/assets/img/Operation-Theater-Icon.png";
import DialysisCenter from "@/assets/img/Dialysis-Center-Icon.png";
import EquipmentFacilities from "@/assets/img/monitoring-Icon.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";


const pages = () => {
  return (
    <React.Fragment>
      <Breadcrumb Title="About Us" />
      <Container>
        <div className="pt-100">
          <h5 className="steelblue-color-color pb-40 h5-md none">
            GUJARAT SUPERSPECIALITY HOSPITAL is one of the leading
            multi-speciality hospitals in Vadodara
          </h5>
          <div className="wpb_wrapper">
            <p>
              With the effective use of advanced technology and high-quality
              equipment, we aim at providing top-notch treatment facilities to
              all our patients. We have 16 beds in the{" "}
              <a href="#">
                <strong>Intensive Care Unit (ICU)</strong>
              </a>{" "}
              along with an ICU on wheels to meet the emergency needs of the
              patients. Other facilities are sonography, CT scan, dialysis
              center, blood storage, 3 modular operation theatres, and
              round-the-clock pathological laboratory &amp; pharmacy. Thus, the
              patients can certainly expect all sorts of treatments under one
              roof.
            </p>
            <p>
              We also provide patients with a complete package of surgical
              solutions; some of them are <a href="#">Renal Surgery</a>,{" "}
              <a href="#">Vascular Surgery</a>,{" "}
              <a href="#">Gynecology and obstetrics</a>,{" "}
              <a href="#">Robotic Surgery</a>, <a href="#">Bariatric Surgery</a>
              , <a href="#">Laparoscopic Surgery</a>,{" "}
              <a href="#">Endocrine Surgery</a>, <a href="#">Neurosurgery</a>,
              and <a href="#">Joint Replacement</a>.
            </p>
            <p>
              Consultation and treatment for <a href="#">Oncology</a>,{" "}
              <a href="#">Neurology</a>,{" "}
              <a href="https://www.gujaratsuperspecialityhospital.com/gastroenterology/">
                Gastroenterology
              </a>
              , <a href="#">Urology</a>, <a href="#">Nephrology</a>, and{" "}
              <a href="#">Physiotherapy</a> are also available with a 24×7
              functional <a href="#">trauma care centre</a>.
            </p>
            <p>
              And, to add to our quality care we are pleased to share that now{" "}
              <a href="#">
                <strong>GUJARAT KIDNEY &amp; SUPERSPECIALITYHOSPITAL</strong>
              </a>{" "}
              has introduced{" "}
              <a href="#">
                <strong>Robotic Surgeries in Vadodara</strong>
              </a>{" "}
              and become the only hospital to do so in the region of Central
              Gujarat.
            </p>
          </div>
          <Row className="aboutCounter">
            <Col lg={4}>
              <div className="wpb_wrapper ">
                <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                  <div className="wpb_wrapper">
                    <div className="statcontainer">
                      <div className="statnumbercontainer">
                        <span className="statnumber">100</span>
                      </div>
                      <div className="statdesccontainer">
                        <div className="statdesc">Bedded Hospital</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="wpb_wrapper ">
                <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                  <div className="wpb_wrapper">
                    <div className="statcontainer">
                      <div className="statnumbercontainer">
                        <span className="statnumber">16</span>
                      </div>
                      <div className="statdesccontainer">
                        <div className="statdesc">Bedded Hospital I.C.U.</div>
                        <div className="statdesc">Isolation I.C.U.</div>
                        <div className="statdesc">Cubicle I.C.U.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="wpb_wrapper ">
                <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                  <div className="wpb_wrapper">
                    <div className="statcontainer">
                      <div className="statnumbercontainer">
                        <span className="statnumber">03</span>
                      </div>
                      <div className="statdesccontainer">
                        <div className="statdesc">Modular</div>
                        <div className="statdesc">Operation</div>
                        <div className="statdesc">Theatres</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="visionMissionRow">
            <Col lg={6}>
              <div className="missionMainDiv">
                <div>
                  <Image
                    src={MiisonImg}
                    alt="mission"
                    className="missionImg"
                    height={100}
                    width={100}
                    unoptimized={true}
                  />
                </div>
                <div className="">
                  <div className="missionTitle">Mission</div>
                  <div>
                    To provide well-experienced service and latest technology in
                    patient care, while adding quality to life by showering
                    never-ending care.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="missionMainDiv">
                <div>
                  <Image
                    src={Vision}
                    alt="mission"
                    className="missionImg"
                    height={100}
                    width={100}
                    unoptimized={true}
                  />
                </div>
                <div className="">
                  <div className="missionTitle">Vision</div>
                  <div>
                    To continually provide the highest international standards
                    of patient care with unrelenting attention to technological
                    advancement, clinical excellence, compassion, and patient
                    safety.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="valueRow">
          <h5
            className="steelblue-color-color h5-md none"
            style={{ textAlign: "center", paddingBottom: "20px" }}
          >
            Values
          </h5>
          <Col className="" lg={2}>
            <div className="valueCol">
              <Image
                src={PatientFirst}
                alt="Patient First"
                className="patientImg"
                height={100}
                width={100}
                unoptimized={true}
              />
            </div>
            <div className="valueTitle">Patient First</div>
          </Col>
          <Col className="" lg={2}>
            <div className="valueCol">
              <Image
                src={QualityService}
                alt="Patient First"
                className="patientImg"
                height={100}
                width={100}
                unoptimized={true}
              />
            </div>
            <div className="valueTitle">Quality Service</div>
          </Col>
          <Col className="" lg={2}>
            <div className="valueCol">
              <Image
                src={Integrity}
                alt="Patient First"
                className="patientImg"
                height={100}
                width={100}
                unoptimized={true}
              />
            </div>
            <div className="valueTitle">Integrity</div>
          </Col>
          <Col className="" lg={2}>
            <div className="valueCol">
              <Image
                src={TeamWork}
                alt="Patient First"
                className="patientImg"
                height={100}
                width={100}
                unoptimized={true}
              />
            </div>
            <div className="valueTitle">Team Work</div>
          </Col>
          <Col className="" lg={2}>
            <div className="valueCol">
              <Image
                src={StriveforInnovation}
                alt="Patient First"
                className="patientImg"
                height={100}
                width={100}
                unoptimized={true}
              />
            </div>
            <div className="valueTitle">Strive for Innovation</div>
          </Col>
          <Col className="" lg={2}>
            <div className="valueCol">
              <Image
                src={ContinuousLearning}
                alt="Patient First"
                className="patientImg"
                height={100}
                width={100}
                unoptimized={true}
              />
            </div>
            <div className="valueTitle">Continuous Learning</div>
          </Col>
        </Row>
      </Container>

      <div className="ourSpecialist">
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col lg={6}>
              <div>
                <Image
                  src={SpecialistImg}
                  alt="img"
                  height={500}
                  width={500}
                  unoptimized={true}
                  className="specialistImg"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="speciallistTitle">Looking For A Doctor?</div>
              <h3 class="h3-md sepeciallistSubTitle">Our Specialist</h3>
              <p style={{ color: "#fff" }}>
                Dr. Pragnesh Bharpoda is a renowned Urologist and Transplant
                Surgeon from Vadodara with expertise in Laparoscopic Urology
                with Minimal Invasive Surgery. Dr. Bharapoda has extensive
                experience in Laparoscopic Urology with Minimum Invasive
                Surgery. He now heads Gujarat Superspeciality Hospital.
              </p>
              <div className="stores-badge mt-30">
                <a
                  target="_self"
                  href="#"
                  title="Know More"
                  className="btn btn-tra-white default-hover store btn-type-light"
                >
                  <span>Know More</span>
                </a>
                <a
                  target="_self"
                  href="#"
                  title="Make an Appointment"
                  className="btn btn-tra-white default-hover store btn-type-light"
                >
                  <span>Make an Appointment</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="amenitiesDiv">
        <Container>
          <h3
            style={{
              textAlign: "center",
              color: "#393185",
              fontSize: "45px",
              fontWeight: "700",
              marginBottom: "40px",
            }}
          >
            Amenities
          </h3>
          <Row>
            <Col lg={4}>
              <div className="amenitiesCard">
                <div className="amenitiesImgDiv">
                  <a href="#">
                    <Image
                      alt="img"
                      src={ICU}
                      height={80}
                      width={100}
                      unoptimized={true}
                      className="amenitiesImg"
                    />
                  </a>
                </div>
                <div className="anmitiesTitle">Intensive Care Unit (ICU)</div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="amenitiesCard">
                <div className="amenitiesImgDiv">
                  <a href="#">
                    <Image
                      alt="img"
                      src={Counselling}
                      height={80}
                      width={100}
                      unoptimized={true}
                      className="amenitiesImg"
                    />
                  </a>
                </div>
                <div className="anmitiesTitle">Patient Counselling Areas</div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="amenitiesCard">
                <div className="amenitiesImgDiv">
                  <a href="#">
                    <Image
                      alt="img"
                      src={Rooms}
                      height={80}
                      width={100}
                      unoptimized={true}
                      className="amenitiesImg"
                    />
                  </a>
                </div>
                <div className="anmitiesTitle">Rooms</div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="amenitiesCard">
                <div className="amenitiesImgDiv">
                  <a href="#">
                    <Image
                      alt="img"
                      src={OperationTheatre}
                      height={80}
                      width={100}
                      unoptimized={true}
                      className="amenitiesImg"
                    />
                  </a>
                </div>
                <div className="anmitiesTitle">Operation Theatre</div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="amenitiesCard">
                <div className="amenitiesImgDiv">
                  <a href="#">
                    <Image
                      alt="img"
                      src={DialysisCenter}
                      height={80}
                      width={100}
                      unoptimized={true}
                      className="amenitiesImg"
                    />
                  </a>
                </div>
                <div className="anmitiesTitle">Dialysis Center</div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="amenitiesCard">
                <div className="amenitiesImgDiv">
                  <a href="#">
                    <Image
                      alt="img"
                      src={EquipmentFacilities}
                      height={80}
                      width={100}
                      unoptimized={true}
                      className="amenitiesImg"
                    />
                  </a>
                </div>
                <div className="anmitiesTitle">Equipment and Facilities</div>
              </div>
            </Col>
            <div className="animetiesDiv">
              <Link className="animetiesLink" href="#">
              View all Amenities  <FaArrowRight />
              </Link>
            </div>
          </Row>
        </Container>
      </div>
<div id="about-5" className="bg-lightgrey  about-section   pt-100  "><div className="container" /></div>

    </React.Fragment>
  );
};

export default pages;
