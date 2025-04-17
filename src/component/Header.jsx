"use client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import Logo from "../assets/img/logo.svg";
import Link from "next/link";
import Hospital from "../assets/img/HospitalIcon.png";
import clock from "../assets/img/clock.png";
import Image from "next/image";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 150); // Adjust 150 to whatever scroll offset works best
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <React.Fragment>
      <div>
        <div className="hero-widget clearfix">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-5 col-xl-6">
                <a
                  href="/"
                  className="site-logo logo-black"
                  rel="home"
                >
                  <Image
                    src={Logo}
                    width={301}
                    height={100}
                    alt="Gujarat Superspeciality Hospital Vadodara"
                    className="logoImg"
                    unoptimized={true}
                  />
                </a>
              </div>
              <div className="col-md-7 col-xl-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="header-widget icon-xs">
                      <span className="flaticon-021-hospital-9 primary-color" />
                      <div className="header-widget-txt clockIconDIv">
                      <div class="flaticon-021-hospital-9 ">
                            <Image
                              height={30}
                              width={30}
                              src={Hospital}
                              alt="icon"
                              unoptimized={true}
                              className="hospitalIcon"
                            />
                          </div>{" "}    
                          <div>
                        <p className="txt-400">
                          
                          Nr Jetalpur Bridge, Jetalpur Road,{" "}
                        </p>
                        <p className="lightgrey-color">
                          Vadodara, Gujarat, 390020
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="header-widget icon-xs">
                      <span className="flaticon-092-clock primary-color" />
                      <div className="header-widget-txt clockIconDIv">
                        <div>
                        <Image
                          height={30}
                          width={30}
                          src={clock}
                          alt="icon"
                          unoptimized={true}
                           className="hospitalIcon"
                        />
                        </div>
                        <div>
                        <p className="txt-400">Hours - 24 x 7 </p>
                        <p className="lightgrey-color">365 days a year</p>{" "}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>{" "}
              {/* END WIDGETS */}
            </div>
          </div>
          <div className={`wsmainfull ${isSticky ? "sticky" : ""}`}>
            <Container>
              <div className="headerMainDiv">
                <div className="dropdown">
                  <Link href="#" className={`dropbtn ${isSticky ? "sticky" : ""}`}>
                    About <FaCaretDown />
                  </Link>
                  <div className="dropdown-content">
                    <a href="/AboutUs">About Us</a>
                    <a href="/Amenities">Amenities</a>
                  </div>
                </div>
                <div className="dropdown">
                  <Link href="#" className={`dropbtn ${isSticky ? "sticky" : ""}`}>
                    Our Hospital
                  </Link>
                </div>
                <div className="dropdown">
                  <Link href="#" className={`dropbtn ${isSticky ? "sticky" : ""}`}>
                    Center of Excellence <FaCaretDown />
                  </Link>
                  <div className="dropdown-content">
                    <a href="/ComanInerPages">Urology</a>
                    <a href="#">Nephrology</a>
                    <a href="#">Cardiology</a>
                    <a href="#">Orthopedics & Joint Replacement</a>
                    <a href="#">Trauma Care Centre</a>
                    <a href="#">Neurology</a>
                    <a href="#">Neurosurgery</a>
                    <a href="#">General & Laparoscopic Surgery</a>
                    <a href="#">Obstetrics and Gynecology</a>
                    <a href="#">Gastroenterology</a>
                    <a href="#">Renal Transplant</a>
                    <a href="#">Bariatric and Metabolic Surgery</a>
                    <a href="#">Physiotherapy</a>
                    <a href="#">Vascular Surgery</a>
                    <a href="#">Spine Clinic</a>
                  </div>
                </div>
                <div className="dropdown">
                  <Link href="#" className={`dropbtn ${isSticky ? "sticky" : ""}`}>
                    Treatments <FaCaretDown />
                  </Link>
                  <div className="dropdown-content">
                    <a href="/ComanInerPages">Hernia</a>
                    <a href="#">Enlarged Prostate</a>
                    <a href="#">Kidney Stone</a>
                    <a href="#">Kidney Transplant</a>
                    <a href="#">Urine stone</a>
                    <a href="#">Hepatitis A, B and C</a>
                    <a href="#">Liver Cirrhosis</a>
                    <a href="#">Hepatobiliary</a>
                    <a href="#">Joint Replacement</a>
                    <a href="#">Oncology</a>
                    <a href="#">Nutrition & Dietetics</a>
                    <a href="#">Preventive Health Check-ups</a>
                  </div>
                </div>
                <div className="dropdown">
                  <Link href="#" className={`dropbtn ${isSticky ? "sticky" : ""}`}>
                    Patient Corner <FaCaretDown />
                  </Link>
                  <div className="dropdown-content">
                    <a href="/GeneralInformation">General-Information</a>
                    <a href="#">Blogs / Events</a>
                    <a href="#">Videos</a>
                    <a href="#">Testimonials</a>
                  </div>
                </div>
                <div className="dropdown">
                  <Link href="#" className={`dropbtn ${isSticky ? "sticky" : ""}`}>
                    Locations <FaCaretDown />
                  </Link>
                  <div className="dropdown-content">
                    <a href="#">Vadodara</a>
                    <a href="#">Godhra</a>
                  </div>
                </div>
                <div className="dropdown">
                  <Link href="/career" className={`dropbtn ${isSticky ? "sticky" : ""}`}>
                    Career
                  </Link>
                </div>
                <div className="dropdown">
                  <Link href="#" className={`dropbtn ${isSticky ? "sticky" : ""}`}>
                    Investor Relations <FaCaretDown />
                  </Link>
                  <div className="dropdown-content">
                    <a href="#">Our management</a>
                    <a href="#">Initial Public offer (Ipo)</a>
                    <a href="#">Annual Reports</a>
                    <a href="#">Policies & Programmes</a>
                    <a href="#">Investor Grievance</a>
                    <a href="#">Board Comittee</a>
                    <a href="#">Financial Results</a>
                    <a href="#">Shareholding Pattern</a>
                    <a href="#">Industry Report</a>
                    <a href="#">Group Entity</a>
                    <a href="#">e- voting/poll results</a>
                    <a href="#">Nodal officer</a>
                    <a href="#">Closure of trading windows</a>
                    <a href="#">
                      Announcements / Intimation to stock exchanges
                    </a>
                    <a href="#">Notices</a>
                    <a href="#">Other</a>
                  </div>
                </div>
                <div>
                  <Link className={`appointemntLink ${isSticky ? "sticky" : ""}`} href="#">
                    Appointment
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
