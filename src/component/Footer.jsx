import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare ,FaInstagram,FaYoutube,FaLinkedin} from "react-icons/fa";


const Footer = () => {
  return (
    <React.Fragment>
      <div className="mainFooterDiv">
        <Container>
          <h3
            style={{
              color: "#393185",
              marginBottom: "40px",
              fontWeight: "700",
            }}
          >
            Locations
          </h3>

          <Row>
            <Col lg={4}>
              <div className="locationTitle">Vadodara</div>
              <p className="loactionDesc">New India Mill Compound,</p>
              <p className="loactionDesc">
                Nr. Jetalpur Bridge, Jetalpur Road,
                <br />
                Anand Nagar, Haripura,
                <br />
                Vadodara, Gujarat 390020
              </p>
              <div className="loactionDesc">Phone: +91 9687079991</div>
              <p className="loactionDesc">Phone: +91 8849448102</p>
              <p className="loactionDesc">
                Email: frontdesk@gujaratsuperspecialityhospital.com
              </p>
              <div className="workingHourDiv">
                <div className="locationTitle">Working Hours</div>
                <p className="loactionDesc">Monday – Sunday</p>
                <p className="loactionDesc">24x7 services available</p>
                <div className="readMoreDiv">
                  <Link className="ReadMoreLink" href="#">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="locationTitle">Dahod</div>
              <p className="loactionDesc">
                Anita Uro Surgical Hospital & Trauma Care Center
              </p>
              <p className="loactionDesc">
                “Harshvardhan”
                <br />
                Opp. N. E. Jiruwala School
                <br />
                Station Road, Dahod - 389151
              </p>
              <div className="loactionDesc">Phone: 02673 - 221350</div>

              <div className="workingHourDiv">
                <div className="locationTitle">Working Hours</div>
                <p className="loactionDesc">Monday – Sunday</p>
                <p className="loactionDesc">24x7 services available</p>
                <div className="readMoreDiv">
                  <Link className="ReadMoreLink" href="#">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="locationTitle">Godhra</div>
              <p className="loactionDesc">Gujarat Multispeciality Hospital</p>
              <p className="loactionDesc">
                Opposite to I.O.C Petrol pump, Bamroli Road,
                <br />
                Godhra -389001
              </p>
              <div className="loactionDesc">Phone: +91 798 49 266 85</div>

              <div className="workingHourDiv">
                <div className="locationTitle">Working Hours</div>
                <p className="loactionDesc">Monday – Sunday</p>
                <p className="loactionDesc">24x7 services available</p>
                <div className="readMoreDiv">
                  <Link className="ReadMoreLink" href="#">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <div className="footerBottomDiv">
            <div>
            <Link href="#"><FaFacebookSquare className="shareIcon" /></Link>
            <Link href="#"><FaInstagram className="shareIcon" /></Link>
            <Link href="#"><FaYoutube className="shareIcon" /></Link>
            <Link href="#"><FaLinkedin className="shareIcon" /></Link>
            </div>
            <div className="copyrightDiv">
            © GUJARAT KIDNEY & SUPERSPECIALITYHOSPITAL. All Rights Reserved
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
