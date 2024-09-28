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
    <div class="boxed_wrapper">

        <div class="preloader"></div>


        <header class="main-header style-two">

        <div className="header-lower">
              <div className="auto-container">
                <div className="outer-box">
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
                  <div className="btn-box"><a href="Register" className="theme-btn-one"><i className="icon-image" />Bizə qoşul</a></div>
                </div>
              </div>
            </div>

            <div class="sticky-header">
                <div class="auto-container">
                    <div class="outer-box">
                        <div class="logo-box">
                            <figure class="logo"><a href="HomePage"><img src={"../assets/images/small-logo.png"} alt=""/></a></figure>
                        </div>
                        <div class="menu-area">
                            <nav class="main-menu clearfix">
                            </nav>
                        </div>
                        <div class="btn-box"><a href="Register" class="theme-btn-one"><i class="icon-image"></i>Bizə qoşul</a></div>
                    </div>
                </div>
            </div>
        </header>

        <div className="mobile-menu">
            <div className="menu-backdrop" />
            <div className="close-btn"><i className="fas fa-times" /></div>
            <nav className="menu-box">
              <div className="nav-logo"><a href="HomePage"><img src="assets/images/logo-2.png" alt="" title /></a></div>
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
          </div>


        <section class="page-title-two">
            <div class="title-box centred bg-color-2">
                <div class="pattern-layer">
                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-70.png')`}}></div>
                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-71.png')`}}></div>
                </div>
                <div class="auto-container">
                    <div class="title">
                        <h1>Qeydiyyat</h1>
                    </div>
                </div>
            </div>
            
        </section>


        <section class="registration-section bg-color-3">
            <div class="pattern">
                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-85.png')`}}></div>
                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-86.png')`}}></div>
            </div>
            <div class="auto-container">
                <div class="inner-box">
                    <div class="content-box">
                        <div class="title-box">
                            <h3>Qeydiyyat</h3>
                            <a href="RegisterforDoc">Həkimsiniz ?</a>
                        </div>
                        <div class="inner">
                            <form action="register-page.html" method="post" class="registration-form">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Ad</label>
                                        <input type="text" name="fname" placeholder="Adınızı daxil edin" required=""></input>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <label>Soyad</label>
                                        <input type="text" name="lname" placeholder="Soyadınızı daxil edin" required=""></input>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="E-poçtunuzu daxil edin" required=""></input>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Şifrə</label>
                                        <input type="password" name="password" placeholder="Şifrəni daxil edin" required=""></input>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Şifrəni təsdiqləyin</label>
                                        <input type="password" name="cpassword" placeholder="Şifrəni təsdiqləyin" required=""></input>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <div class="custom-check-box">
                                            <div class="custom-controls-stacked">
                                                <label class="custom-control material-checkbox">
                                                    <input type="checkbox" class="material-control-input"></input>
                                                    <span class="material-control-indicator"></span>
                                                    <span class="description">Mən <a href="book-appointment.html">şərtləri</a> və <a href="book-appointment.html">ümumi siyasəti</a> qəbul edirəm</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                        <button type="submit" class="theme-btn-one">Qeydiyyatdan keç<i class="icon-Arrow-Right"></i></button>
                                    </div>
                                </div>
                            </form>
                            <div class="text"><span>or</span></div>
                            
                            <div class="login-now"><p>Hesabınız var ? <a href="register-page.html">Daxil ol</a></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


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
                        <div class="copyright pull-left"><p><a href="index.html">iDoctor</a> &copy; 2024 Bütün hüquqlar qorunur</p></div>
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