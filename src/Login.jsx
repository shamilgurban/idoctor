import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import axiosInstance from "./axiosConfig";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

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

      if (response.data?.token) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);

        const user = await fetchUser(email);

        if (user && user.types === 2) {
          const doctor = await fetchDoctor(email);
          if (doctor && !doctor.isVerified) {
            toast.error("Hesab təsdiqlənməyi gözləyir.");
            return;
          }
        }

        toast.success("Uğurla daxil oldunuz!");
        window.location.href = "/";
      } else {
        toast.error("Email və ya şifrə səhvdir.");
      }
    } catch (error) {
      handleLoginError(email);
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async (email) => {
    const response = await axiosInstance.get("http://localhost:8080/api/Auth/GetAllUsers");
    return response.data.find(user => user.email === email);
  };

  const fetchDoctor = async (email) => {
    const response = await axiosInstance.get("http://localhost:8080/api/Doctors/GetAllDoctors");
    return response.data.find(doc => doc.email === email);
  };

  const handleLoginError = async (email) => {
    const user = await fetchUser(email);

    if (user) {
      const doctor = await fetchDoctor(email);
      if (doctor && !doctor.isVerified) {
        toast.error("Hesab təsdiqlənməyi gözləyir.");
      } else {
        toast.error("Email və ya şifrə səhvdir.");
      }
    } else {
      toast.error("Email və ya şifrə səhvdir.");
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
                    <div className="col-lg-12 form-group">
                      <div className="forgot-password clearfix">
                        <a href="/forgotpass">Şifrəmi unutdum?</a>
                      </div>
                    </div>
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
      <footer className="main-footer">
        <div className="footer-top">
          <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: `url('../assets/images/shape/shape-30.png')` }}></div>
            <div className="pattern-2" style={{ backgroundImage: `url('../assets/images/shape/shape-31.png')` }}></div>
          </div>
          <div className="auto-container">
            <div className="widget-section">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget logo-widget">
                    <figure className="footer-logo"><a href="/"><img src={"../assets/images/footer-logo.png"} alt="" /></a></figure>
                    <div className="text">
                      <p>Sağlamlığa gedən yolu bizimlə dəyərləndir.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3>Keçidlər</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="links clearfix">
                        <li><a href="DoctorList">Həkimlər</a></li>
                        <li><a href="Download">Yüklə</a></li>
                        <li><a href="index.html">Gizlilik Şərtləri</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget contact-widget">
                    <div className="widget-title">
                      <h3>Əlaqə</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="info-list clearfix">
                        <li><i className="fas fa-map-marker-alt"></i> Bakı, Azərbaycan</li>
                        <li><i className="fas fa-phone"></i>
                          <a href="tel:23055873407">+994 10 225 15 08</a>
                        </li>
                        <li><i className="fas fa-envelope"></i>
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
      </footer>
      <ToastContainer />
    </div>
  );
}

export default Login;
