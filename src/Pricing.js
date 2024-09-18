import './App.css'
import React, { useState } from 'react';

function App() {
          
          const [activeTab, setActiveTab] = useState('#tab-1');
          
          const handleTabClick = (tab) => {setActiveTab(tab);};
  
 return(
    
        <div className="boxed_wrapper">
          {/* preloader */}
          <div className="preloader" />
          {/* preloader */}
          {/* main header */}
          <header class="main-header style-two">
            <div class="header-top">
                <div class="auto-container">
                    <div class="top-inner clearfix">
                        <div class="top-left pull-left">
                            <ul class="info clearfix">
                                <li><i class="fas fa-map-marker-alt"></i>Bakı, Azərbaycan</li>
                                <li><i class="fas fa-phone"></i><a href="tel:+994102251508">+994 10 225 15 08</a></li>
                            </ul>
                        </div>
                        <div class="top-right pull-right">
                            <ul class="info clearfix">
                                <li><a href="register-page.html">Daxil ol</a></li>
                                <li><a href="service-1.html">Karyera</a></li>
                                <li class="language">
                                    <a href="index.html">AZ</a>
                                    <ul class="language-dropdown">
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

            <div class="header-lower">
                <div class="auto-container">
                    <div class="outer-box">
                        <div class="logo-box">
                            <figure class="logo"><a href="index.html"><img src={"../assets/images/logo-3.png"} alt=""/></a></figure>
                        </div>
                        <div class="menu-area">
                            <div class="mobile-nav-toggler">
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
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
                        <div class="btn-box"><a href="register-page.html" class="theme-btn-one"><i class="icon-image"></i>Bizə qoşul</a></div>
                    </div>
                </div>
            </div>

            <div class="sticky-header">
                <div class="auto-container">
                    <div class="outer-box">
                        <div class="logo-box">
                            <figure class="logo"><a href="index.html"><img src={"../assets/images/small-logo.png"} alt=""/></a></figure>
                        </div>
                        <div class="menu-area">
                            <nav class="main-menu clearfix">
                            </nav>
                        </div>
                        <div class="btn-box"><a href="register-page.html" class="theme-btn-one"><i class="icon-image"></i>Bizə qoşul</a></div>
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
                    <h4>Contact Info</h4>
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
                  <h1>Qiymətlər</h1>
                </div>
              </div>
            </div>
            
          </section>
          {/*page-title-two end*/}
          {/* pricing-section */}
          <section className="pricing-section bg-color-3 sec-pad">
            <div className="auto-container">
              <div className="sec-title centred">
                <p>Qiymət cədvəli</p>
                <h2>Sizin üçün uyğun olan planı seçin</h2>
              </div>
              <div className="tabs-box">
                 <div className="tabs-box">
      <div className="tab-btn-box centred">
        <ul className="tab-btns tab-buttons clearfix">
          <li className={`tab-btn ${activeTab === '#tab-1' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab-1')}>Aylıq</li>
          <li className={`tab-btn ${activeTab === '#tab-2' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab-2')}>İllik</li>
         </ul>
      </div>
    </div>    
                <div className="tabs-content">
                  <div className="tab active-tab" id="tab-1">
                    <div className="row clearfix">
                      <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                          <div className="pricing-table">
                            <div className="pattern">
                              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-75.png)'}} />
                              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-76.png)'}} />
                            </div>
                            <div className="table-header">
                              <h2>Sadə Paket</h2>
                              <h3>40 AZN</h3>
                            </div>
                            <div className="table-content">
                              <ul className="list clearfix">
                                <li>Lorem ipsum</li>
                                <li>Lorem İpsum</li>
                                <li className="light">Lorem İpsum</li>
                                <li className="light">Lorem İpsum</li>
                              </ul>
                            </div>
                            <div className="table-footer">
                              <div className="link"><a href="pricing.html"><i className="icon-Arrow-Right" /></a></div>
                              <div className="btn-box"><a href="pricing.html" className="theme-btn-one">Paketi Al<i className="icon-Arrow-Right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                          <div className="pricing-table active">
                            <div className="pattern">
                              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-75.png)'}} />
                              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-76.png)'}} />
                              <div className="pattern-3" style={{backgroundImage: 'url(assets/images/shape/shape-77.png)'}} />
                            </div>
                            <div className="table-header">
                              <h2>Popular Paket</h2>
                              <h3>60 AZN</h3>
                            </div>
                            <div className="table-content">
                              <ul className="list clearfix">
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                                <li className="light">Lorem İpsum</li>
                              </ul>
                            </div>
                            <div className="table-footer">
                              <div className="link"><a href="pricing.html"><i className="icon-Arrow-Right" /></a></div>
                              <div className="btn-box"><a href="pricing.html" className="theme-btn-one">Paketi Al<i className="icon-Arrow-Right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                          <div className="pricing-table">
                            <div className="pattern">
                              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-75.png)'}} />
                              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-76.png)'}} />
                            </div>
                            <div className="table-header">
                              <h2>Premium Paket</h2>
                              <h3>80 AZN</h3>
                            </div>
                            <div className="table-content">
                              <ul className="list clearfix">
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                              </ul>
                            </div>
                            <div className="table-footer">
                              <div className="link"><a href="pricing.html"><i className="icon-Arrow-Right" /></a></div>
                              <div className="btn-box"><a href="pricing.html" className="theme-btn-one">Paketi Al<i className="icon-Arrow-Right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab" id="tab-2">
                    <div className="row clearfix">
                      <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                          <div className="pricing-table">
                            <div className="pattern">
                              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-75.png)'}} />
                              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-76.png)'}} />
                            </div>
                            <div className="table-header">
                              <h2>Sadə Paket</h2>
                              <h3>360 AZN</h3>
                            </div>
                            <div className="table-content">
                              <ul className="list clearfix">
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                                <li className="light">Lorem İpsum</li>
                                <li className="light">Lorem İpsum</li>
                              </ul>
                            </div>
                            <div className="table-footer">
                              <div className="link"><a href="pricing.html"><i className="icon-Arrow-Right" /></a></div>
                              <div className="btn-box"><a href="pricing.html" className="theme-btn-one">Paketi Al<i className="icon-Arrow-Right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                          <div className="pricing-table active">
                            <div className="pattern">
                              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-75.png)'}} />
                              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-76.png)'}} />
                              <div className="pattern-3" style={{backgroundImage: 'url(assets/images/shape/shape-77.png)'}} />
                            </div>
                            <div className="table-header">
                              <h2>Popular Paket</h2>
                              <h3>640 AZN</h3>
                            </div>
                            <div className="table-content">
                              <ul className="list clearfix">
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                                <li className="light">Lorem İpsum</li>
                              </ul>
                            </div>
                            <div className="table-footer">
                              <div className="link"><a href="pricing.html"><i className="icon-Arrow-Right" /></a></div>
                              <div className="btn-box"><a href="pricing.html" className="theme-btn-one">Paketi Al<i className="icon-Arrow-Right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one">
                          <div className="pricing-table">
                            <div className="pattern">
                              <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-75.png)'}} />
                              <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-76.png)'}} />
                            </div>
                            <div className="table-header">
                              <h2>Premium Paket</h2>
                              <h3>850 AZN</h3>
                            </div>
                            <div className="table-content">
                              <ul className="list clearfix">
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                                <li>Lorem İpsum</li>
                              </ul>
                            </div>
                            <div className="table-footer">
                              <div className="link"><a href="pricing.html"><i className="icon-Arrow-Right" /></a></div>
                              <div className="btn-box"><a href="pricing.html" className="theme-btn-one">Paketi Al<i className="icon-Arrow-Right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* pricing-section end */}
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