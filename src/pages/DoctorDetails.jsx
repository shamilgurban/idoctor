import '../App.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

function App() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/Doctors/GetAllDoctors"
                );
                const doctors = response.data;

                const foundDoctor = doctors.find((doc) => doc.id === parseInt(id));
                setDoctor(foundDoctor);

                if (!foundDoctor) {
                    setError("No doctor found with the provided ID.");
                }
            } catch (error) {
                console.error("Error fetching doctors' details!", error);
                setError("Failed to fetch doctor's details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchDoctorDetails();
        scrollToTop();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>{error}</div>; 
    }

    if (!doctor) {
        return <div>No doctor data available.</div>; 
    }

    return (
        <div className="boxed_wrapper">
            {/* Preloader */}
            <div className="preloader" />
            {/* Mobile Menu */}
            <div className="mobile-menu">
                {/* Mobile Menu Code... */}
            </div>
            {/* Page Title */}
            <section className="page-title-two">
                <div className="title-box centred bg-color-2">
                    <div className="auto-container">
                        <div className="title">
                            <h1>Həkim Məlumatları</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* Doctor Details */}
            <section className="doctor-details bg-color-3">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="clinic-details-content doctor-details-content">
                                <div className="clinic-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box">
                                            <img src={doctor.image || "assets/images/team/team-33.jpg"} alt={`Dr. ${doctor.name}`} />
                                        </figure>
                                        <div className="content-box">
                                            <div className="like-box">
                                                <a href="#"><i className="far fa-heart" /></a>
                                            </div>
                                            <div className="share-box">
                                                <a href="#" className="share-btn"><i className="fas fa-share-alt" /></a>
                                            </div>
                                            <ul className="name-box clearfix">
                                                <li className="name">
                                                    <h2>Dr. {doctor.name} {doctor.surname}</h2>
                                                </li>
                                                <li><i className="icon-Trust-1" /></li>
                                                <li><i className="icon-Trust-2" /></li>
                                            </ul>
                                            <span className="designation">{doctor.speciality || 'Kardiologiya'}</span>
                                            <div className="rating-box clearfix">
                                                <ul className="rating clearfix">
                                                    {[...Array(doctor.stars)].map((_, i) => (
                                                        <li key={i}><i className="icon-Star" /></li>
                                                    ))}
                                                    <li><a href="#comments">({17})</a></li>
                                                </ul>
                                            </div>
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit amet consectur adipisc eiusmod tempor incididunt.</p>
                                            </div>
                                            <div className="lower-box clearfix">
                                                <ul className="info clearfix">
                                                    <li><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</li>
                                                    <li><i className="fas fa-phone" /><a href="tel:2265458856">+994 12 345 67 89</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs-box">
                                    <div className="tabs-content">
                                        <div className="tab active-tab" id="tab-1">
                                            <div className="inner-box">
                                                <div className="text">
                                                    <h3>Haqqında</h3>
                                                    <p>Dr. {doctor.name} {doctor.surname}  Nyu-Yorkda, Nyu-Yorkda üz-çənə cərrahıdır. Dr. Ayres öz sahəsindəki digər mütəxəssislərlə müqayisədə anadangəlmə ürək pozğunluqları və ürəyə qulluq sahəsində daha çox təcrübəyə malikdir. O, Mount Sinai Morningside və Ruzvelt Xəstəxanası kimi tibb müəssisələri ilə bağlıdır. O, yeni xəstələri qəbul edir. Görüş sifariş etmək üçün Dr. Pinney ilə əvvəlcədən zəng etməyinizə əmin olun.</p>
                                                    <h3>İxtisaslar</h3>
                                                    <ul className="treatments-list clearfix">
                                                        <li><a href="#">Kardiologiya</a></li>
                                                        <li><a href="#">Kardio Cərrahiyyə</a></li>
                                                        <li><a href="#">İnvaziv Kardiologiya</a></li>
                                                    </ul>
                                                    <h3>Təhsil</h3>
                                                    <ul className="list clearfix">
                                                        <li>Azərbaycan Tibb Universiteti <span>- Müalicə işi</span></li>
                                                        <li>Tədris Tibbi Cərrahiyyə <span>- Kardiologiya</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="doctors-sidebar">
                                <div className="form-widget">
                                    <div className="form-title">
                                        <h3>Həkim qəbulu</h3>
                                        <p>Bazar ertəsi - Cümə: 09:00 - 17:00</p>
                                    </div>
                                    <div className="form-inner">
                                        <div className="appointment-time">
                                            <div className="form-group">
                                                <input type="text" name="date" placeholder="07/08/2020" id="datepicker" />
                                                <i className="fas fa-calendar-alt" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="time" placeholder="Any Time" />
                                                <i className="far fa-clock" />
                                            </div>
                                        </div>
                                        <div className="total-box">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
