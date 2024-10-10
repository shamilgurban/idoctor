import React from 'react';

const Footer = () => {
  return (
    <div class="main-footer">
        <div class="footer-top">
          <div class="pattern-layer">
            <div
              class="pattern-1"
              style={{
                backgroundImage: `url('../assets/images/shape/shape-30.png')`,
              }}
            ></div>
            <div
              class="pattern-2"
              style={{
                backgroundImage: `url('../assets/images/shape/shape-31.png')`,
              }}
            ></div>
          </div>
          <div class="auto-container">
            <div class="widget-section">
              <div class="row clearfix">
                <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div class="footer-widget logo-widget">
                    <figure class="footer-logo">
                      <a href="HomePage">
                        <img src={"../assets/images/footer-logo.png"} alt="" />
                      </a>
                    </figure>
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
                        <li>
                          <a href="DoctorList">Həkimlər</a>
                        </li>

                        <li>
                          <a href="Download">Yüklə</a>
                        </li>
                        <li>
                          <a href="index.html">Gizlilik Şərtləri</a>
                        </li>
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
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          Bakı, Azərbaycan
                        </li>
                        <li>
                          <i class="fas fa-phone"></i>
                          <a href="tel:23055873407">+994 10 225 15 08</a>
                        </li>
                        <li>
                          <i class="fas fa-envelope"></i>
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
              <div class="copyright pull-left">
                <p>
                  <a href="HomePage">iDoctor</a> &copy; 2024 Bütün hüquqlar
                  qorunur
                </p>
              </div>
              <ul class="footer-nav pull-right clearfix">
                <li>
                  <a href="index.html">Xidmət Şərtləri</a>
                </li>
                <li>
                  <a href="index.html">Gizlilik Şərtləri</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
