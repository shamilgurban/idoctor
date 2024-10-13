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
          <header className="main-header style-three">
            {/* header-lower */}
            <div className="header-lower">
              <div className="outer-box clearfix">
                <div className="left-column pull-left">
                  <div className="logo-box">
                    <figure className="logo"><a href="/"><img src="assets/images/logo-3.png" alt="" /></a></figure>
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
                    <figure className="logo"><a href="/"><img src="assets/images/small-logo.png" alt="" /></a></figure>
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
            <nav className="menu-box">
              <div className="nav-logo"><a href="/"><img src="assets/images/logo-2.png" alt="" title /></a></div>
              <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
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
                  <h1>Həkim Məlumatları</h1>
                </div>
              </div>
            </div>
            
          </section>
          {/*page-title-two end*/}
          {/* ddoctor-details */}
          <section className="doctor-details bg-color-3">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="clinic-details-content doctor-details-content">
                    <div className="clinic-block-one">
                      <div className="inner-box">
                        <figure className="image-box"><img src="assets/images/team/team-33.jpg" alt="" /></figure>
                        <div className="content-box">
                          <div className="like-box"><a href="doctors-details.html"><i className="far fa-heart" /></a></div>
                          <div className="share-box">
                            <a href="doctors-details.html" className="share-btn"><i className="fas fa-share-alt" /></a>
                          </div>
                          <ul className="name-box clearfix">
                            <li className="name"><h2>Dr. Nurlan İbrahimov</h2></li>
                            <li><i className="icon-Trust-1" /></li>
                            <li><i className="icon-Trust-2" /></li>
                          </ul>
                          <span className="designation">Kardiologiya</span>
                          <div className="rating-box clearfix">
                            <ul className="rating clearfix">
                              <li><i className="icon-Star" /></li>
                              <li><i className="icon-Star" /></li>
                              <li><i className="icon-Star" /></li>
                              <li><i className="icon-Star" /></li>
                              <li><i className="icon-Star" /></li>
                              <li><a href="doctors-details.html">(32)</a></li>
                            </ul>
                          </div>
                          <div className="text">
                            <p>Lorem ipsum dolor sit amet consectur adipisc eiusmod tempor incididunt.</p>
                          </div>
                          <div className="lower-box clearfix">
                            <ul className="info clearfix">
                              <li><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</li>
                              <li><i className="fas fa-phone" /><a href="tel:2265458856">+994 12 345 67 89</a></li>
                            </ul>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tabs-box">
                      
                      <div className="tabs-content">
                        <div className="tab active-tab" id="tab-1">
                          <div className="inner-box">
                            <div className="text">
                              <h3>Haqqında</h3>
                              <p>Dr. Agnes Ayres Nyu-Yorkda, Nyu-Yorkda üz-çənə cərrahıdır. Dr. Ayres öz sahəsindəki digər mütəxəssislərlə müqayisədə anadangəlmə ürək pozğunluqları və ürəyə qulluq sahəsində daha çox təcrübəyə malikdir. O, Mount Sinai Morningside və Ruzvelt Xəstəxanası kimi tibb müəssisələri ilə bağlıdır. O, yeni xəstələri qəbul edir. Görüş sifariş etmək üçün Dr. Pinney ilə əvvəlcədən zəng etməyinizə əmin olun.</p>
                              <h3>İxtisaslar</h3>
                              <ul className="treatments-list clearfix">
                                <li><a href="doctors-details.html">Kardiologiya</a></li>
                                <li><a href="doctors-details.html">Kardio Cərrahiyyə</a></li>
                                <li><a href="doctors-details.html">İnvaziv Kardiologiya</a></li>
                              </ul>
                              <h3>Təhsil</h3>
                              
                              <ul className="list clearfix">
                                <li>Azərbaycan Tibb Universiteti <span>- Müalicə işi</span></li>
                                <li>Tədris Tibbi Cərrahiyyə <span>- Kardiologiya</span></li>
                              </ul>
                            </div>
                            
                            
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="doctors-sidebar">
                    <div className="form-widget">
                      <div className="form-title">
                        <h3>Həkim qəbulu</h3>
                        <p>Bazar ertəsi - Cümə: 09:00 - 17:00</p>
                      </div>
                      <div className="form-inner">
                        <div className="appointment-time">
                          <div className="form-group">
                            <input type="text" name="date" placeholder="07/08/2020" id="datepicker" />
                            <i className="fas fa-calendar-alt" />
                          </div>
                          <div className="form-group">
                            <input type="text" name="time" placeholder="Any Time" />
                            <i className="far fa-clock" />
                          </div>
                        </div>
                        <div className="total-box">
                        <h5>Total<span>40 AZN</span></h5>
                        </div>
                        <div className="choose-service">
                          
                          
                          <div className="btn-box">
                            <a href="BookAppointment" className="theme-btn-one">Qəbul et<i className="icon-Arrow-Right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* doctor-details end */}
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