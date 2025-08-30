"use client";
import React from "react";

export default function Excellence() {
  return (
    <section className="excellence-section" style={{padding: '40px 0', backgroundColor: '#fff'}}>
      <div className="auto-container">
        <div className="row clearfix">
          {/* Transportation & Packaging Excellence */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="excellence-card">
              <div className="icon-box mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="48" height="48">
                  <path fill="#4f46e5" d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm368-48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z"/>
                </svg>
              </div>
              <h2 className="mb-4">Transportation & Packaging Excellence</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568'}}>
                At JJ Perfumes International, our commitment to quality continues well beyond the manufacturing process. Every fragrance we produce is packaged with meticulous care using shock-resistant, leak-proof materials to safeguard against damage during handling and transit. For large-scale exports, products are securely loaded into trailers and shipping containers, following strict safety protocols to ensure stability throughout long-haul sea transportation. When speed is essential, we utilize trusted air freight partners for fast and secure worldwide delivery. In cases where temperature sensitivity matters, we employ climate-controlled logistics to preserve the integrity of each fragrance. This integrated approach to packaging and transportation guarantees that every shipment reaches its destination on time, in perfect condition, and ready for sale.
              </p>
            </div>
          </div>

          {/* Research & Development Excellence */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="excellence-card">
              <div className="icon-box mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
                  <path fill="#10b981" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                </svg>
              </div>
              <h2 className="mb-4">Research & Development Excellence</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568'}}>
                Innovation is the foundation of our success at JJ Perfumes International. Our advanced research and development facilities are equipped with modern analytical tools that allow us to create fragrances with unmatched precision, consistency, and character. We closely monitor global fragrance trends and consumer preferences to develop scents that resonate with diverse international markets. By collaborating with world-class suppliers, we gain access to rare and premium ingredients that elevate our creations. Each new formulation undergoes rigorous stability, performance, and sensory testing to ensure long-lasting quality and appeal. Through this dedication to research and innovation, we not only meet the expectations of our clients but consistently exceed them, setting new benchmarks in the perfume manufacturing industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .excellence-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 30px;
          height: 100%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .excellence-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .icon-box {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        h2 {
          color: #1a202c;
          font-size: 1.75rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .excellence-card {
            margin-bottom: 20px;
          }
          
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
