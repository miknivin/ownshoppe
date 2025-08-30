"use client";
import Link from "next/link";
import React from "react";

export default function Feature() {
  return (
    <section className="feature-section pt_80 pb_60">
      <div className="auto-container">
        <div className="sec-title mb_70 centred">
        
          <h2>Our Reach & Capacity</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            With a strong global presence and state-of-the-art manufacturing capabilities, we deliver excellence in fragrance creation and distribution.
          </p>
        </div>
        <div className="row clearfix">
          {/* Card 1 - Financial */}
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-card-modern">
              <div className="feature-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={48}>
                  <path fill="#4f46e5" d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                </svg>
              </div>
              <div className="feature-card-content">
                <h3>
                  <Link href="/">Exporting perfumes valued at ₹5–10 crores per month</Link>
                </h3>
                <p>Consistent high-value exports demonstrating our market strength</p>
              </div>
            </div>
          </div>
          
          {/* Card 2 - Distribution */}
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-card-modern">
              <div className="feature-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={48}>
                  <path fill="#10b981" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
              </div>
              <div className="feature-card-content">
                <h3>
                  <Link href="/">Strong distribution network with a wide network of agents</Link>
                </h3>
                <p>Extensive reach through our dedicated partner network</p>
              </div>
            </div>
          </div>
          
          {/* Card 3 - Market Success */}
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-card-modern">
              <div className="feature-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={48}>
                  <path fill="#f59e0b" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg>
              </div>
              <div className="feature-card-content">
                <h3>
                  <Link href="/">Successfully launched premium perfumes in the Indian market</Link>
                </h3>
                <p>Establishing premium fragrance presence in a competitive market</p>
              </div>
            </div>
          </div>
          
          {/* Card 4 - Production Capacity */}
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-card-modern">
              <div className="feature-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={48}>
                  <path fill="#ef4444" d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96C43 64 0 107 0 160V416c0 53 43 96 96 96H416c53 0 96-43 96-96V160c0-53-43-96-96-96H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM384 224c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64zM256 416c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V416z"/>
                </svg>
              </div>
              <div className="feature-card-content">
                <h3>
                  <Link href="/">Running at full production capacity due to growing international demand</Link>
                </h3>
                <p>Maximized production responding to global market needs</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      
      <style jsx>{`
        .feature-card-modern {
          background: white;
          border-radius: 16px;
          padding: 30px 25px;
          text-align: center;
          height: 100%;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card-modern:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
       
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .feature-card-modern:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.12);
        }
        
        .feature-card-modern:hover:before {
          opacity: 1;
        }
        
        .feature-card-icon {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
        }
        
        .feature-card-content h3 {
          margin-bottom: 15px;
          font-size: 21px;
          line-height: 1.4;
        }
        
        .feature-card-content h3 a {
          color: #1f2937;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .feature-card-content h3 a:hover {
          color: #4f46e5;
        }
        
        .feature-card-content p {
          color: #6b7280;
          font-size: 19px;
          line-height: 1.6;
        }
        
        .btn-style-three {
          display: inline-block;
          background: #4f46e5;
          color: white;
          padding: 12px 30px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);
        }
        
        .btn-style-three:hover {
          background: #3730a3;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.5);
        }
        
        .sub-title {
          display: block;
          color: #4f46e5;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 16px;
        }
        
        @media (max-width: 991px) {
          .feature-block {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
}