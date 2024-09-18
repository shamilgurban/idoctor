import './App.css';

function App() {
  return (
        
    <div class="boxed_wrapper">
        
        <div class="preloader"></div>


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


        <section class="banner-section style-two bg-color-1">
            <div class="bg-layer" style={{backgroundImage: `url('../assets/images/shape/banner-bg-1.jpg')`}}></div>
            <div class="pattern">
                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-32.png')`}}></div>
                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-33.png')`}}></div>
                <div class="pattern-3" style={{backgroundImage: `url('../assets/images/shape/shape-34.png')`}}></div>
                <div class="pattern-4" style={{backgroundImage: `url('../assets/images/shape/shape-35.png')`}}></div>
            </div>
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content-box">
                            <h1>Sizə Uyğun Həkim.</h1>
                            <p>Sağlamlığa gedən yolu bizimlə dəyərləndir</p>
                            <div class="form-inner">
                                <form action="index.html" method="post">
                                    <div class="form-group">
                                        <input type="text" name="name" placeholder="Ad, İxtisas və.s" required=""></input>
                                        <button type="submit"><i class="icon-Arrow-Right"></i></button>
                                    </div>
                                </form>
                                <ul class="select-box clearfix">
                                    <li>
                                    </li>
                                    <li>
                                        <div class="single-checkbox">
                                            <input type="radio" name="check-box" id="check2"></input>
                                            <label for="check2"><span></span>Həkim</label>    
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-checkbox">
                                            <input type="radio" name="check-box" id="check3"></input>
                                            <label for="check3"><span></span>Klinika</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div class="image-box js-tilt">
                            <figure class="image clearfix wow fadeInRight animated animated" data-wow-delay="00ms" data-wow-duration="1500ms"><img src={"../assets/images/banner/banner-image-1.png"} alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="search-doctors-two">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                            <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div class="inner-box">
                                    <div class="pattern" style={{backgroundImage: `url('../assets/images/shape/shape-26.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-36.png')`}}></div>
                                    <h3><br />İxtisas üzrə</h3>
                                    <ul class="doctors-list clearfix">
                                        <li><a href="doctors-profile.html">Kardiologiya</a></li>
                                        <li><a href="doctors-profile.html">Dermatologiya</a></li>
                                        <li><a href="doctors-profile.html">Mamalıq və Ginekologiya</a></li>
                                        <li><a href="doctors-profile.html">Onkologiya</a></li>
                                    </ul>
                                    <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">Hamısına bax<i class="icon-Arrow-Right"></i></a></div>
                                    <div class="link"><a href="doctors-1.html"><i class="icon-Arrow-Right"></i></a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                            <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                    <div class="pattern" style={{backgroundImage: `url('../assets/images/shape/shape-26.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-36.png')`}}></div>
                                    <h3><br />Analiz yoxlanışı</h3>
                                    <ul class="doctors-list clearfix">
                                        <li><a href="doctors-profile.html">Peşəkar həkimlər tərəfindən analizin yoxlanışı</a></li>
                                        
                                    </ul>
                                    <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">Faylı Yüklə<i class="icon-Arrow-Right"></i></a></div>
                                    <div class="link"><a href="doctors-1.html"><i class="icon-Arrow-Right"></i></a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                            <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                    <div class="pattern" style={{backgroundImage: `url('../assets/images/shape/shape-26.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-36.png')`}}></div>
                                    <h3><br />Klinika üzrə</h3>
                                    <ul class="doctors-list clearfix">
                                        <li><a href="doctors-profile.html">MedServis</a></li>
                                        <li><a href="doctors-profile.html">EGE Hospital</a></li>
                                        <li><a href="doctors-profile.html">Mərkəzi Gömrük Hospitalı</a></li>
                                        <li><a href="doctors-profile.html">Nəsrəddin Tusi adına Klinika</a></li>
                                    </ul>
                                    <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">Hamısına bax<i class="icon-Arrow-Right"></i></a></div>
                                    <div class="link"><a href="doctors-1.html"><i class="icon-Arrow-Right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="about-style-two">
            <div class="auto-container">
                <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div class="image_block_2">
                            <div class="image-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-37.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-38.png')`}}></div>
                                    <div class="pattern-3"></div>
                                </div>
                                <figure class="image image-1 paroller"><img src={"../assets/images/resource/about-1.jpg"} alt=""/></figure>
                                <figure class="image image-2 paroller-2"><img src={"../assets/images/resource/about-2.jpg"} alt=""/></figure>
                                <div class="image-content">
                                    <figure class="icon-box"><img src={"../assets/images/icons/icon-8.png"} alt=""/></figure>
                                    <span>Mütəxəssis ilə</span>
                                    <h4>danışın</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_1">
                            <div class="content-box">
                                <div class="sec-title">
                                    <p>iDoctor Haqqında</p>
                                    <h2>Bir toxunuşla yanınızda</h2>
                                </div>
                                <div class="text">
                                    <p>iDoctor, online həkim qəbulu üçün yaradılmış platformadır.</p>
                                </div>
                                <div class="btn-box"><a href="about.html" class="theme-btn-one">Haqqımızda<i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="process-style-two bg-color-3 centred">
            <div class="pattern-layer">
                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-39.png')`}}></div>
                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-40.png')`}}></div>
                <div class="pattern-3" style={{backgroundImage: `url('../assets/images/shape/shape-41.png')`}}></div>
                <div class="pattern-4" style={{backgroundImage: `url('../assets/images/shape/shape-42.png')`}}></div>
            </div>
            <div class="auto-container">
                <div class="sec-title centred">
                    <p>Addımlar</p>
                    <h2>Qəbul Prosesi</h2>
                </div>
                <div class="inner-content">
                    <div class="arrow" style={{backgroundImage: `url('../assets/images/icons/arrow-1.png')`}}></div>
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div class="processing-block-two">
                                <div class="inner-box">
                                    <figure class="icon-box"><img src={"../assets/images/icons/icon-9.png"} alt=""/></figure>
                                    <h3>Sizə uyğun həkimi axtarın</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div class="processing-block-two">
                                <div class="inner-box">
                                    <figure class="icon-box"><img src={"../assets/images/icons/icon-10.png"} alt=""/></figure>
                                    <h3>Profil detallarına baxın</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div class="processing-block-two">
                                <div class="inner-box">
                                    <figure class="icon-box"><img src={"../assets/images/icons/icon-11.png"} alt=""/></figure>
                                    <h3>Qəbul vaxtını təyin edin</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section bg-color-2">
            <div class="pattern-layer">
                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-17.png')`}}></div>
                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-18.png')`}}></div>
                <div class="pattern-3" style={{backgroundImage: `url('../assets/images/shape/shape-19.png')`}}></div>
            </div>
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div class="image-box wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <figure class="image"><img src={"../assets/images/resource/phone-1.png"} alt=""/></figure>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_2">
                            <div class="content-box">
                                <div class="sec-title light">
                                    <p>Yüklə</p>
                                    <h2>Sağlamlığınız artıq cibinizdə</h2>
                                </div>
                                <div class="btn-box clearfix">
                                    <a href="index.html" class="download-btn app-store">
                                        <i class="fab fa-apple"></i>
                                        <span>Download on</span>
                                        <h3>App Store</h3>
                                    </a>
                                    <a href="index.html" class="download-btn play-store">
                                        <i class="fab fa-google-play"></i>
                                        <span>Download on</span>
                                        <h3>Google Play</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div>
      <div style={{ marginBottom: '120px' }}></div>
        </div>


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


        <button class="scroll-top scroll-to-target" data-target="html">
            <span class="fa fa-arrow-up"></span>
        </button>
    </div>
    );
}

export default App;