import './App.css'

function App() {
      return (
  
        <div className="boxed_wrapper">
          {/* preloader */}
          <div className="preloader" />
          {/* preloader */}
          {/* main header */}
          <header className="main-header style-two">
            {/* header-lower */}
            <div className="header-lower">
              <div className="auto-container">
                <div className="outer-box">
                  <div className="logo-box">
                    <figure className="logo"><a href="index.html"><img src="assets/images/logo-3.png" alt="" /></a></figure>
                  </div>
                  <div className="menu-area">
                    {/*Mobile Navigation Toggler*/}
                    <div className="mobile-nav-toggler">
                      <i className="icon-bar" />
                      <i className="icon-bar" />
                      <i className="icon-bar" />
                    </div>
                    <nav class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix">
                                        <li><a href="index.html">Ana Səhifə</a>
                                        </li> 
                                        <li><a href="index.html">Həkimlər</a>
                                        </li>
                                        <li><a href="index.html">Qiymətlər</a>
                                            <div class="megamenu">
                                                <div class="row clearfix">
                                                    <div class="col-lg-6 column">
                                                    </div>
                                                    <div class="col-lg-6 column">
                                                    </div>                                   
                                                </div>                                        
                                            </div>
                                        </li>
                                        <li class="dropdown"><a href="index.html">Haqqımızda</a>
                                                        <ul>
                                                            <li><a href="team-element-2.html">Yükləmələr</a></li>
                                                            <li><a href="news-element-1.html">FAQ</a></li>
                                                        </ul>     
                                        </li>  
                                        <li><a href="index.html">Əlaqə</a>
                                        </li> 
                                    </ul>
                                </div>
                            </nav>
                  </div>
                  <div className="btn-box"><a href="register-page.html" className="theme-btn-one"><i className="icon-image" />Bizə qoşul</a></div>
                </div>
              </div>
            </div>
            {/*sticky Header*/}
            <div className="sticky-header">
              <div className="auto-container">
                <div className="outer-box">
                  <div className="logo-box">
                    <figure className="logo"><a href="index.html"><img src="assets/images/small-logo.png" alt="" /></a></figure>
                  </div>
                  <div className="menu-area">
                    <nav className="main-menu clearfix">
                      {/*Keep This Empty / Menu will come through Javascript*/}
                    </nav>
                  </div>
                  <div className="btn-box"><a href="register-page.html" className="theme-btn-one"><i className="icon-image" />Bizə qoşul</a></div>
                </div>
              </div>
            </div>
          </header>
          {/* main-header end */}
          {/* Mobile Menu  */}
          <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><i class="fas fa-times"></i></div>
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="index.html"><img src={"../assets/images/logo-2.png"} alt="" title=""/></a></div>
                <div class="menu-outer"></div>
                <div class="contact-info">
                    <h4>Əlaqə</h4>
                    <ul>
                        <li>Bakı, Azərbaycan</li>
                        <li><a href="tel:+994102251508">+994 10 225 15 08</a></li>
                        <li><a href="mailto:info@idoktor.az">info@idoktor.az</a></li>
                    </ul>
                </div>
                <div class="social-links">
                    <ul class="clearfix">
                        <li><a href="index.html"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="index.html"><span class="fab fa-facebook-square"></span></a></li>
                        <li><a href="index.html"><span class="fab fa-pinterest-p"></span></a></li>
                        <li><a href="index.html"><span class="fab fa-instagram"></span></a></li>
                        <li><a href="index.html"><span class="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
          {/*page-title-two*/}
          <section className="page-title-two">
            <div className="title-box centred bg-color-2">
              <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-70.png)'}} />
                <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-71.png)'}} />
              </div>
              <div className="auto-container">
                <div className="title">
                  <h1>Əlaqə</h1>
                </div>
              </div>
            </div>
            
          </section>
          {/*page-title-two end*/}
          {/* information-section */}
          <section className="information-section sec-pad centred bg-color-3">
            <div className="pattern-layer">
              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-88.png)'}} />
              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-89.png)'}} />
            </div>
            <div className="auto-container">
              <div className="sec-title centred">
                <p>Məlumat</p>
                <h2>Əlaqə Saxlayın</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 information-column">
                  <div className="single-information-block wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="pattern" style={{backgroundImage: 'url(assets/images/shape/shape-87.png)'}} />
                      <figure className="icon-box"><img src="assets/images/icons/icon-20.png" alt="" /></figure>
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:info@idoktor.az">info@idoktor.az</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 information-column">
                  <div className="single-information-block wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="pattern" style={{backgroundImage: 'url(assets/images/shape/shape-87.png)'}} />
                      <figure className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></figure>
                      <h3>Telefon</h3>
                      <p>
                        <a href="tel:+994102251508">+994 10 225 15 08</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 information-column">
                  <div className="single-information-block wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="pattern" style={{backgroundImage: 'url(assets/images/shape/shape-87.png)'}} />
                      <figure className="icon-box"><img src="assets/images/icons/icon-22.png" alt="" /></figure>
                      <h3>Ünvan</h3>
                      <p>Bakı, Azərbaycan, AZ 1117<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* information-section end */}
          {/* contact-section */}
          <section className="contact-section">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                  <div className="form-inner">
                    <div className="sec-title">
                      <p>Əlaqə</p>
                      <h2>Bizimlə Əlaqə</h2>
                    </div>
                    <form method="post" action="sendemail.php" id="contact-form" className="default-form"> 
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="text" name="username" placeholder="Adınız" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="email" name="email" placeholder="Mail adresiniz" required />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input type="text" name="phone" required placeholder="Telefon" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input type="text" name="subject" required placeholder="Başlıq" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea name="message" placeholder="Bizə mesajınız..." defaultValue={""} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button className="theme-btn-one" type="submit" name="submit-form">Göndər<i className="icon-Arrow-Right" /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 map-column">
                  <div className="map-inner">
                    <div className="pattern" style={{backgroundImage: 'url(assets/images/shape/shape-90.png)'}} />
                    <div className="google-map" id="contact-google-map" data-map-lat="40.712776" data-map-lng="-74.005974" data-icon-path="assets/images/icons/map-marker.png" data-map-title="Brooklyn, New York, United Kingdom" data-map-zoom={12} data-markers="{
                                      &quot;marker-1&quot;: [40.712776, -74.005974, &quot;<h4>Branch Office</h4><p>77/99 New York</p>&quot;,&quot;assets/images/icons/map-marker.png&quot;]
                                  }">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contact-section end */}
          {/* agent-section */}
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

          {/* agent-section */}
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
                                    <figure class="footer-logo"><a href="index.html"><img src={"../assets/images/footer-logo.png"} alt=""/></a></figure>
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
                                            <li><a href="index.html">Həkimlər</a></li>
                                            <li><a href="index.html">Klinikalar</a></li>
                                            <li><a href="index.html">Yüklə</a></li>
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
                                            <li><i class="fas fa-microphone"></i>
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
                        <div class="copyright pull-left"><p><a href="index.html">iDoctor</a> &copy; 2024 Bütün hüquqlar qorunur</p></div>
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
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fa fa-arrow-up" />
          </button>
        </div>
      );
    }

    export default App;