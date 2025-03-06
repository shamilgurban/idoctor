import './App.css'

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
                    <figure className="logo"><a href="index.html"><img src="assets/images/logo-3.png" alt="" /></a></figure>
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
                          <li><a href="index.html">Ana Səhifə</a>
                            
                          </li> 
                          <li><a href="index.html">Həkimlər</a>
                            
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
                </div>
                <div className="right-column pull-right">
                  <div className="author-box">
                    <div className="icon-box"><a href="index.html"><i className="icon-Bell" /></a></div>
                    <div className="author">
                      <figure className="author-image"><img src="assets/images/resource/author-1.png" alt="" /></figure>
                      <div className="select-box">
                      <select className="wide">
                          <option data-display="Dr. Nurlan İbrahimov"></option>
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
                    <figure className="logo"><a href="index.html"><img src="assets/images/small-logo.png" alt="" /></a></figure>
                  </div>
                  <div className="menu-area">
                    <nav className="main-menu clearfix">
                      {/*Keep This Empty / Menu will come through Javascript*/}
                    </nav>
                  </div>
                  <div className="select-box">
                        <select className="wide">
                          <option data-display="Dr. Nurlan İbrahimov"></option>
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
              <div className="nav-logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="" title /></a></div>
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
                  <h1>Pasiyentlərim</h1>
                </div>
              </div>
            </div>
           
          </section>
          {/*page-title-two end*/}
          {/* doctors-dashboard */}
          <section className="doctors-dashboard bg-color-3">
            <div className="left-panel">
              <div className="profile-box">
                <div className="upper-box">
                  <figure className="profile-image"><img src="assets/images/resource/profile-2.png" alt="" /></figure>
                  <div className="title-box centred">
                    <div className="inner">
                      <h3>Dr. Nurlan İbrahimov</h3>
                      <p>Kardioloq</p>
                    </div>
                  </div>
                </div>
                <div className="profile-info">
                  <ul className="list clearfix">
                    <li><a href="doctors-dashboard.html"><i className="fas fa-columns" />Profil</a></li>
                    <li><a href="appointment.html" ><i className="fas fa-calendar-alt" />Qəbul Siyahısı</a></li>
                    <li><a href="my-patients.html" className="current"><i className="fas fa-wheelchair" />Pasiyentlərim</a></li>
                    
                    <li><a href="schedule-timing.html"><i className="fas fa-clock" />Qəbul Cədvəli</a></li>
                    <li><a href="review.html"><i className="fas fa-star" />Rəylər</a></li>
                    <li><a href="my-profile.html"><i className="fas fa-user" />Profil Tənzimləmələri</a></li>
                    <li><a href="change-password.html"><i className="fas fa-unlock-alt" />Parolu Dəyiş</a></li>
                    <li><a href="login.html"><i className="fas fa-sign-out-alt" />Hesabdan çıxış</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-panel">
              <div className="content-container">
                <div className="outer-container">
                  <div className="doctors-appointment my-patients">
                    <div className="title-box clearfix">
                      <div className="text pull-left">
                        <h3>Pasiyent siyahısı</h3>
                      </div>
                      <div className="btn-box pull-right">
                        <form action="my-patients.html" method="post" className="search-form">
                          <div className="form-group">
                            <input type="search" name="search-field" placeholder="Search" required />
                            <button type="submit"><i className="far fa-search" /></button>
                          </div>
                        </form>
                        <a href="patient-dashboard.html" className="theme-btn-one">Əlavə et<i className="icon-image" /></a>
                      </div>
                    </div>
                    <div className="doctors-list">
                      <div className="table-outer">
                        <table className="doctors-table">
                          <thead className="table-header">
                            <tr>
                              <th>Ad</th>
                              <th>Cins</th>
                              <th>Telefon</th>
                              <th>Yaş</th>
                              <th>Qan qrupu</th>
                            </tr>    
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="name-box">
                                  <figure className="image"><img src="assets/images/resource/patient-1.png" alt="" /></figure>
                                  <h5>Şamil Qurbanlı</h5>
                                </div>
                              </td>
                              <td>
                                <p>Kişi</p>
                              </td>
                              
                              <td>
                                <p>+994 12 345 67 89</p>
                              </td>
                              <td>
                                <p>26</p>
                              </td>
                              <td>
                                <p>O+</p>
                              </td>
                             
                            </tr>
                            <tr>
                              <td>
                                <div className="name-box">
                                  <figure className="image"><img src="assets/images/resource/patient-1.png" alt="" /></figure>
                                  <h5>Şamil Qurbanlı</h5>
                                </div>
                              </td>
                              <td>
                                <p>Kişi</p>
                              </td>
                              
                              <td>
                                <p>+994 12 345 67 89</p>
                              </td>
                              <td>
                                <p>26</p>
                              </td>
                              <td>
                                <p>O+</p>
                              </td>
                             
                              
                            </tr>
                            <tr>
                              <td>
                                <div className="name-box">
                                  <figure className="image"><img src="assets/images/resource/patient-1.png" alt="" /></figure>
                                  <h5>Şamil Qurbanlı</h5>
                                </div>
                              </td>
                              <td>
                                <p>Kişi</p>
                              </td>
                              
                              <td>
                                <p>+994 12 345 67 89</p>
                              </td>
                              <td>
                                <p>26</p>
                              </td>
                              <td>
                                <p>O+</p>
                              </td>
                              
                              
                            </tr>
                            <tr>
                              <td>
                                <div className="name-box">
                                  <figure className="image"><img src="assets/images/resource/patient-1.png" alt="" /></figure>
                                  <h5>Şamil Qurbanlı</h5>
                                </div>
                              </td>
                              <td>
                                <p>Kişi</p>
                              </td>
                              
                              <td>
                                <p>+994 12 345 67 89</p>
                              </td>
                              <td>
                                <p>26</p>
                              </td>
                              <td>
                                <p>O+</p>
                              </td>
                              
                              
                            </tr>
                            <tr>
                              <td>
                                <div className="name-box">
                                  <figure className="image"><img src="assets/images/resource/patient-1.png" alt="" /></figure>
                                  <h5>Şamil Qurbanlı</h5>
                                </div>
                              </td>
                              <td>
                                <p>Kişi</p>
                              </td>
                              
                              <td>
                                <p>+994 12 345 67 89</p>
                              </td>
                              <td>
                                <p>26</p>
                              </td>
                              <td>
                                <p>O+</p>
                              </td>
                              
                              
                            </tr>
                            <tr>
                              <td>
                                <div className="name-box">
                                  <figure className="image"><img src="assets/images/resource/patient-1.png" alt="" /></figure>
                                  <h5>Şamil Qurbanlı</h5>
                                </div>
                              </td>
                              <td>
                                <p>Kişi</p>
                              </td>
                              
                              <td>
                                <p>+994 12 345 67 89</p>
                              </td>
                              <td>
                                <p>26</p>
                              </td>
                              <td>
                                <p>O+</p>
                              </td>
                             
                              
                            </tr>
                            
                          </tbody>    
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="pagination-wrapper">
                    <ul className="pagination">
                      <li><a href="clinic-1.html" className="current">1</a></li>
                      <li><a href="clinic-1.html">2</a></li>
                      <li><a href="clinic-1.html">3</a></li>
                      <li><a href="clinic-1.html"><i className="icon-Arrow-Right" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* doctors-dashboard */}
          {/* main-footer */}
          <footer className="main-footer">
            <div className="footer-top pt-100">
              <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-30.png)'}} />
                <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-31.png)'}} />
              </div>
              <div className="auto-container">
                <div className="widget-section">
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                      <div className="footer-widget logo-widget">
                        <figure className="footer-logo"><a href="index.html"><img src="assets/images/footer-logo.png" alt="" /></a></figure>
                        <div className="text">
                          <p>Sağlamlığa gedən yolu bizimlə dəyərləndir.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                      <div className="footer-widget links-widget">
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
                    
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                      <div className="footer-widget contact-widget">
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