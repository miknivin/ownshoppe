
"use client";

import React from 'react';
import Link from "next/link";

export default function Team() {
  const teamMembers = [
    { name: 'Concept & Briefing', role: 'Understanding your brand DNA and market positioning', image: 'assets/images/team/team-1.jpg', icon: 'fas fa-spray-can' },
    { name: 'Fragrance Creation', role: 'Working with master perfumers to craft your signature scent', image: 'assets/images/team/team-2.jpg', icon: 'fas fa-flask' },
    { name: 'Testing & Refinement', role: 'Ensuring olfactory perfection and product stability', image: 'assets/images/team/team-3.jpg', icon: 'fas fa-vial' },
    { name: 'Manufacturing & Bottling', role: 'Precision production in our state-of-the-art facility', image: 'assets/images/team/team-4.jpg', icon: 'fas fa-wine-bottle' },
    { name: 'Packaging & Delivery', role: 'Designing elegant packaging and ensuring global delivery', image: 'assets/images/team/team-5.jpg', icon: 'fas fa-box-open' },
  ];

  return (
    <section className="team-section sec-pad centred">
      <style jsx>{`
        .team-section {
          background: #f9f9f9;
          padding: 60px 0;
        }
        .team-block {
          display: flex;
          align-items: stretch;
          margin-bottom: 30px;
        }
        .team-block-one {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        .team-block-one:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        }
        .image-box {
          position: relative;
          overflow: hidden;
        }
        .image-box img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 15px 15px 0 0;
        }
        .social-links {
          position: absolute;
          bottom: 10px;
          right: 10px;
          display: flex;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .team-block-one:hover .social-links {
          opacity: 1;
        }
        .social-links li a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          background: #fff;
          border-radius: 50%;
          color: #333;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .social-links li a:hover {
          background: #007bff;
          color: #fff;
        }
        .lower-content {
          padding: 20px;
          text-align: center;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .lower-content h3 a {
          color: #333;
          font-size: 18px;
          text-decoration: none;
          font-weight: 600;
        }
        .lower-content h3 a:hover {
          color: #007bff;
        }
        .designation {
          color: #666;
          font-size: 14px;
          margin-top: 10px;
        }
        @media (min-width: 992px) {
          .col-lg-2 {
            flex: 0 0 20%;
            max-width: 20%;
          }
        }
      `}</style>
      {/* <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-13.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
      </div> */}
      {/* <div className="shape">
        <div className="shape-1 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
        <div className="shape-2"></div>
        <div className="shape-3 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
      </div> */}
      <div className="auto-container">
        <div className="sec-title mb_50">
          <span className="sub-title">Our Process</span>
          <h2>Explore Our Perfume Creation Journey<br />Crafted with Precision</h2>
        </div>
        <div className="row clearfix">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-2 col-md-6 col-sm-12 team-block">
              <div className="team-block-one wow fadeInUp animated" data-wow-delay={`${index * 200}ms`} data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="image-box">
                    {/* <figure className="image"><img src={member.image} alt={`${member.name}'s photo`} /></figure> */}
                    <ul className="social-links clearfix">
                      <li><Link href="/#"><i className={member.icon}></i></Link></li>
                      <li><Link href="/#"><i className={member.icon}></i></Link></li>
                      <li><Link href="/#"><i className={member.icon}></i></Link></li>
                      <li><Link href="/#"><i className={member.icon}></i></Link></li>
                    </ul>
                  </div>
                  <div className="lower-content">
                    <h3><Link href="team-details">{member.name}</Link></h3>
                    <span className="designation">{member.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
