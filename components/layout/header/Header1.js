'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
  return (
    <>
      <header className={`main-header ${scroll ? "fixed-header" : ""}`} style={{color: '#060505'}}>
                {/* Header Top */}
                <div className="header-top">
      <div className="auto-container">
        <div className="top-inner" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <ul className="social-links clearfix" style={{marginLeft: 0}}>
            {/* <li>
              <Link href="/">
                <i className="icon-4"></i>
              </Link>
            </li> */}
            {/* <li>
              <Link href="/">
                <i className="icon-5"></i>
              </Link>
            </li> */}
            {/* <li>
              <Link href="/">
                <i className="icon-6"></i>
              </Link>
            </li> */}
            {/* <li>
              <Link href="/">
                <i className="icon-7"></i>
              </Link>
            </li> */}
          </ul>
          <ul className="info-list clearfix" style={{marginLeft: 'auto'}}>
            <li>
              <i className="icon-2"></i>
              <Link href="tel:+919645898599" style={{color: '#060505', fontSize: '1.25rem'}}>+919645898599</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
                   
                {/* Header Upper */}
                <div className="header-lower">
      <div className="outer-container">
        <div className="auto-container">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <Link href="/"><img src="assets/images/img1.png" alt="" /></Link>
              </figure>
            </div>
            <div className="menu-area">
                {/* Navigation menu removed as requested */}
            </div>
            <div className="btn-box">
              <Link href="/contact" className="theme-btn btn-two"> <span style={{fontSize: '1.2rem'}}>Contact us</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
              
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><img src="assets/images/img1.png" alt="" /></Link></figure>
                        </div>
                       
                            <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                {/* <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu/>
                                </div> */}
                            </nav>
                            <ul className="menu-right-content">
                          
                            <div className="btn-box">
                            <Link href="/contact" className="theme-btn btn-two"> <span style={{fontSize: '1.2rem'}}>Contact us</span></Link>
                        </div>
                            </ul>
                        
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
