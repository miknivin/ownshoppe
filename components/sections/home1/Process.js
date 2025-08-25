"use client";

import React from "react";
import client from "../home2/Client";

export default function Process() {
  const expertiseItems = [
    {
      title: "Bespoke Fragrance Development",
      description: "Custom formulations designed exclusively for your brand",
    },
    {
      title: "Private Label Manufacturing",
      description: "Full-service production from concept to finished product",
    },
    {
      title: "Global Ingredient Sourcing",
      description: " Premium oils and essences from renowned regions",
    },
    {
      title: "Quality & Compliance",
      description:
        "IFRA standards, regulatory expertise, and strict quality control.",
    },
    {
      title: "Packaging & Design Support",
      description: "Elegant, brand-specific presentation to match your vision",
    },
  ];

  return (
    <section className="process-section sec-pad">
      <style jsx>{`
        .process-section {
          background: #f9f9f9;
          padding: 60px 0;
        }
        .inner-container {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          flex-wrap: wrap;
          gap: 30px;
        }
        .processing-block-one {
          flex: 1;
          min-width: 200px;
          max-width: 200px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .processing-block-one:hover {
          transform: translateY(-5px);
        }
        .inner-box {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .count-text {
          display: none;
        }
        .image-box {
          display: none;
        }
        .lower-content h3 {
          font-size: 18px;
          color: #333;
          margin: 10px 0;
          font-weight: 600;
        }
        .lower-content p {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .inner-container {
            flex-direction: column;
            align-items: center;
          }
          .processing-block-one {
            max-width: 100%;
          }
        }
      `}</style>
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(assets/images/shape/shape-19.png)" }}
      ></div>
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          {/* <span className="sub-title">Process</span> */}
          <h2>Our Process </h2>
        </div>
        <div className="inner-container">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="processing-block-one wow fadeInLeft animated"
              data-wow-delay={`${index * 200}ms`}
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="lower-content">
                <h3>{item.title}</h3>
               <p>{item.description}</p> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
