"use client";

import React from "react";

const countries = [
  { name: "Suadi", image: "assets/images/gallery/suadi.jpeg" },
  { name: "Spain ", image: "assets/images/gallery/spain.jpeg" },
  { name: "Qatar ", image: "assets/images/gallery/qatar.jpeg" },
  { name: "Bahrain", image: "assets/images/gallery/bahrain.jpeg" },
  { name: "Kuwait", image: "assets/images/gallery/kuwait.jpeg" },
    { name: "Russia", image: "assets/images/gallery/russia.jpeg" },


  // Add more countries as needed
];

export default function CountryCards() {
  return (
    <section className="country-section pt_120 pb_90">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <h2>Our Global Presence</h2>
        </div>
        <div className="row clearfix country-card-grid">
          {countries.map((country, idx) => (
            <div key={idx} className="country-card-modern">
              <div className="country-card-image">
                <img src={country.image} alt={country.name} />
              </div>
              <div className="country-card-content">
                <h4>{country.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .country-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 32px;
          justify-content: center;
        }
        .country-card-modern {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 260px;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .country-card-modern:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.16);
          transform: translateY(-4px);
        }
        .country-card-image {
          background: #f4f4f8;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 140px;
          width: 100%;
          overflow: hidden;
        }
        .country-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
        .country-card-content {
          padding: 24px 18px 18px 18px;
          flex: 1;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
        .country-card-content h4 {
          font-size: 1.6rem;
          color: #232946;
          font-weight: 700;
          margin: 0;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
