
'use client';
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 1 },
    991: { slidesPerView: 1 },
    1199: { slidesPerView: 1 },
    1350: { slidesPerView: 1 },
  },
};

export default function TestimonialSlider1() {
  return (
    <>
      <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>JJ Perfumes crafted a bespoke scent that perfectly embodies our brand’s luxury identity. Their expertise is truly exceptional!</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/review2.jpeg" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <h3>Sophia </h3>
               
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>Their global ingredient sourcing and elegant packaging design elevated our fragrance line beyond our expectations. Highly recommend!</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/review1.jpeg" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="far fa-star"></i></li>
                </ul>
                <h3>Michael </h3>
         
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
