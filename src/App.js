import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="boxed_wrapper">
        <div class="preloader"></div>
        <header class="main-header style-one">
            <div class="header-top">
                <div class="auto-container">
                    <div class="top-inner clearfix">
                        <div class="top-right pull-right">
                            <ul class="info clearfix">
                                <li><a href="register-page.html">Sign in</a></li>
                                <li><a href="service-1.html">Career</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li class="language">
                                    <a href="index.html">Eng</a>
                                    <ul class="language-dropdown">
                                        <li><a href="index.html">English</a></li>
                                        <li><a href="index.html">Spanish</a></li>
                                        <li><a href="index.html">China</a></li>
                                        <li><a href="index.html">Latin</a></li>
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
                            <div class="pattern" style={{backgroundImage: `url('../assets/images/shape/shape-1.png')`}}></div>
                            <div class="bg-color"></div>
                            <figure class="logo"><a href="index.html"><img src={'../assets/images/logo.png'} alt=""/></a></figure>
                        </div>
                        <div class="menu-area">
                            <div class="mobile-nav-toggler">
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                            </div>
                            <nav class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation scroll-nav clearfix">
                                        <li class="current dropdown"><a href="index.html">Home</a>
                                            <ul>
                                                <li><a href="index.html">Home Page 01</a></li>
                                                <li><a href="index-2.html">Home Page 02</a></li>
                                                <li><a href="index-3.html">Home Page 03</a></li>
                                                <li><a href="index-4.html">Home Page 04</a></li>
                                                <li><a href="index-5.html">Home Page 05</a></li>
                                                <li><a href="index-onepage.html">OnePage Home</a></li>
                                                <li><a href="index-rtl.html">RTL Home</a></li>
                                            </ul>
                                        </li> 
                                        <li><a href="#feature">Feature</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#testimonial">Testimonials</a></li>
                                        <li><a href="#team">Team</a></li>
                                        <li><a href="#news">News</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="btn-box"><a href="register-page.html" class="theme-btn-one"><i class="icon-image"></i>Join Now</a></div>
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
                        <div class="btn-box"><a href="register-page.html" class="theme-btn-one"><i class="icon-image"></i>Join Now</a></div>
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
                        <li>Chicago 12, Melborne City, USA</li>
                        <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                        <li><a href="mailto:info@example.com">info@example.com</a></li>
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


        <section class="banner-section bg-color-1">
            <div class="pattern-layer" style={{backgroundImage: `url('assets/images/shape/shape-2.png')`}}></div>
            <div class="auto-container">
                <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content-box">
                            <h1>Find Nearest Doctor.</h1>
                            <p>Amet consectetur adipisicing elit sed do eiusmod.</p>
                            <div class="form-inner">
                                <form action="index.html" method="post">
                                    <div class="form-group">
                                        <input type="text" name="name" placeholder="Ex. Name, Specialization..." required=""/>
                                        <button type="submit"><i class="icon-Arrow-Right"></i></button>
                                    </div>
                                </form>
                                <ul class="select-box clearfix">
                                    <li>
                                        <div class="single-checkbox">
                                            <input type="radio" name="check-box" id="check1" checked=""/>
                                            <label for="check1"><span></span>All</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-checkbox">
                                            <input type="radio" name="check-box" id="check2"/>
                                            <label for="check2"><span></span>Doctor</label>    
                                        </div>
                                    </li>
                                    <li>
                                        <div class="single-checkbox">
                                            <input type="radio" name="check-box" id="check3"/>
                                            <label for="check3"><span></span>Clinic</label>
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


        <section class="clients-section bg-color-2">
            <div class="pattern-layer">
                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-3.png')`}}></div>
                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-4.png')`}}></div>
            </div>
            <div class="auto-container">
                <div class="auto-container">
                    <div class="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
                        <figure class="clients-logo-box"><a href="index.html"><img src={"../assets/images/clients/clients-logo-1.png"} alt=""/></a></figure>
                        <figure class="clients-logo-box"><a href="index.html"><img src={"../assets/images/clients/clients-logo-2.png"} alt=""/></a></figure>
                        <figure class="clients-logo-box"><a href="index.html"><img src={"../assets/images/clients/clients-logo-3.png"} alt=""/></a></figure>
                        <figure class="clients-logo-box"><a href="index.html"><img src="assets/images/clients/clients-logo-4.png" alt=""/></a></figure>
                        <figure class="clients-logo-box"><a href="index.html"><img src="assets/images/clients/clients-logo-5.png" alt=""/></a></figure>
                    </div>
                </div>
            </div>
        </section>


        <section class="feature-section centred bg-color-3" id="feature">
            <div class="pattern-layer">
                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-13.png')`}}></div>
                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-14.png')`}}></div>
            </div>
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-5.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-9.png')`}}></div>
                                </div>
                                <figure class="icon-box"><img src={"../assets/images/icons/icon-1.png"} alt=""/></figure>
                                <p>Appointment With</p>
                                <h3>Nearest Clinic</h3>
                                <div class="link"><a href="appointment.html"><i class="icon-Arrow-Right"></i></a></div>
                                <div class="btn-box"><a href="appointment.html" class="theme-btn-one">Chat now<i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-6.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-10.png')`}}></div>
                                </div>
                                <figure class="icon-box"><img src={"../assets/images/icons/icon-2.png"} alt=""/></figure>
                                <p>Live Chat With</p>
                                <h3>Doctor</h3>
                                <div class="link"><a href="appointment.html"><i class="icon-Arrow-Right"></i></a></div>
                                <div class="btn-box"><a href="appointment.html" class="theme-btn-one">Chat now<i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-7.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-11.png')`}}></div>
                                </div>
                                <figure class="icon-box"><img src={"../assets/images/icons/icon-3.png"} alt=""/></figure>
                                <p>Appoinment With Top</p>
                                <h3>Specialist</h3>
                                <div class="link"><a href="appointment.html"><i class="icon-Arrow-Right"></i></a></div>
                                <div class="btn-box"><a href="appointment.html" class="theme-btn-one">Chat now<i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-8.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-12.png')`}}></div>
                                </div>
                                <figure class="icon-box"><img src={"../assets/images/icons/icon-4.png"} alt=""/></figure>
                                <p>24/7 Active Support</p>
                                <h3>Help Support</h3>
                                <div class="link"><a href="appointment.html"><i class="icon-Arrow-Right"></i></a></div>
                                <div class="btn-box"><a href="appointment.html" class="theme-btn-one">Chat now<i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="about-section" id="about">
            <div class="auto-container">
                <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div class="image_block_1">
                            <div class="image-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-15.png')`}}></div>
                                    <div class="pattern-2"></div>
                                    <div class="pattern-3" style={{backgroundImage: `url('../assets/images/shape/shape-16.png')`}}></div>
                                </div>
                                <figure class="image clearfix"><img src={"../assets/images/resource/about-1.png"} alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_1">
                            <div class="content-box">
                                <div class="sec-title">
                                    <p>About Docpro</p>
                                    <h2>Bring care to your home with one click</h2>
                                </div>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.</p>
                                </div>
                                <ul class="list-style-one clearfix">
                                    <li>Associates Insurance</li>
                                    <li>Pina & Insurance</li>
                                </ul>
                                <div class="btn-box"><a href="about.html" class="theme-btn-one">About Us<i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="process-section bg-color-2">
            <div class="pattern-layer">
                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-17.png')`}}></div>
                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-18.png')`}}></div>
                <div class="pattern-3" style={{backgroundImage: `url('../assets/images/shape/shape-19.png')`}}></div>
                <div class="pattern-4" style={{backgroundImage: `url('../assets/images/shape/shape-20.png')`}}></div>
            </div>
            <div class="auto-container">
                <div class="sec-title light centred">
                    <p>Process</p>
                    <h2>Appointment Process</h2>
                </div>
                <div class="inner-content">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div class="processing-block-one">
                                <div class="inner-box">
                                    <figure class="icon-box">
                                        <img src={"../assets/images/icons/icon-5.png"} alt=""/>
                                        <span>01</span>
                                    </figure>
                                    <h3>Search Best Online Professional</h3>
                                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div class="processing-block-one">
                                <div class="inner-box">
                                    <figure class="icon-box">
                                        <img src={"../assets/images/icons/icon-6.png"} alt=""/>
                                        <span>02</span>
                                    </figure>
                                    <h3>View Professional Profile</h3>
                                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div class="processing-block-one">
                                <div class="inner-box">
                                    <figure class="icon-box">
                                        <img src={"../assets/images/icons/icon-7.png"} alt=""/>
                                        <span>03</span>
                                    </figure>
                                    <h3>Get Instant Doctor Appoinment</h3>
                                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="testimonial-section bg-color-3" id="testimonial">
            <div class="bg-layer" style={{backgroundImage: `url('../assets/images/background/testimonial-1.jpg')`}}></div>
            <div class="pattern-layer">
                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-22.png')`}}></div>
                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-23.png')`}}></div>
            </div>
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-xl-7 col-lg-12 col-md-12 inner-column">
                        <div class="testimonial-inner">
                            <div class="pattern" style={{backgroundImage: `url('../assets/images/shape/shape-21.png')`}}></div>
                            <div class="sec-title">
                                <p>Testimonials</p>
                                <h2>What client’s say?</h2>
                            </div>
                            <div class="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                                <div class="testimonial-block-one">
                                    <div class="inner-box">
                                        <div class="text">
                                            <p>“ Lorem ipsum dolor sit amet consectetur adipic  eksed do eiusmod tempor incid unt labore dolore magna Aliqua.enim minim veniam, quis nostrud. “</p>
                                        </div>
                                        <div class="author-info">
                                            <figure class="author-thumb"><img src={"../assets/images/resource/testimonial-1.png"} alt=""/></figure>
                                            <h3>Amelia Anna</h3>
                                            <span class="designation">Amelia Anna</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-block-one">
                                    <div class="inner-box">
                                        <div class="text">
                                            <p>“ Lorem ipsum dolor sit amet consectetur adipic  eksed do eiusmod tempor incid unt labore dolore magna Aliqua.enim minim veniam, quis nostrud. “</p>
                                        </div>
                                        <div class="author-info">
                                            <figure class="author-thumb"><img src={"../assets/images/resource/testimonial-1.png"} alt=""/></figure>
                                            <h3>Amelia Anna</h3>
                                            <span class="designation">Amelia Anna</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-block-one">
                                    <div class="inner-box">
                                        <div class="text">
                                            <p>“ Lorem ipsum dolor sit amet consectetur adipic  eksed do eiusmod tempor incid unt labore dolore magna Aliqua.enim minim veniam, quis nostrud. “</p>
                                        </div>
                                        <div class="author-info">
                                            <figure class="author-thumb"><img src={"../assets/images/resource/testimonial-1.png"} alt=""/></figure>
                                            <h3>Amelia Anna</h3>
                                            <span class="designation">Amelia Anna</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="team-section" id="team">
            <div class="auto-container">
                <div class="sec-title centred">
                    <p>Meet Our Professionals</p>
                    <h2>Top Rated Specialists</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                        <div class="team-block-one wow fadeInLeft animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-24.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-25.png')`}}></div>
                                </div>
                                <figure class="image-box"><img src={"../assets/images/team/team-1.jpg"} alt=""/></figure>
                                <div class="content-box">
                                    <div class="like-box"><a href="index.html"><i class="far fa-heart"></i></a></div>
                                    <ul class="name-box clearfix">
                                        <li class="name"><h3><a href="doctors-details.html">Dr. Julia Jhones</a></h3></li>
                                        <li><i class="icon-Trust-1"></i></li>
                                        <li><i class="icon-Trust-2"></i></li>
                                    </ul>
                                    <span class="designation">MBBS, MS - General Surgery, MCh</span>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor.</p>
                                    </div>
                                    <div class="rating-box clearfix">
                                        <ul class="rating clearfix">
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><a href="index.html">(32)</a></li>
                                        </ul>
                                        <div class="link"><a href="index.html">Available Today</a></div>
                                    </div>
                                    <div class="location-box">
                                        <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                        <div class="team-block-one wow fadeInRight animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-24.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-25.png')`}}></div>
                                </div>
                                <figure class="image-box"><img src={"../assets/images/team/team-2.jpg"} alt=""/></figure>
                                <div class="content-box">
                                    <div class="like-box"><a href="index.html"><i class="far fa-heart"></i></a></div>
                                    <ul class="name-box clearfix">
                                        <li class="name"><h3><a href="doctors-details.html">Dr. Mary Astor</a></h3></li>
                                        <li><i class="icon-Trust-1"></i></li>
                                        <li><i class="icon-Trust-2"></i></li>
                                    </ul>
                                    <span class="designation">MDS - Periodontology and BDS</span>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor.</p>
                                    </div>
                                    <div class="rating-box clearfix">
                                        <ul class="rating clearfix">
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><a href="index.html">(32)</a></li>
                                        </ul>
                                        <div class="link not-available"><a href="index.html">Available Today</a></div>
                                    </div>
                                    <div class="location-box">
                                        <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                        <div class="team-block-one wow fadeInLeft animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-24.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-1.png')`}}></div>
                                </div>
                                <figure class="image-box"><img src={"../assets/images/team/team-3.jpg"} alt=""/></figure>
                                <div class="content-box">
                                    <div class="like-box"><a href="index.html"><i class="far fa-heart"></i></a></div>
                                    <ul class="name-box clearfix">
                                        <li class="name"><h3><a href="doctors-details.html">Dr. Rex Allen</a></h3></li>
                                        <li><i class="icon-Trust-1"></i></li>
                                        <li><i class="icon-Trust-2"></i></li>
                                    </ul>
                                    <span class="designation">BDS, MDS - Maxillofacial Surgery</span>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor.</p>
                                    </div>
                                    <div class="rating-box clearfix">
                                        <ul class="rating clearfix">
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><a href="index.html">(32)</a></li>
                                        </ul>
                                        <div class="link"><a href="index.html">Available Today</a></div>
                                    </div>
                                    <div class="location-box">
                                        <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 team-block">
                        <div class="team-block-one wow fadeInRight animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern">
                                    <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-24.png')`}}></div>
                                    <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-25.png')`}}></div>
                                </div>
                                <figure class="image-box"><img src={"../assets/images/team/team-4.jpg"} alt=""/></figure>
                                <div class="content-box">
                                    <div class="like-box"><a href="index.html"><i class="far fa-heart"></i></a></div>
                                    <ul class="name-box clearfix">
                                        <li class="name"><h3><a href="doctors-details.html">Dr. Stella Adler</a></h3></li>
                                        <li><i class="icon-Trust-1"></i></li>
                                        <li><i class="icon-Trust-2"></i></li>
                                    </ul>
                                    <span class="designation">MDS - Periodontology and BDS</span>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet consectur adipisc elit sed eiusmod tempor.</p>
                                    </div>
                                    <div class="rating-box clearfix">
                                        <ul class="rating clearfix">
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><i class="icon-Star"></i></li>
                                            <li><a href="index.html">(32)</a></li>
                                        </ul>
                                        <div class="link"><a href="index.html">Available Today</a></div>
                                    </div>
                                    <div class="location-box">
                                        <p><i class="fas fa-map-marker-alt"></i>G87P, Birmingham, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="more-btn centred"><a href="doctors-1.html" class="theme-btn-one">All Specialist<i class="icon-Arrow-Right"></i></a></div>
            </div>
        </section>


        <section class="search-doctors bg-color-3">
            <div class="pattern-layer">
                <div class="pattern-1" style={{backgroundImage: `url('../assets/images/shape/shape-27.png')`}}></div>
                <div class="pattern-2" style={{backgroundImage: `url('../assets/images/shape/shape-28.png')`}}></div>
                <div class="pattern-3" style={{backgroundImage: `url('../assets/images/shape/shape-29.png')`}}></div>
            </div>
            <div class="auto-container">
                <div class="sec-title centred">
                    <p>Meet Our Professionals</p>
                    <h2>Search for other doctors</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                        <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern" style={{backgroundImage: `url('../assets/images/shape/shape-26.png')`}}></div>
                                <h3>Browse <br />by Speciality</h3>
                                <ul class="doctors-list clearfix">
                                    <li><a href="doctors-profile.html">Cardiology</a></li>
                                    <li><a href="doctors-profile.html">Dermatology</a></li>
                                    <li><a href="doctors-profile.html">Family Medicine</a></li>
                                    <li><a href="doctors-profile.html">Obstetrics & Gynecology</a></li>
                                    <li><a href="doctors-profile.html">Oncology</a></li>
                                    <li><a href="doctors-profile.html">Orthopedic Surgery</a></li>
                                </ul>
                                <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">See all<i class="icon-Arrow-Right"></i></a></div>
                                <div class="link"><a href="doctors-1.html"><i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                        <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern" style={{backgroundImage: `url('../assets/images/shape/shape-26.png')`}}></div>
                                <h3>Browse <br />by Condition</h3>
                                <ul class="doctors-list clearfix">
                                    <li><a href="doctors-profile.html">Breast Cancer</a></li>
                                    <li><a href="doctors-profile.html">Dementia</a></li>
                                    <li><a href="doctors-profile.html">Endometriosis</a></li>
                                    <li><a href="doctors-profile.html">Multiple Sclerosis (MS)</a></li>
                                    <li><a href="doctors-profile.html">Fibromyalgia</a></li>
                                    <li><a href="doctors-profile.html">Parkinson's Disease</a></li>
                                </ul>
                                <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">See all<i class="icon-Arrow-Right"></i></a></div>
                                <div class="link"><a href="doctors-1.html"><i class="icon-Arrow-Right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 doctors-block">
                        <div class="doctors-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <div class="pattern" style={{backgroundImage: `url('../assets/images/shape/shape-26.png')`}}></div>
                                <h3>Browse <br />by Procedure</h3>
                                <ul class="doctors-list clearfix">
                                    <li><a href="doctors-profile.html">ACL Surgery</a></li>
                                    <li><a href="doctors-profile.html">EEG (Electroencephalogram)</a></li>
                                    <li><a href="doctors-profile.html">Hysterectomy</a></li>
                                    <li><a href="doctors-profile.html">Knee Replacement</a></li>
                                    <li><a href="doctors-profile.html">Multiple Sclerosis Therapy</a></li>
                                    <li><a href="doctors-profile.html">Prostate Removal</a></li>
                                </ul>
                                <div class="btn-box"><a href="doctors-1.html" class="theme-btn-one">See all<i class="icon-Arrow-Right"></i></a></div>
                                <div class="link"><a href="doctors-1.html"><i class="icon-Arrow-Right"></i></a></div>
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
                                    <p>Download apps</p>
                                    <h2>For Better Test Download Mobile App</h2>
                                </div>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna.</p>
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


        <section class="news-section" id="news">
            <div class="auto-container">
                <div class="sec-title centred">
                    <p>News & Article</p>
                    <h2>Stay Update With Docpro</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img src={"../assets/images/news/news-1.jpg"} alt=""/>
                                    <a href="blog-details" class="link"><i class="fas fa-link"></i></a>
                                    <span class="category">Featured</span>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="blog-details.html">Including animation in your design system</a></h3>
                                    <ul class="post-info">
                                        <li><img src={"../assets/images/news/admin-1.png"} alt=""/><a href="index.html">Eva Green</a></li>
                                        <li>April 10, 2020</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing sed.</p>
                                    <div class="link"><a href="blog-details.html"><i class="icon-Arrow-Right"></i></a></div>
                                    <div class="btn-box"><a href="blog-details.html" class="theme-btn-one">Read more<i class="icon-Arrow-Right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img src={"../assets/images/news/news-2.jpg"} alt=""/>
                                    <a href="blog-details" class="link"><i class="fas fa-link"></i></a>
                                    <span class="category">Featured</span>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="blog-details.html">Baking can be done with a few things.</a></h3>
                                    <ul class="post-info">
                                        <li><img src={"../assets/images/news/admin-2.png"} alt=""/><a href="index.html">George Clooney</a></li>
                                        <li>April 09, 2020</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing sed.</p>
                                    <div class="link"><a href="blog-details.html"><i class="icon-Arrow-Right"></i></a></div>
                                    <div class="btn-box"><a href="blog-details.html" class="theme-btn-one">Read more<i class="icon-Arrow-Right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <img src={"../assets/images/news/news-3.jpg"} alt=""/>
                                    <a href="blog-details" class="link"><i class="fas fa-link"></i></a>
                                    <span class="category">Featured</span>
                                </figure>
                                <div class="lower-content">
                                    <h3><a href="blog-details.html">Great food is not just eating energy.</a></h3>
                                    <ul class="post-info">
                                        <li><img src={"../assets/images/news/admin-3.png"} alt=""/><a href="index.html">George Clooney</a></li>
                                        <li>April 08, 2020</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing sed.</p>
                                    <div class="link"><a href="blog-details.html"><i class="icon-Arrow-Right"></i></a></div>
                                    <div class="btn-box"><a href="blog-details.html" class="theme-btn-one">Read more<i class="icon-Arrow-Right"></i></a></div>
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
                                    <h3>Emergency call</h3>
                                    <div class="support-box">
                                        <div class="icon-box"><i class="fas fa-phone"></i></div>
                                        <span>Telephone</span>
                                        <h3><a href="tel:11165458856">+(111) 65_458_856</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 right-column">
                            <div class="content_block_4">
                                <div class="content-box">
                                    <h3>Sign up for Email</h3>
                                    <form action="index.html" method="post" class="subscribe-form">
                                        <div class="form-group">
                                            <input type="email" name="email" placeholder="Your Email" required=""/>
                                            <button type="submit" class="theme-btn-one">Submit now<i class="icon-Arrow-Right"></i></button>
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
                                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget links-widget">
                                    <div class="widget-title">
                                        <h3>About</h3>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="links clearfix">
                                            <li><a href="index.html">About Us</a></li>
                                            <li><a href="index.html">Listing</a></li>
                                            <li><a href="index.html">How It Works</a></li>
                                            <li><a href="index.html">Our Services</a></li>
                                            <li><a href="index.html">Our Blog</a></li>
                                            <li><a href="index.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget links-widget">
                                    <div class="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="links clearfix">
                                            <li><a href="index.html">Specialist</a></li>
                                            <li><a href="index.html">Clinic</a></li>
                                            <li><a href="index.html">Hospital</a></li>
                                            <li><a href="index.html">Download App</a></li>
                                            <li><a href="index.html">Join as a Doctor</a></li>
                                            <li><a href="index.html">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div class="footer-widget contact-widget">
                                    <div class="widget-title">
                                        <h3>Contacts</h3>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="info-list clearfix">
                                            <li><i class="fas fa-map-marker-alt"></i>
                                                Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                                            </li>
                                            <li><i class="fas fa-microphone"></i>
                                                <a href="tel:23055873407">+2(305) 587-3407</a>
                                            </li>
                                            <li><i class="fas fa-envelope"></i>
                                                <a href="mailto:info@example.com">info@example.com</a>
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
                        <div class="copyright pull-left"><p><a href="index.html">Docpro</a> &copy; 2020 All Right Reserved</p></div>
                        <ul class="footer-nav pull-right clearfix">
                            <li><a href="index.html">Terms of Service</a></li>
                            <li><a href="index.html">Privacy Policy</a></li>
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