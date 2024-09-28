import './App.css'
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
          <header className="main-header style-three">
            {/* header-lower */}
            <div className="header-lower">
              <div className="outer-box clearfix">
                <div className="left-column pull-left">
                  <div className="logo-box">
                    <figure className="logo"><a href="HomePage"><img src="assets/images/logo-3.png" alt="" /></a></figure>
                  </div>
                  <div className="menu-area">
                    {/*Mobile Navigation Toggler*/}
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
                </div>
                <div className="right-column pull-right">
                  <div className="author-box">
                    <div className="icon-box"><a href="index.html"><i className="icon-Bell" /></a></div>
                    <div className="author">
                      <figure className="author-image"><img src="assets/images/resource/author-1.png" alt="" /></figure>
                      <div className="select-box">
                        <select className="wide">
                          <option data-display="Nurlan İbrahimov"></option>
                          <option value={1}>Profil</option>
                          <option value={2}>Tənzimləmələr</option>
                          <option value={4}>Hesabdan çıxış</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*sticky Header*/}
            <div className="sticky-header">
              <div className="auto-container">
                <div className="outer-box">
                  <div className="logo-box">
                    <figure className="logo"><a href="HomePage"><img src="assets/images/small-logo.png" alt="" /></a></figure>
                  </div>
                  <div className="menu-area">
                    <nav className="main-menu clearfix">
                      {/*Keep This Empty / Menu will come through Javascript*/}
                    </nav>
                  </div>
                  <div className="select-box">
                        <select className="wide">
                          <option data-display="Nurlan İbrahimov"></option>
                          <option value={1}>Profil</option>
                          <option value={2}>Tənzimləmələr</option>
                          <option value={4}>Hesabdan çıxış</option>
                        </select>
                      </div>
                </div>
              </div>
            </div>
          </header>
          {/* main-header end */}
          {/* Mobile Menu  */}
          <div className="mobile-menu">
            <div className="menu-backdrop" />
            <div className="close-btn"><i className="fas fa-times" /></div>
            <nav class="menu-box">
                <div class="nav-logo"><a href="HomePage"><img src={"../assets/images/logo-2.png"} alt="" title=""/></a></div>
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
          </div>{/* End Mobile Menu */}
          {/*page-title-two*/}
          <section className="page-title-two">
            <div className="title-box centred bg-color-2">
              <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-70.png)'}} />
                <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-71.png)'}} />
              </div>
              <div className="auto-container">
                <div className="title">
                  <h1>Həkim qəbulu</h1>
                </div>
              </div>
            </div>
            
          </section>
          {/*page-title-two end*/}
          {/* appointment-section */}
          <section className="appointment-section bg-color-3">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 left-column">
                  <div className="appointment-information">
                    <div className="title-box">
                      <h3>Məlumatlar</h3>
                    </div>
                    <div className="inner-box">
                      <div className="single-box">
                        <h3>Konsultasiya tipi:</h3>
                        <div className="custom-check-box">
                          <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                              <input type="checkbox" className="material-control-input" defaultChecked />
                              <span className="material-control-indicator" />
                              <span className="description">İlkin</span>
                            </label>
                          </div>
                        </div>
                        <div className="custom-check-box">
                          <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                              <input type="checkbox" className="material-control-input" />
                              <span className="material-control-indicator" />
                              <span className="description">Təkrar</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="single-box">
                        <h3>Zəhmət olmasa konsultasiya növünü seçin</h3>
                        <div className="custom-check-box">
                          <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                              <input type="checkbox" className="material-control-input" defaultChecked />
                              <span className="material-control-indicator" />
                              <span className="description">Laborator və ya Resept Analizi</span>
                            </label>
                          </div>
                        </div>
                        <div className="custom-check-box">
                          <div className="custom-controls-stacked">
                            <label className="custom-control material-checkbox">
                              <input type="checkbox" className="material-control-input" />
                              <span className="material-control-indicator" />
                              <span className="description">Video zəng</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="payment-information">
                        <h3>Ödəniş məlumatları</h3>
                        <div className="row clearfix">
                          <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                            <div className="form-group">
                              <label>Kartın üzərindəki ad</label>
                              <input type="text" name="card_name" placeholder="Adam Smith" required />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="form-group">
                              <label>Kart nömrəsi</label>
                              <input type="text" name="card_number" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="form-group">
                              <label />
                              <ul className="card-list clearfix">
                                <li><a href="book-appointment.html"><img src="assets/images/resource/card-1.png" alt="" /></a></li>
                                <li><a href="book-appointment.html"><img src="assets/images/resource/card-2.png" alt="" /></a></li>
                                <li><a href="book-appointment.html"><img src="assets/images/resource/card-3.png" alt="" /></a></li>
                                <li><a href="book-appointment.html"><img src="assets/images/resource/card-4.png" alt="" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="form-group">
                              <label>Bitmə vaxtı</label>
                              <input type="text" name="expiration_date" placeholder="mm/yy" required />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                            <div className="form-group">
                              <label>CVC/CCV</label>
                              <input type="text" name="ccv" placeholder="CCV" required />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                            <div className="custom-check-box">
                              <div className="custom-controls-stacked">
                                <label className="custom-control material-checkbox">
                                  <input type="checkbox" className="material-control-input" />
                                  <span className="material-control-indicator" />
                                  <span className="description">Mən <a href="book-appointment.html">şərtləri</a> və <a href="book-appointment.html">ümumi siyasəti</a> qəbul edirəm</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                  <div className="booking-information">
                    <div className="title-box">
                      <h3>Qəbul təsdiqi</h3>
                    </div>
                    <div className="inner-box">
                      <div className="single-box">
                        <ul className="clearfix">
                          <li>Gün<span>16/09/2024</span></li>
                          <li>Vaxt<span>19:32</span></li>
                          <li>Həkim<span>Dr. Nurlan İbrahimov</span></li>
                        </ul>
                      </div>
                      <div className="total-box">
                        <h5>Total<span>40 AZN</span></h5>
                      </div>
                    </div>
                    <div className="btn-box">
                      <a href="Confirm" className="theme-btn-one">Qəbul et və Ödə<i className="icon-Arrow-Right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* appointment-section end */}
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
                                                <a href="mailto:info@idoktor.az">info@idoktor.az</a>
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