import React from "react";
import "./Footer.css";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      {/* For Mobile Screen code */}
      {isMobile ? (
        <footer className="Footer mt-5 container-fluid text-center text-lg-start text-light bg-dark">
          <div>
            <section>
              <div className="row">
                <div className="Company col-md-5 col-lg-5 col-xl-5 mx-auto mt-5">
                  <h6
                    className="mb-4 font-weight-bold"
                    style={{
                      fontSize: "2rem",
                    }}
                  >
                    AHMAD KHALIL
                  </h6>
                  <p>
                    Our goal is to provide you with a comfortable
                    <br /> environment and the best rooms.
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className=" About-Company col-md-2 col-lg-1 col-xl-2 mt-5">
                    <h6
                      className="mb-4 font-weight-bold"
                      style={{ color: "white", fontWeight: "bolder" }}
                    >
                      About
                    </h6>
                    <p>
                      <a>How it works</a>
                    </p>
                    <p>
                      <a>Featured</a>
                    </p>
                    <p>
                      <a>Partnership</a>
                    </p>
                    <p>
                      <a>Business Relation</a>
                    </p>
                  </div>

                  <div className="Social col-md-2 col-lg-2 col-xl-2 mt-5">
                    <h6
                      className="mb-4 font-weight-bold "
                      style={{ color: "white", fontWeight: "bolder" }}
                    >
                      Social
                    </h6>
                    <p>
                      <a>Discord</a>
                    </p>
                    <p>
                      <a>Instagram</a>
                    </p>
                    <p>
                      <a>Twitter</a>
                    </p>
                    <p>
                      <a>Facebook</a>
                    </p>
                  </div>
                </div>

                <div className="Community col-md-2 col-lg-2 col-xl-2 mt-5">
                  <h6
                    className="mb-4 font-weight-bold"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Community
                  </h6>
                  <p>
                    <a>Events</a>
                  </p>
                  <p>
                    <a>Blog</a>
                  </p>
                  <p>
                    <a>Podcast</a>
                  </p>
                  <p>
                    <a>Invite a friend</a>
                  </p>
                </div>
              </div>
            </section>

            <div className="m-3">
              <hr />
            </div>

            <section className="pt-0">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                  <div className="col-md-7 col-lg-8 text-center text-md-start order-2 order-md-1">
                    <div
                      id="copy"
                      className="CopyRight mx-1"
                      style={{ fontSize: "0.9rem", color: "white" }}
                    >
                      &copy;2022 Ahmad Khalil. All rights reserved
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-4 mt-3 mt-md-0 order-1 order-md-2">
                    <div
                      id="foot-end"
                      className="Foot-end d-flex justify-content-md-end"
                      style={{ fontSize: "0.9rem", color: "white" }}
                    >
                      <div className="mx-5">Privacy & Policy</div>
                      <div>Terms & Conditions</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </footer>
      ) : (
        /* For Large Screen Code */
        <footer className="Footer mt-5 container-fluid text-center text-lg-start text-light bg-dark">
          <div>
            <section>
              <div className="row">
                <div className="Company col-md-5 col-lg-5 col-xl-5 mx-auto mt-5">
                  <h6
                    className="mb-4 font-weight-bold"
                    style={{
                      fontSize: "2rem",
                    }}
                  >
                    AHMAD KHALIL
                  </h6>
                  <p>
                    Our goal is to provide you with a comfortable
                    <br /> environment and the best rooms.
                  </p>
                </div>

                <div className=" About-Company col-md-2 col-lg-1 col-xl-2 mt-5">
                  <h6
                    className="mb-4 font-weight-bold text-light"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    About
                  </h6>
                  <p>
                    <a>How it works</a>
                  </p>
                  <p>
                    <a>Featured</a>
                  </p>
                  <p>
                    <a>Partnership</a>
                  </p>
                  <p>
                    <a>Business Relation</a>
                  </p>
                </div>

                <div className="Community col-md-2 col-lg-2 col-xl-2 mt-5">
                  <h6
                    className="mb-4 font-weight-bold "
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Community
                  </h6>
                  <p>
                    <a>Events</a>
                  </p>
                  <p>
                    <a>Blog</a>
                  </p>
                  <p>
                    <a>Podcast</a>
                  </p>
                  <p>
                    <a>Invite a friend</a>
                  </p>
                </div>

                <div className="Social col-md-2 col-lg-2 col-xl-2 mt-5">
                  <h6
                    className="mb-4 font-weight-bold"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Social
                  </h6>
                  <p>
                    <a>Discord</a>
                  </p>
                  <p>
                    <a>Instagram</a>
                  </p>
                  <p>
                    <a>Twitter</a>
                  </p>
                  <p>
                    <a>Facebook</a>
                  </p>
                </div>
              </div>
            </section>

            <div className="m-3">
              <hr />
            </div>

            <section className="pt-0">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                  <div className="col-md-7 col-lg-8 text-center text-md-start order-2 order-md-1">
                    <div
                      id="copy"
                      className="CopyRight mx-3"
                      style={{ fontSize: "0.9rem", color: "white" }}
                    >
                      &copy;2023 Ahmad Khalil. All rights reserved
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-4 mt-3 mt-md-0 order-1 order-md-2">
                    <div
                      id="foot-end"
                      className="Foot-end d-flex justify-content-md-end"
                      style={{ fontSize: "0.9rem", color: "white" }}
                    >
                      <div className="mx-5">Privacy & Policy</div>
                      <div>Terms & Conditions</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
