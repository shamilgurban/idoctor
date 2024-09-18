import './App.css';
import Select from 'react-select';
import React, { useState } from 'react';


function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 1, label: 'Kardiologiya' },
    { value: 2, label: 'Ginekologiya' },
    { value: 3, label: 'Nevrologiya' },
  ];


      return (
  
        <div className="boxed_wrapper">
          <div className="preloader" />
          <header className="main-header style-two">
            <div className="header-lower">
              <div className="auto-container">
                <div className="outer-box">
                  <div className="logo-box">
                    <figure className="logo"><a href="index.html"><img src="assets/images/logo-3.png" alt="" /></a></figure>
                  </div>
                  <div className="menu-area">
                    <div className="mobile-nav-toggler">
                      <i className="icon-bar" />
                      <i className="icon-bar" />
                      <i className="icon-bar" />
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                    <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix">
                                        <li><a href="index.html">Ana Səhifə</a>
                                        </li> 
                                        <li className='current'><a href="index.html">Həkimlər</a>
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
        </div>
          <section className="page-title-two">
            <div className="title-box centred bg-color-2">
              <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-70.png)'}} />
                <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-71.png)'}} />
              </div>
              <div className="auto-container">
                <div className="title">
                  <h1>Həkimlər</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="clinic-section doctors-page-section">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                  <div className="wrapper grid">
                    <div className="clinic-list-content">
                      <div className="clinic-block-one">
                        <div className="inner-box">
                          <div className="pattern">
                            <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-24.png)'}} />
                            <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-25.png)'}} />
                          </div>
                          <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                          <div className="content-box">
                            <div className="like-box"><a href="doctors-details.html"><i className="far fa-heart" /></a></div>
                            <ul className="name-box clearfix">
                              <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
                              <li><i className="icon-Trust-1" /></li>
                              <li><i className="icon-Trust-2" /></li>
                            </ul>
                            <span className="designation">MBBS, MS - General Surgery, MCh</span>
                            <div className="text">
                              <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna.</p>
                            </div>
                            <div className="rating-box clearfix">
                              <ul className="rating clearfix">
                                <li><i className="icon-Star" /></li>
                                <li><i className="icon-Star" /></li>
                                <li><i className="icon-Star" /></li>
                                <li><i className="icon-Star" /></li>
                                <li><i className="icon-Star" /></li>
                                <li><a href="doctors-details.html">(17)</a></li>
                              </ul>
                              <div className="link"><a href="doctors-details.html">24/7 Available</a></div>
                            </div>
                            <div className="location-box">
                              <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                            </div>
                            <div className="btn-box"><a href="doctors-details.html">Detallara Bax</a></div>
                          </div>
                        </div>
                      </div>
                      
                      
                      <div className="clinic-block-one">
                        <div className="inner-box">
                          <div className="pattern">
                            <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-24.png)'}} />
                            <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-25.png)'}} />
                          </div>
                          <figure className="image-box"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                          <div className="content-box">
                            <div className="like-box"><a href="doctors-details.html"><i className="far fa-heart" /></a></div>
                            <ul className="name-box clearfix">
                              <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
                              <li />
                              <li><i className="icon-Trust-2" /></li>
                            </ul>
                            <span className="designation">Kardiologiya</span>
                            <div className="text">
                              <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor incididunt labore dolore magna.</p>
                            </div>
                            <div className="rating-box clearfix">
                              <ul className="rating clearfix">
                                <li><i className="icon-Star" /></li>
                                <li><i className="icon-Star" /></li>
                                <li><i className="icon-Star" /></li>
                                <li><i className="icon-Star" /></li>
                                <li><i className="icon-Star" /></li>
                                <li><a href="doctors-details.html">(20)</a></li>
                              </ul>
                              <div className="link"><a href="doctors-details.html">Online</a></div>
                            </div>
                            <div className="location-box">
                              <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                            </div>
                            <div className="btn-box"><a href="doctors-details.html">Detallara Bax</a></div>
                          </div>
                        </div>
                      </div>
                      
                      
                    </div>
                    <div className="clinic-grid-content grid-item">
                      <div className="row clearfix">
                        
                        
                      
                        
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-9.jpg" alt="" />
                                <a href="doctors-details.html"><i className="far fa-heart" /></a>
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="doctors-details.html">(17)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text not-available">Uyğun deyil</span>
                                  <a href="doctors-details.html">Detallara bax</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-9.jpg" alt="" />
                                <a href="doctors-details.html"><i className="far fa-heart" /></a>
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="doctors-details.html">(30)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text">Online</span>
                                  <a href="doctors-details.html">Detallara Bax</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-9.jpg" alt="" />
                                <a href="doctors-details.html"><i className="far fa-heart" /></a>
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="doctors-details.html">(30)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text">Online</span>
                                  <a href="doctors-details.html">Detallara Bax</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-10.jpg" alt="" />
                                <a href="doctors-details.html"><i className="far fa-heart" /></a>
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="doctors-details.html">(12)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text">Online</span>
                                  <a href="doctors-details.html">Detallara Bax</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-11.jpg" alt="" />
                                <a href="doctors-details.html"><i className="far fa-heart" /></a>
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="doctors-details.html">(05)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text not-available">Uyğun deyil</span>
                                  <a href="doctors-details.html">Detallara Bax</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-11.jpg" alt="" />
                                <a href="doctors-details.html"><i className="far fa-heart" /></a>
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="doctors-details.html">(05)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text not-available">Uyğun deyil</span>
                                  <a href="doctors-details.html">Detallara Bax</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-9.jpg" alt="" />
                                <a href="doctors-details.html"><i className="far fa-heart" /></a>
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="doctors-details.html">(30)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text">Online</span>
                                  <a href="doctors-details.html">Detallara Bax</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-9.jpg" alt="" />
                                <a href="doctors-details.html"><i className="far fa-heart" /></a>
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="doctors-details.html">(30)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text">Online</span>
                                  <a href="doctors-details.html">Detallara Bax</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-9.jpg" alt="" />
                                <a href="doctors-details.html"><i className="far fa-heart" /></a>
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="doctors-details.html">(30)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text">Online</span>
                                  <a href="doctors-details.html">Detallara Bax</a>
                                </div>
                              </div>
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
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fa fa-arrow-up" />
          </button>
        </div>
      );
    }

    export default App;