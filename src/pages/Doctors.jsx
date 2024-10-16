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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/Doctors/GetAllDoctors');
        const doctorsList = response.data.map(doctor => ({
          id: doctor.id, 
          name: `Dr. ${doctor.name} ${doctor.surname}`,
          speciality: doctor.speciality || 'Kardiologiya',
          stars: doctor.stars || 5, 
          image: doctor.image || 'assets/images/team/team-9.jpg', 
        }));
        setDoctors(doctorsList);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        setError('Failed to fetch doctors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="boxed_wrapper">
      <div className="preloader" />
      <div className="mobile-menu" />
      <section className="page-title-two" />
      <section className="clinic-section doctors-page-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 content-side">
              <div className="wrapper grid">
                <div className="clinic-grid-content grid-item">
                  <div className="row clearfix">
                    {loading ? (
                      <div className="loading-message">Loading doctors...</div>
                    ) : error ? (
                      <div className="error-message">
                        {error}
                        <button onClick={() => setLoading(true)}>Retry</button>
                      </div>
                    ) : doctors.length > 0 ? (
                      doctors.map((doctor) => (
                        <div className="col-lg-4 col-md-4 col-sm-12 team-block" key={doctor.id}>
                          <div className="team-block-three">
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src={doctor.image} alt={`Image of ${doctor.name}`} />
                              </figure>
                              <div className="lower-content">
                                <ul className="name-box clearfix">
                                  <li className="name">
                                    <h3>
                                      <a href={`/DoctorDetails/${doctor.id}`} aria-label={`View details for ${doctor.name}`}>
                                        {doctor.name}
                                      </a>
                                    </h3>
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
                                    <li>
                                      <a href={`/DoctorDetails/${doctor.id}`} aria-label={`View comments for ${doctor.name}`}>
                                        ({17})
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="location-box">
                                  <p><i className="fas fa-map-marker-alt" /> Bakı, Azərbaycan</p>
                                </div>
                                <div className="lower-box clearfix">
                                  <a href={`/DoctorDetails/${doctor.id}`} className="btn">Davam et</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="no-doctors-message">No doctors available at the moment.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="agent-section" />
      <button 
        className="scroll-top scroll-to-target" 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
      >
        <span className="fa fa-arrow-up" />
      </button>
    </div>
  );
}

export default Doctors;
