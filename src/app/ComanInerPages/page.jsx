import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InerBanner from "@/assets/img/urology-bnr.jpg";

const page = () => {
  return (
    <React.Fragment>
      <Breadcrumb Title="Urology" />
      <Container>
        <Row className="pt-100">
          <Col lg={8}>
            <div>
              <Image
                className="inerBannerImg"
                height={500}
                width={500}
                src={InerBanner}
                unoptimized={true}
              />
            </div>
            <div className="vc_column-inner">
              <div className="wpb_wrapper ">
                <div className="content-txt txt-block">
               <h1 className="steelblue-color-color innerTitle h1-md none">Urology treatment in Vadodara</h1>

                  <p>
                    The
                    <a
                      style={{ margin: "10px" }}
                      href="https://www.gujaratsuperspecialityhospital.com/urology-hospital-in-vadodara-gujarat/"
                    >
                      <strong>Department of Urology</strong>
                    </a>
                    at
                    <a
                      style={{ margin: "10px" }}
                      href="https://www.gujaratsuperspecialityhospital.com/"
                    >
                      <strong>Gujarat Superspeciality Hospital</strong>
                    </a>
                    offers the best facilities for the diagnosis and treatment
                    of genitourinary problems in adults and children.
                  </p>
                  <p>
                    A highly qualified and experienced team of dedicated
                    <a
                      style={{ margin: "10px" }}
                      href="https://www.gujaratsuperspecialityhospital.com/about-us/"
                    >
                      <strong>urologists</strong>
                    </a>
                    and resident surgeons are available 24 hours a day. The
                    latest state-of-the-art technology and equipment are
                    available.
                  </p>
                  <div className />
                </div>
                <div className="content-txt txt-block">
                  <h5 className="steelblue-color-color h5-md none">Services</h5>
                  <div className />
                </div>
                <div className="content-txt txt-block">
                  <h5 className="steelblue-color-color h5-md none">
                    1. Endourology
                  </h5>
                  <p>
                    Endoscopic treatment of stones and diseases of the kidney,
                    ureter, bladder, prostate and urethra.
                  </p>
                  <div className />
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <ul>
                      <li>Percutaneous nephrolithotomy PCNL</li>
                      <li>Retrograde Intrarenal Surgery (RIRS)</li>
                      <li>Ureteroscopy</li>
                      <li>Flexible ureteroscopy and laser lithotripsy</li>
                      <li>Transurethral Resection of the Prostate (TURP)</li>
                      <li>Transurethral Resection of Bladder Tumour (TURBT)</li>
                      <li>Endopyelotomy and retrograde endopyelotomy</li>
                    </ul>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="content-txt txt-block">
                  <h5 className="steelblue-color-color h5-md none">
                    2. Laparoscopic Urology
                  </h5>
                  <p>
                    Key - hole surgery to remove and reconstruct urinary organs
                    avoiding pain and long bed rest associated with open
                    surgery.
                  </p>
                  <div className />
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        <ul>
                          <li>
                            Laparoscopic and retroperitoneoscopic adrenalectomy
                          </li>
                          <li>
                            Laparoscopic and retroperitoneoscopic nephrectomy
                            and radical nephrectomy, laparoscopic nephron
                            sparing surgeries
                          </li>
                          <li>Laparoscopic pyeloplasty</li>
                          <li>Laparoscopic radical prostatectomy</li>
                          <li>Laparoscopic donor nephrectomy</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="content-txt txt-block">
                  <h5 className="steelblue-color-color h5-md none">
                    3. Urological Oncology
                  </h5>
                  <p>
                    The
                    <a
                      style={{ margin: "10px" }}
                      href="https://www.gujaratsuperspecialityhospital.com/dr-pragnesh-bharpoda/"
                    >
                      <strong>Department of Urology</strong>
                    </a>
                    has a separate division for
                    <a
                      style={{ margin: "10px" }}
                      href="https://www.gujaratsuperspecialityhospital.com/dr-mihir-pandya/"
                    >
                      <strong>urological malignancies</strong>
                    </a>
                    . The
                    <a
                      style={{ margin: "10px" }}
                      href="https://www.gujaratsuperspecialityhospital.com/laparoscopic-surgery-for-kidney-cancer-bladder-cancer-and-prostate-cancer/"
                    >
                      <strong>
                        cancers of kidney, bladder, prostate, ureters, adrenals,
                        testis and penis
                      </strong>
                    </a>
                    are taken care of by this section.
                  </p>
                  <div className />
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <p>Prostate Cancer</p>
                    <ul style={{ marginBottom: 20 }}>
                      <li>Open and laparoscopic radical prostatectomy</li>
                      <li>Hormonal treatment</li>
                      <li>Chemotherapy</li>
                      <li>Radioisotope treatment</li>
                    </ul>
                    <p>Kidney Tumors</p>
                    <ul style={{ marginBottom: 20 }}>
                      <li>Radical nephrectomy: open and laparoscopic</li>
                      <li>Nephron sparing surgeries: open and laparoscopic</li>
                      <li>Radiofrequency Ablation (RFA)</li>
                      <li>Immunotherapy</li>
                    </ul>
                    <p>Testicular Tumors</p>
                    <ul style={{ marginBottom: 20 }}>
                      <li>Inguinal orchiectomy</li>
                      <li>Retroperitoneal lymph node dissection</li>
                      <li>Chemotherapy and radiotherapy</li>
                    </ul>
                    <p>Bladder Cancer</p>
                    <ul style={{ marginBottom: 20 }}>
                      <li>Radical cystectomy and conduit</li>
                      <li>Orthotopic neobladder</li>
                      <li>Bladder preservation</li>
                    </ul>
                    <p>Penile Cancer</p>
                    <p>
                      The
                      <a
                        href="https://www.gujaratsuperspecialityhospital.com/best-urology-hospital-in-vadodara/"
                        target="_blank"
                        rel="noopener"
                        style={{ margin: "10px" }}
                      >
                        <strong>
                          laparoscopic surgery has changed the surgical concept
                          in Uro-oncology
                        </strong>
                      </a>
                      . Most of the open surgeries like radical nephrectomy,
                      nephro ureterectomy, radical prostatectomy and radical
                      cystectomy are now done more and more with minimum
                      morbidity and early return to work.
                    </p>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="content-txt txt-block">
                  <h5 className="steelblue-color-color h5-md none">
                    4. Pediatric Urology
                  </h5>
                  <p>
                    Expertise for the surgical reconstruction of congenital
                    defects of the urinary tract either by open surgery or
                    laparoscopy is available.
                  </p>
                  <div className />
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        <ul>
                          <li>Pediatric pyeloplasty: Lap/open</li>
                          <li>Pediatric adrenalectomy: Lap/open</li>
                          <li>PUV fulguration</li>
                          <li>
                            Ureteric reimplantation: (Lap/open) and STING
                            surgery
                          </li>
                          <li>Hypospadias repair</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="content-txt txt-block">
                  <h5 className="steelblue-color-color h5-md none">
                    5. Female Urology
                  </h5>
                  <p>
                    Treatment of women with incontinence of urine and management
                    of urinary problems in patients.
                  </p>
                  <div className />
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        <ul>
                          <li>TVT (TransVaginal Tape)</li>
                          <li>TOT (TransObturator Tape)</li>
                          <li>
                            Reconstructive surgery for Vesicovaginal fistula
                            (VVF)
                          </li>
                          <li>Ureterovaginal fistula (UVF).</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="content-txt txt-block">
                  <h5 className="steelblue-color-color h5-md none">
                    6. Andrology
                  </h5>
                  <p>
                    Evaluation methods for erectile dysfunction including
                    pharmacy cavernosometry, pharmaco cavernosography and
                    procedures like penile implantation surgery are done
                    regularly.
                  </p>
                  <div className />
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        <ul>
                          <li>Pharmaco cavernosography and cavernosometry</li>
                          <li>Penile prosthesis implantation</li>
                          <li>Penile vascular reconstruction</li>
                          <li>Surgeries for Peyronie’s Disease</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="content-txt txt-block">
                  <h5 className="steelblue-color-color h5-md none">
                    7. General Urology
                  </h5>
                  <p>
                    Stones in the kidney, ureter, bladder, common diseases of
                    the urethra (stricture), prostate (cancer, enlargement) and
                    bladder are routinely treated. All the advanced treatment
                    options for stones in the kidney and other parts of the
                    urinary tract are available.
                  </p>
                  <div className />
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="content-txt txt-block">
                  <h5 className="steelblue-color-color h5-md none">
                    8. Robotic Surgery in Urology
                  </h5>
                  <p>
                    In traditional open surgery, a large incision, up to eight
                    inches, might be required in order for the surgery to be
                    performed. However, when Robotic Surgery is performed, the
                    size of the incisions is much smaller and it is a minimally
                    invasive procedure.
                  </p>
                  <div className />
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <ul>
                      <li>Robotic Radical Prostatectomy</li>
                      <li>Robotic Radical Nephrectomy</li>
                      <li>Robotic Partial Nephrectomy</li>
                      <li>Robotic Cystoprostatectomy</li>
                      <li>Robotic Pyeloplasty</li>
                      <li>Robotic Ureteric Reimplantation</li>
                      <li>Robotic VVF Repair</li>
                      <li>Robotic Boari Flap</li>
                      <li>Robotic Partial Cystectomy</li>
                    </ul>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="content-txt txt-block">
                  <p>
                    The outpatient
                    <a
                      style={{ margin: "10px" }}
                      href="https://www.gujaratsuperspecialityhospital.com/best-uro-care-hospital-in-vadodara-gujarat-kidney-superspeciality-hospital/"
                    >
                      <strong>urology department</strong>
                    </a>
                    has facilities to take care of all office
                    <a
                      style={{ margin: "10px" }}
                      href="https://www.gujaratsuperspecialityhospital.com/when-should-you-visit-a-urologist/"
                    >
                      <strong>urology procedures</strong>
                    </a>
                    . It is supported by trained staff including two staff
                    nurses, blood draw facilities, full-fledged procedure rooms,
                    dedicated X-ray machines, ultrasound equipment, etc.
                  </p>
                  <p>
                    The Versius system is the most used robotic system in the
                    world, it is a sophisticated tool to help surgeons deliver
                    the highest quality surgical care to patients.
                  </p>
                  <p>
                    We at Gujarat Superspeciality Hospital, believe that our
                    patients should be receiving the highest quality care and
                    treatments at the right time. By introducing Robotic Surgery
                    for the first time in Vadodara, we aim to provide robotics
                    as a solution to bringing minimal access surgery to more
                    people.
                  </p>
                  <div className />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div id="sidebar" className="p-left-30">
              <div
                id="custom_html-2"
                className="widget_text widget-odd widget-first widget-1 sidebar-div single-widget b-bottom pb-50 mb-50 widget_custom_html"
              >
                <h5 className="h5-sm widget-title">Departments</h5>
                <div className="textwidget custom-html-widget">
                  <div className="vc_tta-tabs-container">
                    <ul className="dept_treatment_list">
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/urology/">
                          <span className="vc_tta-title-text">Urology</span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/cardiac-care/">
                          <span className="vc_tta-title-text">Cardiology</span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/trauma-care-center/">
                          <span className="vc_tta-title-text">
                            Trauma Care Center
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/neurology/">
                          <span className="vc_tta-title-text">Neurology</span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/neurosurgery/">
                          <span className="vc_tta-title-text">
                            Neuro Surgery
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/laparoscopic-surgery/">
                          <span className="vc_tta-title-text">
                            General &amp; Laparoscopic Surgery
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/gastroenterology/">
                          <span className="vc_tta-title-text">
                            Gastroenterology
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/kidney-transplant-hospital-in-vadodara-gujarat/">
                          <span className="vc_tta-title-text">
                            Kidney Transplant
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/bariatric-and-metabolic-surgery/">
                          <span className="vc_tta-title-text">
                            Bariatric and Metabolic Surgery
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/physiotherapy/">
                          <span className="vc_tta-title-text">
                            Physiotherapy
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/vascular-surgery/">
                          <span className="vc_tta-title-text">
                            Vascular Surgery
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/spine-clinic/">
                          <span className="vc_tta-title-text">
                            Spine Clinic
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="custom_html-3"
                className="widget_text widget-even widget-last widget-2 sidebar-div single-widget b-bottom pb-50 mb-50 widget_custom_html"
              >
                <h5 className="h5-sm widget-title">Treatments</h5>
                <div className="textwidget custom-html-widget">
                  <div className="vc_tta-tabs-container">
                    <ul className="dept_treatment_list">
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/hernia/">
                          <span className="vc_tta-title-text">Hernia</span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/enlarged-prostate/">
                          <span className="vc_tta-title-text">
                            Enlarged Prostrate
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/kidney-stone/">
                          <span className="vc_tta-title-text">
                            Kidney Stone
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/ureteric-stone/">
                          <span className="vc_tta-title-text">
                            Ureteric Stone
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/hepatitis-a-b-and-c/">
                          <span className="vc_tta-title-text">
                            Hepatitis A,B and C
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/liver-cirrhosis/">
                          <span className="vc_tta-title-text">
                            Liver Cirrhosis
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/joint-replacement/">
                          <span className="vc_tta-title-text">
                            Joint Replacement
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/oncology/">
                          <span className="vc_tta-title-text">Oncology</span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/nutrition-dietetics/">
                          <span className="vc_tta-title-text">
                            Nutrition &amp; Dietetics
                          </span>
                        </a>
                      </li>
                      <li className="dept_treatment_listitem">
                        <a href="https://www.gujaratsuperspecialityhospital.com/preventive-health-check-ups/">
                          <span className="vc_tta-title-text">
                            Preventive Health Check-ups
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default page;
