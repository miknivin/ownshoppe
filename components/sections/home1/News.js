"use client";

import React from "react";
import Link from "next/link";
export default function News() {
  return (
    <section className="news-section sec-pad bg-color-1">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <h2>
            Quality Standards <br />
            We Follow
          </h2>
        </div>
        <div className="row clearfix" style={{display: 'flex', flexWrap: 'wrap'}}>
          <style jsx>{`
            .inner-box {
              height: 100%;
              display: flex;
              flex-direction: column;
            }
            .image-box {
              height: 250px;
              overflow: hidden;
            }
            .image-box img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .lower-content {
              flex: 1;
              display: flex;
              flex-direction: column;
              padding: 25px;
            }
            .lower-content h3 {
              margin-bottom: 15px;
            }
            .lower-content p {
              flex: 1;
              margin-bottom: 0;
            }
            .news-block {
              margin-bottom: 30px;
              display: flex;
            }
            .news-block-one {
              height: 100%;
            }
          `}</style>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href="blog-details">
                    <img src="assets/images/news/news-16.jpg" alt="" />
                  </Link>
                </figure>
                <div className="lower-content">
                  {/* <ul className="post-info mb_15 clearfix">
                    <li><Link href="blog-details">Admin</Link></li>
                    <li>12 Jan 2022</li>
                    <li>03 Comt</li>
                  </ul> */}
                  <h3>
                    <Link href="blog-details">Development Quality</Link>
                  </h3>
                  <p>
                    We ensure every fragrance is developed with meticulous
                    attention to detail, blending the finest raw materials with
                    expert formulation techniques. Our R&D team focuses on
                    creating long-lasting, well-balanced scents that cater to
                    diverse global tastes
                  </p>
                  {/* <div className="link">
                    <Link href="blog-details"><span>Read More</span></Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href="blog-details">
                    <img src="assets/images/news/news-18.jpg" alt="" />
                  </Link>
                </figure>
                <div className="lower-content">
                  {/* <ul className="post-info mb_15 clearfix">
                    <li><Link href="blog-details">Admin</Link></li>
                    <li>11 Jan 2022</li>
                    <li>0 Comt</li>
                  </ul> */}
                  <h3>
                    <Link href="blog-details">Export Quality</Link>
                  </h3>
                  <p>
                    All our products meet international packaging and compliance
                    standards, ensuring they arrive in perfect condition and
                    maintain consistent performance in every market. Our
                    processes are built to satisfy the demands of high-end
                    international brands. like this pls give one more
                  </p>
                  {/* <div className="link">
                    <Link href="blog-details"><span>Read More</span></Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <figure className="image-box">
                  <Link href="blog-details">
                    <img src="assets/images/news/news-17.jpg" alt="" />
                  </Link>
                </figure>
                <div className="lower-content">
                  {/* <ul className="post-info mb_15 clearfix">
                    <li><Link href="blog-details">Admin</Link></li>
                    <li>11 Jan 2022</li>
                    <li>02 Comt</li>
                  </ul> */}
                  <h3>
                    <Link href="blog-details">Innovation Quality</Link>
                  </h3>
                  <p>
                    We continuously push the boundaries of fragrance creation
                    with cutting-edge research and innovative techniques. Our
                    R&D team explores new ingredients and trends to deliver
                    unique, trendsetting scents that captivate global markets
                  </p>
                  {/* <div className="link">
                    <Link href="blog-details"><span>Read More</span></Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
