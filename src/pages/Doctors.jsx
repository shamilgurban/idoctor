import '../App.css';
import React, { useState } from 'react';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };


function Doctors() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 1, label: 'Kardiologiya' },
    { value: 2, label: 'Ginekologiya' },
    { value: 3, label: 'Nevrologiya' },
  ];


      return (
  
        <div className="boxed_wrapper">
          <div className="preloader" />
          <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><i class="fas fa-times"></i></div>
            
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
                    
                    <div className="clinic-grid-content grid-item">
                      <div className="row clearfix">
                        
                        
                      
                        
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block">
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src="assets/images/team/team-9.jpg" alt="" />
                                
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="DoctorDetails">Dr. Nurlan İbrahimov</a></h3></li>
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
                                    <li><a href="DoctorDetails">(17)</a></li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <span className="text not-available">Uyğun deyil</span>
                                  <a href="DoctorDetails">Detallara bax</a>
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
                                
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Tural Rəhimli</a></h3></li>
                                  <li><i className="icon-Trust-1" /></li>
                                  <li><i className="icon-Trust-2" /></li>
                                </ul>
                                <span className="designation">Oftalmologiya</span>
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
                                <img src="assets/images/team/team-11.jpg" alt="" />
                               
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name"><h3><a href="doctors-details.html">Dr. Murad Nəsibli</a></h3></li>
                                  <li><i className="icon-Trust-1" /></li>
                                  <li><i className="icon-Trust-2" /></li>
                                </ul>
                                <span className="designation">Ümumi Cərrahiyə</span>
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
                                <img src="assets/images/team/team-7.jpg" alt="" />
                                
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
                                <img src="assets/images/team/team-50.jpg" alt="" />
                               
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
                                <img src="assets/images/team/team-60.jpg" alt="" />
                                
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
                                <img src="assets/images/team/team-12.jpg" alt="" />
                                
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
                                <img src="assets/images/team/team-8.jpg" alt="" />
                               
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
                                <img src="assets/images/team/team-70.jpg" alt="" />
                               
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
        <button 
        className="scroll-top scroll-to-target" 
        data-target="html" 
        onClick={scrollToTop} 
      >
        <span className="fa fa-arrow-up" />
      </button>
        </div>
      );
    }

export default Doctors;