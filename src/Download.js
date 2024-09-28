import './App.css';
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };
    
    function App() {
      return (
  
        <div className="boxed_wrapper">
          {/* preloader */}
          <div className="preloader" />
          {/* preloader */}
          {/* main header */}
          <header className="main-header style-two">
          <div className="header-top">
              <div className="auto-container">
                <div className="top-inner clearfix">
                  <div className="top-left pull-left">
                    <ul className="info clearfix">
                      <li><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan </li>
                      <li><i className="fas fa-phone" /><a href="tel:+994102251508">+994 10 225 15 08</a></li>
                    </ul>
                  </div>
                  <div className="top-right pull-right">
                    <ul className="info clearfix">
                      <li><a href="Login">Daxil ol</a></li>
                      <li><a href="service-1.html">Karyera</a></li>
                      <li className="language">
                        <a href="index.html">AZ</a>
                        <ul className="language-dropdown">
                          <li><a href="index.html">Azərbaycanca</a></li>
                          <li><a href="index.html">English</a></li>
                          <li><a href="index.html">Русский</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* header-lower */}
            <div className="header-lower">
              <div className="auto-container">
                <div className="outer-box">
                  <div className="logo-box">
                    <figure className="logo"><a href="/"><img src={".//assets/images/logo-3.png"} alt="" /></a></figure>
                  </div>
                  <div className="menu-area">
                    <div className="mobile-nav-toggler">
                      <i className="icon-bar" />
                      <i className="icon-bar" />
                      <i className="icon-bar" />
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                      <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                        <ul className="navigation clearfix">
                          <li><a href="/">Ana Səhifə</a>
                          </li> 
                          <li><a href="DoctorList">Həkimlər</a>
                            
                          </li>
                          
                          <li><a href="About">Haqqımızda</a>
                                        </li>  
                                        <li><a href="ContactUs">Əlaqə</a>
                                        </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="btn-box"><a href="Register" className="theme-btn-one"><i className="icon-image" />Bizə qoşul</a></div>
                </div>
              </div>
            </div>
            {/*sticky Header*/}
            <div className="sticky-header">
              <div className="auto-container">
                <div className="outer-box">
                  <div className="logo-box">
                    <figure className="logo"><a href="/"><img src="assets/images/small-logo.png" alt="" /></a></figure>
                  </div>
                  <div className="menu-area">
                    <nav className="main-menu clearfix">
                    </nav>
                  </div>
                  <div className="btn-box"><a href="Register" className="theme-btn-one"><i className="icon-image" />Bizə qoşul</a></div>
                </div>
              </div>
            </div>
          </header>
          {/* main-header end */}
          {/* Mobile Menu  */}
          <div className="mobile-menu">
            <div className="menu-backdrop" />
            <div className="close-btn"><i className="fas fa-times" /></div>
            <nav className="menu-box">
              <div className="nav-logo"><a href="/"><img src="assets/images/logo-2.png" alt="" title /></a></div>
              <div className="menu-outer"></div>
              <div className="contact-info">
                <h4>Əlaqə</h4>
                <ul>
                  <li>Bakı, Azərbaycan</li>
                  <li><a href="tel:+994102251508">+994 10 225 15 08</a></li>
                  <li><a href="mailto:info@idoktor.az">info@idoktor.az</a></li>
                </ul>
              </div>
              <div className="social-links">
                <ul className="clearfix">
                  <li><a href="index.html"><span className="fab fa-twitter" /></a></li>
                  <li><a href="index.html"><span className="fab fa-facebook-square" /></a></li>
                  <li><a href="index.html"><span className="fab fa-pinterest-p" /></a></li>
                  <li><a href="index.html"><span className="fab fa-instagram" /></a></li>
                  <li><a href="index.html"><span className="fab fa-youtube" /></a></li>
                </ul>
              </div>
            </nav>
          </div>{/* End Mobile Menu */}
          {/*Page Title*/}
          <section className="page-title centred bg-color-1">
            <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-70.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-71.png)'}} />
            </div>
            <div className="auto-container">
              <div className="content-box">
                <div className="title">
                  <h1>Yüklə</h1>
                </div>
                
              </div>
            </div>
          </section>
          {/*End Page Title*/}
          {/* cta-section */}
          <section className="cta-section bg-color-2">
            <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-17.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-18.png)'}} />
              <div className="pattern-3" style={{backgroundImage: 'url(assets/images/shape/shape-19.png)'}} />
            </div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                  <div className="image-box wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <figure className="image"><img src="assets/images/resource/phone-1.png" alt="" /></figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                  <div className="content_block_2">
                    <div className="content-box">
                      <div className="sec-title light">
                        <p>Yüklə</p>
                        <h2>Sağlamlığınız artıq cibinizdə</h2>
                      </div>
                      
                      <div className="btn-box clearfix">
                        <a href="index.html" className="download-btn app-store">
                          <i className="fab fa-apple" />
                          <span>Yüklə</span>
                          <h3>App Store</h3>
                        </a>
                        <a href="index.html" className="download-btn play-store">
                          <i className="fab fa-google-play" />
                          <span>Yüklə</span>
                          <h3>Google Play</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* cta-section end */}
          {/* main-footer */}
          <footer class="main-footer">
            <div class="footer-top">
                <div class="pattern-layer">
                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-30.png')`}}></div>
                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-31.png')`}}></div>
                </div>
                <div class="auto-container">
                    <div class="widget-section">
                        <div class="row clearfix">
                            <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget logo-widget">
                                    <figure class="footer-logo"><a href="/"><img src={"../assets/images/footer-logo.png"} alt=""/></a></figure>
                                    <div class="text">
                                        <p>Sağlamlığa gedən yolu bizimlə dəyərləndir.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget links-widget">
                                    <div class="widget-title">
                                        <h3>Keçidlər</h3>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="links clearfix">
                                            <li><a href="DoctorList">Həkimlər</a></li>
                                            
                                            <li><a href="Download">Yüklə</a></li>
                                            <li><a href="index.html">Gizlilik Şərtləri</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget contact-widget">
                                    <div class="widget-title">
                                        <h3>Əlaqə</h3>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="info-list clearfix">
                                            <li><i class="fas fa-map-marker-alt"></i>
                                                Bakı, Azərbaycan
                                            </li>
                                            <li><i class="fas fa-phone"></i>
                                                <a href="tel:23055873407">+994 10 225 15 08</a>
                                            </li>
                                            <li><i class="fas fa-envelope"></i>
                                                <a href="mailto:info@example.com">info@idoktor.az</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="auto-container">
                    <div class="inner-box clearfix">
                        <div class="copyright pull-left"><p><a href="/">iDoctor</a> &copy; 2024 Bütün hüquqlar qorunur</p></div>
                        <ul class="footer-nav pull-right clearfix">
                            <li><a href="index.html">Xidmət Şərtləri</a></li>
                            <li><a href="index.html">Gizlilik Şərtləri</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
          {/* main-footer end */}
          {/*Scroll to top*/}
          <button 
        className="scroll-top scroll-to-target" 
        data-target="html" 
        onClick={scrollToTop} // Add onClick handler here
      >
        <span className="fa fa-arrow-up" />
      </button>
        </div>
      );
    }
   
    export default App;