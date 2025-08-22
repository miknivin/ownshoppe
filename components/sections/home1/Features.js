import Link from 'next/link';
import React from 'react';

export default function Feature() {
  return (
    <section className="feature-section pt_120 pb_90">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="fas fa-spray-can"></i></div>
                <h3><Link href="/">Perfume Concept & Briefing</Link></h3>
                <p>Defining your perfume's unique story and market positioning.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="fas fa-flask"></i></div>
                <h3><Link href="/">Fragrance Creation</Link></h3>
                <p>Collaborating with master perfumers to design your signature perfume.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="fas fa-vial"></i></div>
                <h3><Link href="/">Perfume Testing & Refinement</Link></h3>
                <p>Perfecting the scent and ensuring fragrance stability.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="fas fa-wine-bottle"></i></div>
                <h3><Link href="/">Perfume Manufacturing & Bottling</Link></h3>
                <p>Precision crafting of perfumes in our advanced facility.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="fas fa-shipping-fast"></i></div>
                <h3><Link href="/">Perfume Delivery & Launch Support</Link></h3>
                <p>Seamless global delivery for your perfume launch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};