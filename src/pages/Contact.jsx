import '../App.css';
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

function Contact() {
      return (
  
        <div className="boxed_wrapper">
          {/* preloader */}
          <div className="preloader" />
          {/* preloader */}
          {/* Mobile Menu  */}
          <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><i class="fas fa-times"></i></div>
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="/"><img src={"../assets/images/logo-2.png"} alt="" title=""/></a></div>
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
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div className="image_block_4">
                    <div className="image-box" >
                      <figure className="image">
                      <img src="assets/images/resource/contact-us2.png" alt=''></img> </figure>
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
export default Contact;