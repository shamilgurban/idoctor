import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import axiosInstance from "../axiosConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Email və şifrə daxil edilməlidir!");
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.post("/Auth/Login", { email, password });
      console.log("Login response:", response.data); 

      if (response.data?.token) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);

        const userId = response.data.userId; 
        if (userId) {
          localStorage.setItem("userId", userId);
          console.log("User ID stored:", userId); 
        } else {
          console.warn("User ID not found in response.");
        }

        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        await fetchPatientId(email);
        const isVerified = await checkUserAndDoctor(email);
        if (isVerified) {
          toast.success("Uğurla daxil oldunuz!");
          window.location.href = "/";
        }
      } else {
        toast.error("Email və ya şifrə səhvdir.");
      }
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 403) {
        toast.error("Giriş icazəniz yoxdur. Xahiş edirik administrator ilə əlaqə saxlayın.");
      } else {
        toast.error("Xəta baş verdi. Yenidən cəhd edin.");
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchPatientId = async (email) => {
    try {
      const response = await axiosInstance.get("http://localhost:8080/api/Patients/GetAllPatients");
      const patients = response.data;
      const patient = patients.find((patient) => patient.email === email);

      if (patient) {
        localStorage.setItem("patientId", patient.id); 
        console.log("Patient ID stored:", patient.id); 
      } else {
        console.warn("Patient not found for the email:", email);
      }
    } catch (error) {
      console.error("Error fetching patients:", error.response ? error.response.data : error.message);
      toast.error("Xəta baş verdi. Yenidən cəhd edin.");
    }
  };

  const checkUserAndDoctor = async (email) => {
    try {
      const userResponse = await axiosInstance.get("/Auth/GetAllUsers");
      const user = userResponse.data.find((user) => user.email === email);
      if (user && user.type === 'Doctor') {
        console.log('here')
        const doctorResponse = await axiosInstance.get("/Doctors/GetAllDoctors");
        const doctor = doctorResponse.data.find((doc) => doc.email === email);
        localStorage.setItem('doctorId', doctor.id)
      }
      return true; 
    } catch (error) {
      console.error("Error fetching user/doctor data:", error.response ? error.response.data : error.message);
      toast.error("Xəta baş verdi. Əgər hesabınız varsa, təsdiq barədə email alacaqsınız.");
      return false;
    }
  };

  return (
    <div className="boxed_wrapper">
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner">Yüklənir...</div>
        </div>
      )}
      <section className="page-title-two">
        <div className="title-box centred bg-color-2">
          <div className="auto-container">
            <div className="title">
              <h1>Daxil ol</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="registration-section bg-color-3">
        <div className="auto-container">
          <div className="inner-box">
            <div className="content-box">
              <div className="title-box">
                <h3>Daxil ol</h3>
              </div>
              <div className="inner">
                <form onSubmit={handleLogin} className="registration-form">
                  <div className="row clearfix">
                    <div className="col-lg-12 form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-poçtunuzu daxil edin"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-12 form-group">
                      <label>Şifrə</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Şifrənizi daxil edin"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "120px" }}></div>
                    <div className="col-lg-12 form-group message-btn">
                      <button
                        type="submit"
                        className="theme-btn-one"
                        disabled={loading}
                      >
                        {loading ? "Yüklənir..." : "Daxil ol"}
                        <i className="icon-Arrow-Right" />
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text">
                  <span>or</span>
                </div>
                <div className="login-now">
                  <p>
                    Hesabınız yoxdur? <a href="/register">Qeydiyyatdan keç</a>
                  </p>
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

export default Login;
