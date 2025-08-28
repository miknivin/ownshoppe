import Link from "next/link";
import React from "react";

export default function ChooseUs() {
  return (
    <section className="chooseus-section" style={{backgroundColor: '#fff'}}>
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
               
                  <h2 style={{color: '#060505'}}>
                    Why Partner with JJ Perfumes International
                    <br />{" "}
                  </h2>
              </div>
              <div className="row clearfix">
                <div className="col-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* Globe with arrows for global export */}
                        <svg width="70" height="70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" fill="#EEF2FF"/><path d="M24 8a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 0v8m0 16v8m8-16h8m-16 0H8m11.3-11.3l5.7 5.7m0 0l5.7-5.7m-5.7 5.7l-5.7 5.7m11.4 0l-5.7 5.7" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                      <h3 className=" fs-4">
                        Proven track record in global fragrance export markets.
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* Gear for modern production lines */}
                        <svg width="70" height="70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" fill="#ECFDF5"/><path d="M24 16v-4m0 24v-4m8-8h4m-24 0h4m13.66-6.34l2.83-2.83m-19.8 19.8l2.83-2.83m0-14.14l-2.83-2.83m19.8 19.8l-2.83-2.83M24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                      <h3 className="fs-4">
                        Modern production lines with the latest manufacturing
                        technology.
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* Ship for bulk international orders */}
                        <svg width="70" height="70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" fill="#FFFBEB"/><path d="M12 32l12-8 12 8M12 32v4a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-4M12 32l12-8 12 8" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 24v-8" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                      <h3 className="fs-4">
                        Ability to handle bulk international orders while
                        maintaining quality.
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        {/* Delivery box for logistics */}
                        <svg width="70" height="70" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" fill="#FEF2F2"/><rect x="14" y="18" width="20" height="14" rx="2" stroke="#ef4444" strokeWidth="2"/><path d="M14 18l10 7 10-7" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                      <h3 className="fs-4">
                        Strong supply chain and logistics expertise.
                      </h3>
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
