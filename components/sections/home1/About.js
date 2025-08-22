import Link from 'next/link';
import React from 'react';

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
                <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
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
                  <h6>The Perfume House Behind the Brands You Love</h6>
                  <p>For over 10 years, JJ Perfumes has been the trusted name behind some of the world’s most prestigious perfume brands<br/>We combine French-inspired artistry, cutting-edge fragrance technology, and the world’s finest natural and synthetic ingredients to deliver scents that embody luxury.</p>
                  <ul className="list-style-one clearfix">
                    <li>Luxury Perfume Houses.</li>
                    <li>Fashion & Couture Brands</li>
                    <li>Boutique Perfume Labels.</li>
                    <li>Celebrity & Influencer Fragrance Lines</li>
                    <li>Hospitality & Lifestyle Brands</li>
               
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
};
