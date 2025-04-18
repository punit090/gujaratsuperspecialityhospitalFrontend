import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const page = () => {
  return (
    <React.Fragment>
      <div
        className="pt-100 pb-40 carerMainDiv"
        style={{ backgroundColor: "transparent" }}
      >
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col lg={7}>
              <div className="vc_column-inner">
                <div className="wpb_wrapper ">
                  <div className="m-bottom-10  hero-txt">
                    <h3
                      className="steelblue-color-color h3-md none"
                      style={{ fontWeight: "700" }}
                    >
                      Interested in changing the future of healthcare?
                    </h3>
                  </div>
                  <div className="m-bottom-20  hero-txt">
                    <h2
                      className="steelblue-color-color h2-md none"
                      style={{ fontSize: "2.8rem", fontWeight: "900" }}
                    >
                      Let’s connect!
                    </h2>
                    <p className="p-md" style={{ margin: "0px" }}>
                      Apply for the below-mentioned responsibilities.
                    </p>
                    <ul className="box-lists single-column-list">
                      <li>
                        <div className="box-list m-top-15">
                          <div className="box-list-icon">
                            <i className="fas fa-genderless" />
                          </div>
                          <p>Administrative Staff</p>
                        </div>
                      </li>
                      <li>
                        <div className="box-list m-top-15">
                          <div className="box-list-icon">
                            <i className="fas fa-genderless" />
                          </div>
                          <p>Medical Professionals</p>
                        </div>
                      </li>
                      <li>
                        <div className="box-list m-top-15">
                          <div className="box-list-icon">
                            <i className="fas fa-genderless" />
                          </div>
                          <p>Paramedical Staff</p>
                        </div>
                      </li>
                      <li>
                        <div className="box-list m-top-15">
                          <div className="box-list-icon">
                            <i className="fas fa-genderless" />
                          </div>
                          <p>Support Service Department</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="m-bottom-40  hero-txt">
                    <p className="p-md">
                      If you feel you can join our team in any other way, then
                      feel free to send us your resume by using the form.
                    </p>
                    <ul className="box-lists single-column-list" />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="vc_column-inner vc_custom_1651646042565">
                <div className="formCard">
                  <h3
                    style={{
                      color: "#393185",
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontWeight: "700",
                    }}
                  >
                    Apply Now
                  </h3>
                  <form>
                    <div>
                      <input
                        className="inputFiled"
                        type="text"
                        placeholder="Name*"
                      />
                    </div>
                    <div className="carerDiv">
                      <div>
                        <input
                          className="inputFiled"
                          type="email"
                          placeholder="email*"
                        />
                      </div>
                      <div>
                        <input
                          className="inputFiled"
                          type="text"
                          placeholder="Phone*"
                        />
                      </div>
                    </div>
                    <div>
                      <select
                        className="form-control inputFiled "
                        name="choose-location"
                        required
                      >
                        <option value="">Choose Location</option>
                        <option value="Godhra">Godhra</option>
                        <option value="Vadodara">Vadodara</option>
                      </select>
                    </div>
                    <div>
                      <label>[group location-godhra clear_on_hide]</label>
                      <select
                        className="form-control inputFiled"
                        name="select-job-role"
                        required
                      >
                        <option value="">Select Job Role</option>

                        <option value="Tite 2">Tite 2</option>
                        <option value="Title3">Title3</option>
                      </select>
                    </div>
                    <div className="groupDiv">
                      <label>[/group]</label>
                    </div>
                    <div>
                      <label>[group location-vadodara clear_on_hide]</label>
                      <select
                        className="form-control inputFiled"
                        name="select-Job-roll"
                        required
                      >
                        <option value="">Select Job Role</option>
                        <option value="Tite 2">Tite 2</option>
                        <option value="Title3">Title3</option>
                      </select>
                    </div>
                    <div className="groupDiv">
                      <label>[/group]</label>
                    </div>
                    <div className="groupDiv">
                      <label>[/group]</label>
                    </div>
                    <div>
                      <label>
                        Upload Resume <br />
                        (Max 5 MB; PDF, DOC, DOCX only)
                      </label>
                      <input
                        className="form-control fileinput inputFiled"
                        type="file"
                        name="fileresume"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </div>
                    <div>
                      <button className="submitBtn">Send Application</button>
                    </div>
                  </form>
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
