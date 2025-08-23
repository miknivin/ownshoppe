import Link from "next/link";
import React from "react";

export default function about() {
  return (
    <section className="about-section pt_120 pb_120 bg-color-1">
      {/* <div className="pattern-layer">
        <div className="pattern-1 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
        <div className="pattern-2 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
        <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
        <div className="pattern-4" style={{ backgroundImage: 'url(assets/images/shape/shape-10.png)' }}></div>
        <div className="pattern-5" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
      </div> */}
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box">
                {/* <div className="shape float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div> */}
                <figure className="image">
                  <img src="assets/images/resource/about-1.jpg" alt="" />
                </figure>
                {/* <div className="icon-one"><i className="icon-13"></i></div>
                <div className="icon-two"><i className="icon-14"></i></div> */}
                {/* <div className="text-box">
                  <h3>Wade Warren</h3>
                  <span>Medical Assistant</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="sec-title mb_15">
                  {/* <span className="sub-title">About Us</span> */}
                  <h2>Who We Are</h2>
                </div>
                <div className="text-box mb_40">
                  <p>
                    Based in Cochin Special Economic Zone, India, JJ Perfumes
                    International is a trusted multi-brand perfume manufacturer
                    with a reputation for delivering unmatched quality and
                    creativity.
                    <br />
                    We operate with a modern manufacturing process, equipped
                    with state-of-the-art machinery, ensuring precision,
                    consistency, and efficiency in every product.
                  </p>
                  <h4 className="mb-4">
                    The Perfume House Behind the Brands You Love
                  </h4>
                  <ul className="list-style-one clearfix">
                    <li>High-end Perfumes & Eau de Parfum.</li>
                    <li>Upcoming: Body Sprays.</li>
                    <li>Upcoming: Room Fresheners & Car Fresheners.</li>
                  </ul>
                </div>
                {/* <div className="btn-box">
                  <Link href="/#" className="theme-btn btn-one"><span>Discover More</span></Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
