import Link from "next/link";
import React from "react";

export default function Services() {
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
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="sec-title mb_15">
                  {/* <span className="sub-title">About Us</span> */}
                  <h2>Florenza Italiya </h2>
                </div>
                <div className="text-box mb_40">
                  <p>
                    Apart from manufacturing for leading global labels, we
                    proudly own and operate Florenza Italiya, our signature
                    brand that embodies luxury, elegance, and modern
                    sophistication. 
                    <br />
                    Inspired by European perfumery traditions
                    and crafted with the finest ingredients, Florenza Italiya
                    offers a range of fragrances designed to captivate diverse
                    markets while reflecting our commitment to excellence.
                  </p>
             
               
                </div>
                {/* <div className="btn-box">
                  <Link href="/#" className="theme-btn btn-one"><span>Discover More</span></Link>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box">
                {/* <div className="shape float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div> */}
                <figure className="image">
                  <img src="/assets/images/gallery/img6.png" alt="" style={{ maxWidth: '350px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
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
        </div>
      </div>
    </section>
  );
}
