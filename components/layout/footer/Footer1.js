import Link from "next/link";

export default function Footer1() {
  return (
    <footer className="main-footer" id="footer" style={{ backgroundColor: '#fff', color: '#000' }}>
      <div className="pattern-layer">
        <div className="pattern-4"></div>
      </div>
      <div className="widget-section pt_120 pb_100">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo" style={{ color: '#000' }}>
                  <Link href="/">
                    <img src="assets/images/img1.png" alt="" />
                  </Link>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget">
                <div className="widget-title" style={{ color: '#000' }}>
                  <h3 style={{ color: '#000' }}>Contact us</h3>
                </div>
                <div className="widget-content" style={{ color: '#000' }}>
                  <ul className="info-list" style={{ color: '#000' }}>
                    <li style={{ color: '#000', position: 'relative', display: 'block', marginBottom: '30px', paddingLeft: '30px' }}>
                      JJ Perfumes International SDF 16, Ground Floor Cochin
                      Special Economic Zone Kakkanad, Cochin, India
                    </li>
                    <li style={{ color: '#000', position: 'relative', display: 'block', marginBottom: '30px', paddingLeft: '30px' }}>
                      <i className="icon-2" style={{ color: '#000', position: 'absolute', left: 0, top: 6, fontSize: 18 }}></i>
                      <Link href="tel:+919645898599" style={{ color: '#000', textDecoration: 'none' }}>
                        +91 96458 98599
                      </Link>
                    </li>
                    <li style={{ color: '#000', position: 'relative', display: 'block', marginBottom: '0px', paddingLeft: '30px' }}>
                      <i className="icon-26" style={{ color: '#000', position: 'absolute', left: 0, top: 6, fontSize: 18 }}></i>
                      <Link href="mailto:rjaydev@jjperfumes.com" style={{ color: '#000', textDecoration: 'none' }}>
                        rjaydev@jjperfumes.com
                      </Link>
                      <br />
                      <span style={{ margin: '0 8px' }}>/</span>
                      <Link href="mailto:rjaydev@gmail.com" style={{ color: '#000', textDecoration: 'none' }}>
                        rjaydev@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title" style={{ color: '#000' }}>
                  <h3 style={{ color: '#000', fontSize: '24px' }}>Information</h3> {/* Increased font size for heading */}
                </div>
                <div className="widget-content" style={{ color: '#000' }}>
                  <ul className="links-list" style={{ color: '#000', listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#000', marginBottom: '15px' }}>
                      <Link href="/privacy-policy" style={{ color: '#000', textDecoration: 'none', fontSize: '24px' }}> {/* Increased font size for list items */}
                         Privacy Policy
                      </Link>
                    </li>
                    <li style={{ color: '#000', marginBottom: '15px' }}>
                      <Link href="/termsandconditions"style={{ color: '#000', textDecoration: 'none', fontSize: '24px' }}>
                        Terms and Conditions
                      </Link>
                    </li>
                    
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ color: '#000' }}>
        {/* <div className="auto-container">
          <div className="bottom-inner">
            <ul className="footer-nav clearfix">
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Terms of Use</Link></li>
              <li><Link href="/">Sales and Refunds</Link></li>
              <li><Link href="/">Legal</Link></li>
              <li><Link href="/">Site Map</Link></li>
            </ul>
            <div className="copyright">
              <p>&copy; 2024 All Rights Reserved</p>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}