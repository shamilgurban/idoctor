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
          <div className="preloader" />
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
            <div className="header-lower">
              <div className="auto-container">
                <div className="outer-box">
                  <div className="logo-box">
                    <figure className="logo"><a href="HomePage"><img src={".//assets/images/logo-3.png"} alt="" /></a></figure>
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
                          
                          <li className='current'><a href="About">Haqqımızda</a>
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
            <div className="sticky-header">
              <div className="auto-container">
                <div className="outer-box">
                  <div className="logo-box">
                    <figure className="logo"><a href="HomePage"><img src="assets/images/small-logo.png" alt="" /></a></figure>
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
          <div className="mobile-menu">
            <div className="menu-backdrop" />
            <div className="close-btn"><i className="fas fa-times" /></div>
            <nav className="menu-box">
              <div className="nav-logo"><a href="HomePage"><img src="assets/images/logo-2.png" alt="" title /></a></div>
              <div className="menu-outer"></div>
              <div className="contact-info">
                <h4>Əlaqə</h4>
                <ul>
                  <li>Bakı, Azərbaycan</li>
                  <li><a href="tel:+994102251508">+994 10 225 15 08</a></li>
                  <li><a href="mailto:info@example.com">info@idoktor.az</a></li>
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
          </div>
          <section className="page-title centred bg-color-1">
            <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-70.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-71.png)'}} />
            </div>
            <div className="auto-container">
              <div className="content-box">
                <div className="title">
                  <h1>Haqqımızda</h1>
                </div>
                
              </div>
            </div>
          </section>
          <section className="about-style-two">
            <div className="auto-container">
              <div className="row align-items-center clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_1">
                    <div className="content-box mr-50">
                      <div className="sec-title">
                      <p>iDoctor Haqqında</p>
                                    <h2>Bir toxunuşla yanınızda</h2>
                                </div>
                                <div class="text">
                                    <p>iDoctor, online həkim qəbulu üçün yaradılmış platformadır.</p>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_3">
                    <div className="image-box">
                      <div className="pattern">
                        <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}} />
                        <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-50.png)'}} />
                        <div className="pattern-3" />
                      </div>
                      <figure className="image image-1 paroller"><img src="assets/images/resource/about-4.jpg" alt="" /></figure>
                      <figure className="image image-2 paroller-2"><img src="assets/images/resource/about-3.jpg" alt="" /></figure>
                      <div className="image-content">
                        <figure className="icon-box"><img src="assets/images/icons/icon-8.png" alt="" /></figure>
                        <span>Mütəxəssis ilə</span>
                        <h4>danışın</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="process-style-two bg-color-3 centred">
            <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-39.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-40.png)'}} />
              <div className="pattern-3" style={{backgroundImage: 'url(assets/images/shape/shape-41.png)'}} />
              <div className="pattern-4" style={{backgroundImage: 'url(assets/images/shape/shape-42.png)'}} />
            </div>
            <div className="auto-container">
              <div className="sec-title centred">
              <p>Addımlar</p>
              <h2>Qəbul Prosesi</h2>
              </div>
              <div className="inner-content">
                <div className="arrow" style={{backgroundImage: 'url(assets/images/icons/arrow-1.png)'}} />
                <div className="row clearfix">
                  <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                    <div className="processing-block-two">
                      <div className="inner-box">
                        <figure className="icon-box"><img src="assets/images/icons/icon-9.png" alt="" /></figure>
                        <h3>Sizə uyğun həkimi axtarın</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                    <div className="processing-block-two">
                      <div className="inner-box">
                        <figure className="icon-box"><img src="assets/images/icons/icon-10.png" alt="" /></figure>
                        <h3>Profil detallarına baxın</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                    <div className="processing-block-two">
                      <div className="inner-box">
                        <figure className="icon-box"><img src="assets/images/icons/icon-11.png" alt="" /></figure>
                        <h3>Qəbul vaxtını təyin edin</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="cta-section alternat-2 bg-color-2">
            <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-17.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-18.png)'}} />
              <div className="pattern-3" style={{backgroundImage: 'url(assets/images/shape/shape-19.png)'}} />
            </div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
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
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image-box wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <figure className="image"><img src="assets/images/resource/phone-1.png" alt="" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="faq-section pt-125">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_4">
                    <div className="image-box">
                      <div className="pattern" style={{backgroundImage: 'url(assets/images/shape/shape-54.png)'}} />
                      <figure className="image"><img src="assets/images/resource/faq-1.png" alt="" /></figure>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_5">
                    <div className="content-box">
                      <div className="sec-title">
                        <p>Faq’s</p>
                        <h2>Tez-tez soruşulan suallar.</h2>
                      </div>
                      <ul className="accordion-box">
                        <li className="accordion block">
                          <div className="acc-btn">
                            <div className="icon-outer" />
                            <h4>Müştəri xidməti ilə necə əlaqə saxlaya bilərəm?</h4>
                          </div>
                          <div className="acc-content">
                            <div className="text">
                              <p>Qeyd edilən nömrə ilə əlaqə saxlaya və yaxud mail adresimiz vasitəsilə bizimlə əlaqə saxlaya bilərsiz</p>
                            </div>
                          </div>
                        </li>
                        <li className="accordion block active-block">
                          <div className="acc-btn active">
                            <div className="icon-outer" />
                            <h4>Həkimlər yaxşı rəylər üçün pul ödəyirlərmi?</h4>
                          </div>
                          <div className="acc-content current">
                            <div className="text">
                              <p>Xeyr. iDoctor platforması tamamilə şəffaf şəkildə işləyir. Bu cür halların baş verilməsinə imkan verilmir.</p>
                            </div>
                          </div>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
      <div style={{ marginBottom: '120px' }}></div>
        </div>
          
        <section class="agent-section">
            <div class="auto-container">
                <div class="inner-container bg-color-2">
                    <div class="row clearfix">
                        <div class="col-lg-6 col-md-12 col-sm-12 left-column">
                            <div class="content_block_3">
                                <div class="content-box">
                                    <h3>Bizimlə Əlaqə</h3>
                                    <div class="support-box">
                                        <div class="icon-box"><i class="fas fa-phone"></i></div>
                                        <span>Tel</span>
                                        <h3><a href="tel:+994102251508">+(994) 10 225 15 08</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 right-column">
                            <div class="content_block_4">
                                <div class="content-box">
                                    <h3>Abunə ol</h3>
                                    <form action="index.html" method="post" class="subscribe-form">
                                        <div class="form-group">
                                            <input type="email" name="email" placeholder="Mail adresiniz" required=""></input>
                                            <button type="submit" class="theme-btn-one">Abunə Ol<i class="icon-Arrow-Right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


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
                                    <figure class="footer-logo"><a href="HomePage"><img src={"../assets/images/footer-logo.png"} alt=""/></a></figure>
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
                        <div class="copyright pull-left"><p><a href="HomePage">iDoctor</a> &copy; 2024 Bütün hüquqlar qorunur</p></div>
                        <ul class="footer-nav pull-right clearfix">
                            <li><a href="index.html">Xidmət Şərtləri</a></li>
                            <li><a href="index.html">Gizlilik Şərtləri</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
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