import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";

export default function Testimonial() {
  return (
    <section className="testimonial-section sec-pad" style={{backgroundColor: '#fff'}}>
      <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
      <div className="auto-container">
        <div className="row clearfix" style={{display: 'flex', alignItems: 'center'}}>
          <div className="col-xl-6 col-lg-6 col-md-12 content-column">
            <div className="content-box p_relative ml_45">
              <div className="sec-title mb_50">
                <span className="sub-title">Testimonials</span>
                <h2>What Our Clients Say About JJ Perfumes</h2>
              </div>
              <div className="content-box">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 image-column" style={{display: 'flex', justifyContent: 'center'}}>
            <img src="assets/images/gallery/img10.png" alt="Testimonial" style={{maxWidth: '500px', width: '100%', height: 'auto', display: 'block'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
