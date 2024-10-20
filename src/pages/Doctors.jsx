import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
};

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/Doctors/GetAllDoctors')
      .then(response => {
        const doctorsList = response.data.map(doctor => ({
          id: doctor.id,
          name: `Dr. ${doctor.name} ${doctor.surname}`,
          speciality: 'Kardiologiya', 
          stars: 5, 
        }));
        setDoctors(doctorsList);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  return (
    <div className="boxed_wrapper">
      <div className="preloader" />
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><i className="fas fa-times"></i></div>
        <nav className="menu-box">
          <div className="nav-logo"><a href="/"><img src={"../assets/images/logo-2.png"} alt="" title=""/></a></div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Əlaqə</h4>
            <ul>
              <li>Bakı, Azərbaycan</li>
              <li><a href="tel:+994102251508">+994 10 225 15 08</a></li>
              <li><a href="mailto:info@idoktor.az">info@idoktor.az</a></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li><a href="index.html"><span className="fab fa-twitter"></span></a></li>
              <li><a href="index.html"><span className="fab fa-facebook-square"></span></a></li>
              <li><a href="index.html"><span className="fab fa-pinterest-p"></span></a></li>
              <li><a href="index.html"><span className="fab fa-instagram"></span></a></li>
              <li><a href="index.html"><span className="fab fa-youtube"></span></a></li>
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
                    {doctors.map((doctor, index) => (
                      <div className="col-lg-4 col-md-4 col-sm-12 team-block" key={index}>
                        <div className="team-block-three">
                          <div className="inner-box">
                            <figure className="image-box">
                              <img src="assets/images/staticdoc.avif" alt="" />
                            </figure>
                            <div className="lower-content">
                              <ul className="name-box clearfix">
                                <li className="name">
                                  <h3><a href={`/DoctorDetails/${doctor.id}`}>{doctor.name}</a></h3>
                                </li>
                                <li><i className="icon-Trust-1" /></li>
                                <li><i className="icon-Trust-2" /></li>
                              </ul>
                              <span className="designation">{doctor.speciality}</span>
                              <div className="rating-box clearfix">
                                <ul className="rating clearfix">
                                  {[...Array(doctor.stars)].map((_, i) => (
                                    <li key={i}><i className="icon-Star" /></li>
                                  ))}
                                  <li><a href={`/DoctorDetails/${doctor.id}`}>(17)</a></li>
                                </ul>
                              </div>
                              <div className="location-box">
                                <p><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</p>
                              </div>
                              <div className="lower-box clearfix">
                                <a href={localStorage.getItem('doctorId') > 0 ? `/DoctorDash` : `/DoctorDetails/${doctor.id}`}>Davam et</a> 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="agent-section">
        <div className="auto-container">
          <div className="inner-container bg-color-2">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                <div className="content_block_3">
                  <div className="content-box">
                    <h3>Bizimlə Əlaqə</h3>
                    <div className="support-box">
                      <div className="icon-box"><i className="fas fa-phone"></i></div>
                      <span>Tel</span>
                      <h3><a href="tel:+994102251508">+(994) 10 225 15 08</a></h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                <div className="content_block_4">
                  <div className="content-box">
                    <h3>Abunə ol</h3>
                    <form action="index.html" method="post" className="subscribe-form">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Mail adresiniz" required="" />
                        <button type="submit" className="theme-btn-one">Abunə Ol<i className="icon-Arrow-Right"></i></button>
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
