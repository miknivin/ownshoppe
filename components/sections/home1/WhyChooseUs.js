import Link from "next/link";
import React from "react";

export default function ChooseUs() {
  return (
    <section className="chooseus-section">
      <div
        className="bg-layer"
        style={{
          backgroundImage: "url(assets/images/background/chooseus-bg.png)",
        }}
      ></div>
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}
      ></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title light mb_50">
                {/* <span className="sub-title"></span> */}
                <h2>
                  Why Partner with JJ Perfumes International
                  <br />{" "}
                </h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check-to-slot"
                          className="svg-inline--fa fa-check-to-slot "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          width={70}
                        >
                          <path
                            fill="currentColor"
                            d="M96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 304L96 384 96 80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48l16 0 0 128 448 0 0-128 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96z"
                          />
                        </svg>
                      </div>
                      <h3 className=" fs-4">
                        Proven track record in global fragrance export markets.
                      </h3>
                      {/* <p>
                        Proven track record with high-profile global brands.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check-to-slot"
                          className="svg-inline--fa fa-check-to-slot "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          width={70}
                        >
                          <path
                            fill="currentColor"
                            d="M96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 304L96 384 96 80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48l16 0 0 128 448 0 0-128 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96z"
                          />
                        </svg>
                      </div>
                      <h3 className="fs-4">
                        Modern production lines with the latest manufacturing
                        technology.
                      </h3>
                      {/* <p>
                        Access to award-winning perfumers and fragrance experts.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check-to-slot"
                          className="svg-inline--fa fa-check-to-slot "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          width={70}
                        >
                          <path
                            fill="currentColor"
                            d="M96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 304L96 384 96 80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48l16 0 0 128 448 0 0-128 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96z"
                          />
                        </svg>
                      </div>
                      <h3 className="fs-4">
                        Ability to handle bulk international orders while
                        maintaining quality.
                      </h3>
                      {/* <p>
                        Confidential, white-label service ensuring brand
                        exclusivity.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check-to-slot"
                          className="svg-inline--fa fa-check-to-slot "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          width={70}
                        >
                          <path
                            fill="currentColor"
                            d="M96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 304L96 384 96 80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48l16 0 0 128 448 0 0-128 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96z"
                          />
                        </svg>
                      </div>
                      <h3 className="fs-4">
                        Strong supply chain and logistics expertise.
                      </h3>
                      {/* <p>
                        Scalable production to match boutique or large-volume
                        needs.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
