
import React from 'react';
import Link from "next/link";

export default function subscribe() {
  return (
    <section className="subscribe-section bg-color-1">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12 text-column">
              <div className="text-box">
                <h2><span>Partner With Us</span></h2>
                <p>Whether you’re an established luxury label or an emerging brand, JJ Perfumes is your creative and manufacturing partner for iconic fragrances.</p>
                {/* <p><span role="img" aria-label="email">📧</span> Email: [Your Email]</p>
                <p><span role="img" aria-label="phone">📱</span> Phone: [Your Number]</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
