import './App.css';

function App() {
  return (
    <div class="boxed_wrapper">

        <div class="preloader"></div>


        <header class="main-header style-three">

            <div class="header-lower">
                <div class="outer-box clearfix">
                    <div class="left-column pull-left">
                        <div class="logo-box">
                            <figure class="logo"><a href="HomePage"><img src={"../assets/images/logo-3.png"} alt=""/></a></figure>
                        </div>
                        <div class="menu-area">
                            <div class="mobile-nav-toggler">
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                      <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                        <ul className="navigation clearfix">
                          <li><a href="/">Ana Səhifə</a>
                            
                          </li> 
                          <li><a href="DoctorList">Həkimlər</a>
                            
                          </li>
                          
                          <li class="dropdown"><a href="About">Haqqımızda</a>
                                                        
                                        </li> 
                                        <li><a href="ContactUs">Əlaqə</a>
                                        </li>  
                          
                        </ul>
                      </div>
                    </nav>
                        </div>
                    </div>
                    <div className="right-column pull-right">
                        <div class="author-box">
                            <div class="icon-box"><a href="index.html"><i class="icon-Bell"></i></a></div>
                            <div class="author">
                                <figure className="author-image"><img src={"../assets/images/resource/author-1.png"} alt=""/></figure>
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
                        <h1>Profil</h1>
                    </div>
                </div>
            </div>
        </section>


        <section class="doctors-dashboard bg-color-3">
            <div class="left-panel">
                <div class="profile-box">
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
                    <li><a href="doctors-dashboard.html" className="current"><i className="fas fa-columns" />Profil</a></li>
                    <li><a href="appointment.html"><i className="fas fa-calendar-alt" />Qəbul Siyahısı</a></li>
                    <li><a href="my-patients.html"><i className="fas fa-wheelchair" />Pasiyentlərim</a></li>
                    
                    <li><a href="schedule-timing.html"><i className="fas fa-clock" />Qəbul Cədvəli</a></li>
                    <li><a href="review.html"><i className="fas fa-star" />Rəylər</a></li>
                    <li><a href="my-profile.html"><i className="fas fa-user" />Profil Tənzimləmələri</a></li>
                    <li><a href="change-password.html"><i className="fas fa-unlock-alt" />Parolu Dəyiş</a></li>
                    <li><a href="login.html"><i className="fas fa-sign-out-alt" />Hesabdan çıxış</a></li>
                  </ul>
                </div>
                </div>
            </div>
            <div class="right-panel">
                <div class="content-container">
                    <div class="outer-container">
                        <div class="feature-content">
                            <div class="row clearfix">
                                <div class="col-xl-4 col-lg-12 col-md-12 feature-block">
                                    <div class="feature-block-two">
                                        <div class="inner-box">
                                            <div class="pattern">
                                                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-79.png')`}}></div>
                                                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-80.png')`}}></div>
                                            </div>
                                            <div class="icon-box"><i class="icon-Dashboard-1"></i></div>
                                            <h3>2375</h3>
                                            <h5>Ümumi Xəstələr</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-12 col-md-12 feature-block">
                                    <div class="feature-block-two">
                                        <div class="inner-box">
                                            <div class="pattern">
                                                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-81.png')`}}></div>
                                                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-82.png')`}}></div>
                                            </div>
                                            <div class="icon-box"><i class="icon-Dashboard-3"></i></div>
                                            <h3>275</h3>
                                            <h5>Yeni təyinatlar</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="doctors-appointment">
                            <div class="title-box">
                                <h3>Qəbul Siyahısı</h3>
                                <div class="btn-box">
                                    <a href="patient-dashboard.html" class="theme-btn-one">Yenilər<i class="icon-Arrow-Right"></i></a>
                                    <a href="patient-dashboard.html" class="theme-btn-two">Bügun</a>
                                </div>
                            </div>
                            <div class="doctors-list">
                                <div class="table-outer">
                                    <table class="doctors-table">
                                        <thead class="table-header">
                                            <tr>
                                                <th>Ad</th>
                                                <th>Qəbul vaxtı</th>
                                                <th>Yoxlanış</th>
                                                <th>Məbləğ</th>
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                            </tr>    
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="name-box">
                                                        <figure class="image"><img src={"../assets/images/resource/dashboard-doc-1.png"} alt=""/></figure>
                                                        <h5>Nurlan İbrahimov</h5>
                                                        <span class="designation">#LK1024T01</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>16 Sentyabr 2024</p>
                                                    <span class="time">10:30</span>
                                                </td>
                                                <td>
                                                    <p>Ümumi</p>
                                                </td>
                                                <td>
                                                    <p>50 AZN</p>
                                                </td>
                                                <td>
                                                    <a href="patient-dashboard.html" class="accept"><i class="fas fa-check"></i>Qəbul et</a>
                                                </td>
                                                <td>
                                                    <a href="patient-dashboard.html" class="cancel"><i class="fas fa-times"></i>İmtina et</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="name-box">
                                                        <figure class="image"><img src={"../assets/images/resource/dashboard-doc-1.png"} alt=""/></figure>
                                                        <h5>Şamil Qurbanlı</h5>
                                                        <span class="designation">#LK1024T02</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>17 Sentyabr 2024</p>
                                                    <span class="time">12:30</span>
                                                </td>
                                                <td>
                                                    <p>Ümumi</p>
                                                </td>
                                                <td>
                                                    <p>50 AZN</p>
                                                </td>
                                                <td>
                                                    <a href="patient-dashboard.html" class="accept"><i class="fas fa-check"></i>Qəbul et</a>
                                                </td>
                                                <td>
                                                    <a href="patient-dashboard.html" class="cancel"><i class="fas fa-times"></i>İmtina et</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="name-box">
                                                        <figure class="image"><img src={"../assets/images/resource/dashboard-doc-1.png"} alt=""/></figure>
                                                        <h5>Nərgiz Abbasova</h5>
                                                        <span class="designation">#LK1024T03</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>17 Sentyabr 2024</p>
                                                    <span class="time">14:30</span>
                                                </td>
                                                <td>
                                                    <p>Ümumi</p>
                                                </td>
                                                <td>
                                                    <p>50 AZN</p>
                                                </td>
                                                <td>
                                                    <a href="patient-dashboard.html" class="accept"><i class="fas fa-check"></i>Qəbul et</a>
                                                </td>
                                                <td>
                                                    <a href="patient-dashboard.html" class="cancel"><i class="fas fa-times"></i>İmtina et</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="name-box">
                                                        <figure class="image"><img src={"../assets/images/resource/dashboard-doc-1.png"} alt=""/></figure>
                                                        <h5>Nicat Qasımov</h5>
                                                        <span class="designation">#LK1024T04</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>17 Sentyabr 2024</p>
                                                    <span class="time">16:30</span>
                                                </td>
                                                <td>
                                                    <p>Ümumi</p>
                                                </td>
                                                <td>
                                                    <p>50 AZN</p>
                                                </td>
                                                <td>
                                                    <a href="patient-dashboard.html" class="accept"><i class="fas fa-check"></i>Qəbul et</a>
                                                </td>
                                                <td>
                                                    <a href="patient-dashboard.html" class="cancel"><i class="fas fa-times"></i>İmtina et</a>
                                                </td>
                                            </tr>
                                            
                                        </tbody>    
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


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
                        <figure className="footer-logo"><a href="HomePage"><img src="assets/images/footer-logo.png" alt="" /></a></figure>
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
                                            <li><a href="DoctorList">Həkimlər</a></li>
                                         
                                            <li><a href="Download">Yüklə</a></li>
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
                        <div class="copyright pull-left"><p><a href="HomePage">iDoctor</a> &copy; 2024 Bütün hüquqlar qorunur</p></div>
                        <ul class="footer-nav pull-right clearfix">
                            <li><a href="index.html">Xidmət Şərtləri</a></li>
                            <li><a href="index.html">Gizlilik Şərtləri</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          </footer>


        <button class="scroll-top scroll-to-target" data-target="html">
            <span class="fa fa-arrow-up"></span>
        </button>
    </div>
  );
}

export default App;