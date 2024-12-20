import '../App.css'; 
import '../Doctor.css'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios"; 
import { toast, ToastContainer } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function DoctorDetails() {
    const { id } = useParams(); 

    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [analyses, setAnalyses] = useState([]); 
    const [selectedAnalysis, setSelectedAnalysis] = useState(""); 
    const [file, setFile] = useState(null);
    const [price, setPrice] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get(`http://94.20.82.6:8080/api/Doctors/GetDoctorById/${id}`);
                const doctorData = response.data;

                if (!doctorData) {
                    setError("Bu ID ilə həkim tapılmadı");
                } else {
                    setDoctor(doctorData);
                    setPrice(doctorData.price); 
                }
            } catch (error) {
                console.error("Error fetching doctor's details!", error);
                setError("Həkimləri yükləməkdə xəta baş verdi, yenidən cəh edin");
            } finally {
                setLoading(false);
            }
        };

        const fetchAnalyses = async () => {
            try {
                const response = await axios.get("http://94.20.82.6:8080/api/Analyses/GetAllAnalyses");
                setAnalyses(response.data); 
            } catch (error) {
                console.error("Error fetching analyses!", error);
                setError("Analizləri göstərməkdə xəta yarandı, yenidən sınayın"); 
            }
        };

        fetchDoctorDetails();
        fetchAnalyses();
        scrollToTop();
    }, [id]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); 
    };


    const handleSubmit = async () => {
    const patientId = localStorage.getItem('patientId'); 
    const doctorId = doctor?.id;
    const appointmentDate = document.querySelector('input[name="date"]').value; 

    const combinedAppointmentDate = `${appointmentDate} ${selectedTime}`;


    if (!patientId) {
         toast.error("Görüş təyin etmək üçün hesabınıza giriş etməlisiniz.");
        return; 
    }

    if (!selectedAnalysis || !file || !appointmentDate || !selectedTime) {
        toast.error("Xahiş olunur görüş təyin etmək üçün bütün xanaları doldurun.");
        return;
    }

    const appointmentData = new FormData(); 
    appointmentData.append("PatientId", patientId);
    appointmentData.append("DoctorId", doctorId);
    appointmentData.append("AnalysisId", selectedAnalysis);
    appointmentData.append("AppointmentDate", combinedAppointmentDate); 
    appointmentData.append("AnalysisDocument", file); 

    try {
        const response = await axios.post("http://94.20.82.6:8080/api/Appointments/CreateAppointment", appointmentData, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            },
        });
        toast.success("Görüş təyin edildi!"); 
    } catch (error) {
        console.error("Error creating appointment:", error); 
        toast.error("Görüş təyin edilmədi, yenidən sınayın."); 
    }
};


    if (loading) {
        return <div className="loading-message">Yüklənir...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!doctor) {
        return <div>Həkim məlumatları yoxdur.</div>;
    }

    return (
        <div className="boxed_wrapper">
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
                                            <img src={doctor.image || "/assets/images/staticdoc.avif"} alt={`Dr. ${doctor.name}`} />
                                        </figure>
                                        <div className="content-box">
                                            <div className="like-box">
                                                <a className='py-2' href="#"><i className="far fa-heart py-1" /></a>
                                            </div>
                                            <div className="share-box">
                                                <a href="#" className="share-btn py-2"><i className="fas fa-share-alt py-1" /></a>
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
                                                    {[...Array(doctor.stars || 5)].map((_, i) => (
                                                        <li key={i}><i className="icon-Star" /></li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/*<div className="text">
                                                <p>Lorem ipsum dolor sit amet consectur adipisc eiusmod tempor incididunt.</p>
                                            </div>*/}
                                            <div className="lower-box clearfix">
                                                <ul className="info clearfix">
                                                    <li><i className="fas fa-map-marker-alt" />Bakı, Azərbaycan</li>
                                                    <li><i className="fas fa-phone" /><a href={`tel:${doctor.phone}`}>{doctor.phone}</a></li>
                                                    <li><i className="fas fa-tag" /> 20 AZN</li>
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
                                                    <p>Dr. {doctor.name} {doctor.surname} haqqında məlumat yoxdur</p>
                                                    <h3>İxtisaslar</h3>
                                                    {/*<ul className="treatments-list clearfix">
                                                        <li><a href="#">Kardiologiya</a></li>
                                                        <li><a href="#">Kardio Cərrahiyyə</a></li>
                                                        <li><a href="#">İnvaziv Kardiologiya</a></li>
                                                    </ul>
                                                    <h3>Təhsil</h3>
                                                    <ul className="list clearfix">
                                                        <li>Azərbaycan Tibb Universiteti <span>- Müalicə işi</span></li>
                                                        <li>Tədris Tibbi Cərrahiyyə <span>- Kardiologiya</span></li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Appointment Booking Form */}
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="doctor-details-widget">
                                <div className="widget-title">
                                    <h3>Həkim Qəbulu</h3>
                                    <p>Bazar ertəsi - Cümə: 09:00 - 17:00</p>
                                </div>
                                <div className="appointment-form">
                                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                                        <div className="form-group app-form">
                                            <label htmlFor="analyses">Seçin Analiz:</label>
                                            <select
                                                id="analyses"
                                                value={selectedAnalysis}
                                                onChange={(e) => setSelectedAnalysis(e.target.value)}
                                                required
                                            >
                                                <option value="">Seçin</option>
                                                {analyses.map((analysis) => (
                                                    <option key={analysis.id} value={analysis.id}>
                                                        {analysis.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group app-form">
                                            <label htmlFor="date">Tarix seçin:</label>
                                            <input type="date" name="date" required />
                                        </div>
                                        <div className="form-group app-form">
                                            <label htmlFor="time">Vaxt seçin:</label>
                                            <select
                                                id="time"
                                                value={selectedTime}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                required
                                            >
                                                <option value="">Seçin</option>
                                                <option value="09:00">09:00</option>
                                                <option value="10:00">10:00</option>
                                                <option value="11:00">11:00</option>
                                                <option value="12:00">12:00</option>
                                                <option value="13:00">13:00</option>
                                                <option value="14:00">14:00</option>
                                                <option value="15:00">15:00</option>
                                                <option value="16:00">16:00</option>
                                                <option value="17:00">17:00</option>
                                            </select>
                                        </div>
                                        <div className="form-group app-form">
                                            <label htmlFor="file">Fayl yükləyin:</label>
                                            <input type="file" name="file" onChange={handleFileChange} required />
                                        </div>
                                           <div className="form-group app-form">
                                            <p>Qiymət: 20 AZN</p>
                                        </div>
                                        <button type="submit" className="theme-btn">Təqdim et</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <ToastContainer />
        </div>
    );
}

export default DoctorDetails;
