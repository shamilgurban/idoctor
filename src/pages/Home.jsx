import "../App.css";
import FileUpload from "../FileUpload";
import { useState } from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
};

function App() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div class="boxed_wrapper">
      <div class="preloader"></div>

      <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn">
          <i class="fas fa-times"></i>
        </div>

        <nav class="menu-box">
          <div class="nav-logo">
            <a href="HomePage">
              <img src={"../assets/images/logo-2.png"} alt="" title="" />
            </a>
          </div>
          <div class="menu-outer"></div>
          <div class="contact-info">
            <h4>Əlaqə</h4>
            <ul>
              <li>Bakı, Azərbaycan</li>
              <li>
                <a href="tel:+994102251508">+994 10 225 15 08</a>
              </li>
              <li>
                <a href="mailto:info@idoktor.az">info@idoktor.az</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <section class="banner-section style-one bg-color-1">
        <div
          class="bg-layer"
          style={{
            backgroundImage: `url('../assets/images/shape/banner-bg-1.jpg')`,
          }}
        ></div>
        <div class="pattern">
          <div
            class="pattern-1"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-32.png')`,
            }}
          ></div>
          <div
            class="pattern-2"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-33.png')`,
            }}
          ></div>
          <div
            class="pattern-3"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-34.png')`,
            }}
          ></div>
          <div
            class="pattern-4"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-35.png')`,
            }}
          ></div>
        </div>
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
              <div class="content-box">
              <div style={{ marginBottom: "120px" }}></div>
                <h1>Sizə Uyğun Həkim.</h1>
                <p>Sağlamlığa gedən yolu bizimlə dəyərləndir</p>
                
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
              <div class="image-box js-tilt">
                <figure
                  class="image clearfix wow fadeInRight animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <img
                    src={"../assets/images/banner/banner-image-1.png"}
                    alt=""
                  />
                </figure>
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
                    <div
                      class="pattern-1"
                      style={{
                        backgroundImage: `url('../assets/images/shape/shape-37.png')`,
                      }}
                    ></div>
                    <div
                      class="pattern-2"
                      style={{
                        backgroundImage: `url('../assets/images/shape/shape-38.png')`,
                      }}
                    ></div>
                    <div class="pattern-3"></div>
                  </div>
                  <figure class="image image-1 paroller">
                    <img src={"../assets/images/resource/about-1.jpg"} alt="" />
                  </figure>
                  <figure class="image image-2 paroller-2">
                    <img src={"../assets/images/resource/about-2.jpg"} alt="" />
                  </figure>
                  <div class="image-content">
                    <figure class="icon-box">
                      <img src={"../assets/images/icons/icon-8.png"} alt="" />
                    </figure>
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
                    <h6>iDoktor Haqqında</h6>
                    <h2>Bir toxunuşla yanınızda</h2>
                  </div>
                  <div class="text">
                    <p>
                      iDoktor, online həkim qəbulu üçün yaradılmış platformadır.
                    </p>
                  </div>
                  <div class="btn-box">
                    <a href="/About" class="theme-btn-one">
                      Haqqımızda<i class="icon-Arrow-Right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="process-style-two bg-color-3 centred">
        <div class="pattern-layer">
          <div
            class="pattern-1"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-39.png')`,
            }}
          ></div>
          <div
            class="pattern-2"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-40.png')`,
            }}
          ></div>
          <div
            class="pattern-3"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-41.png')`,
            }}
          ></div>
          <div
            class="pattern-4"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-42.png')`,
            }}
          ></div>
        </div>
        <div class="auto-container">
          <div class="sec-title centred">
            <p>Addımlar</p>
            <h2>Qəbul Prosesi</h2>
          </div>
          <div class="inner-content">
            <div
              class="arrow"
              style={{
                backgroundImage: `url('../assets/images/icons/arrow-1.png')`,
              }}
            ></div>
            <div class="row clearfix">
              <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                <div class="processing-block-two">
                  <div class="inner-box">
                    <figure class="icon-box">
                      <img src={"../assets/images/icons/icon-9.png"} alt="" />
                    </figure>
                    <h3>Sizə uyğun həkimi axtarın</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                <div class="processing-block-two">
                  <div class="inner-box">
                    <figure class="icon-box">
                      <img src={"../assets/images/icons/icon-10.png"} alt="" />
                    </figure>
                    <h3>Profil detallarına baxın</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 processing-block">
                <div class="processing-block-two">
                  <div class="inner-box">
                    <figure class="icon-box">
                      <img src={"../assets/images/icons/icon-11.png"} alt="" />
                    </figure>
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
          <div
            class="pattern-1"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-17.png')`,
            }}
          ></div>
          <div
            class="pattern-2"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-18.png')`,
            }}
          ></div>
          <div
            class="pattern-3"
            style={{
              backgroundImage: `url('../assets/images/shape/shape-19.png')`,
            }}
          ></div>
        </div>
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
              <div
                class="image-box wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <figure class="image">
                  <img src={"../assets/images/resource/phone-1.png"} alt="" />
                </figure>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
              <div class="content_block_2">
                <div class="content-box">
                  <div className="sec-title light">
                    <p>Yüklə</p>
                    <h2>Sağlamlığınız artıq cibinizdə</h2>
                  </div>
                  <div class="btn-box clearfix text-nowrap">
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
        <div style={{ marginBottom: "30px" }}></div>
      </div>

      
      

      <button
        className="scroll-top scroll-to-target"
        data-target="html"
        onClick={scrollToTop} // Add onClick handler here
      >
        <span className="fa fa-arrow-up" />
      </button>

      {showPopup && <FileUpload setShowPopup={setShowPopup} />}
    </div>
  );
}

export default App;
