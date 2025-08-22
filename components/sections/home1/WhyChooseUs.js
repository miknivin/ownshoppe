import Link from 'next/link';
import React from 'react';

export default function ChooseUs() {
  return (
    <section className="chooseus-section">
      <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/chooseus-bg.jpg)' }}></div>
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title light mb_50">
                <span className="sub-title">Why Luxury Brands Choose Us</span>
                <h2>Our Expertise in Luxury Fragrance Creation<br /> </h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="fas fa-spray-can"></i></div>
                      <h3>Trusted Partnerships</h3>
                      <p>Proven track record with high-profile global brands.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="fas fa-flask"></i></div>
                      <h3>Expert Craftsmanship</h3>
                      <p>Access to award-winning perfumers and fragrance experts.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="fas fa-vial"></i></div>
                      <h3>Exclusive Service</h3>
                      <p>Confidential, white-label service ensuring brand exclusivity.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="fas fa-wine-bottle"></i></div>
                      <h3>Flexible Production</h3>
                      <p>Scalable production to match boutique or large-volume needs.</p>
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
};