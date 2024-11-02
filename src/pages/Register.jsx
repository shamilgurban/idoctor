import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import '../App.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');
  const [apiError, setApiError] = useState(''); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });

    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (strongRegex.test(password)) {
      setPasswordStrength('Güclü');
    } else if (mediumRegex.test(password)) {
      setPasswordStrength('Orta');
    } else {
      setPasswordStrength('Zəif');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = "Ad boş ola bilməz!";
    else if (!/^[A-Za-z]+$/.test(formData.name)) newErrors.name = "Ad yalnız hərflərdən ibarət olmalıdır!";

    if (!formData.surname) newErrors.surname = "Soyad boş ola bilməz!";
    else if (!/^[A-Za-z]+$/.test(formData.surname)) newErrors.surname = "Soyad yalnız hərflərdən ibarət olmalıdır!";

    if (!formData.email) {
      newErrors.email = "Email boş ola bilməz!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Düzgün email formatı deyil!";
    }

    if (!formData.password) {
      newErrors.password = "Şifrə boş ola bilməz!";
    } else if (formData.password.length < 8) {
      newErrors.password = "Şifrə ən az 8 simvoldan ibarət olmalıdır!";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(formData.password)) {
      newErrors.password = "Şifrə bir böyük, bir kiçik, bir ədəd və bir simvol içerməlidir!";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Şifrəni təsdiqləmək üçün boş ola bilməz!";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Şifrələr uyğun deyil!";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Şərtləri qəbul etməlisiniz!";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://94.20.82.6:8080/api/Auth/RegisterPatient', {
        name: formData.name,
        surname: formData.surname, 
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      console.log("Registration successful:", response.data);
      setApiError('');
      toast.success('Qeydiyyatınız uğurla tamamlandı!', {
        onClose: () => {
          navigate('/login');
        },
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000);

    } catch (error) {
      console.error("There was an error registering:", error.response?.data?.message || error.message);
      setApiError('Qeydiyyat zamanı bir xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.');
    }
  };

  return (
    <div className="boxed_wrapper">
      <section className="registration-section bg-color-3">
        <div className="auto-container">
          <div className="inner-box">
            <div className="content-box">
              <div className="title-box">
                <h3>Qeydiyyat</h3>
                <a href="/registerdoc">Həkimsiniz ?</a>
              </div>
              <div className="inner">
                {apiError && <div className="error">{apiError}</div>} 
                <form onSubmit={handleSubmit} className="registration-form">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>Ad</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Adınızı daxil edin"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>Soyad</label>
                      <input
                        type="text"
                        name="surname" 
                        placeholder="Soyadınızı daxil edin"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                      />
                      {errors.surname && <span className="error">{errors.surname}</span>}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-poçtunuzu daxil edin"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>Şifrə</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Şifrəni daxil edin"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      {errors.password && <span className="error">{errors.password}</span>}
                      <div className="password-strength">
                        <span>Şifrə Gücü: {passwordStrength}</span>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>Şifrəni təsdiqləyin</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Şifrəni təsdiqləyin"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <div className="custom-check-box">
                        <div className="custom-controls-stacked">
                          <label className="custom-control material-checkbox d-flex">
                            <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            required/>
                            <span className="description">
                              Mən <a href="/terms">şərtləri</a> və <a href="/policy">ümumi siyasəti</a> qəbul edirəm
                            </span>
                          </label>
                        </div>

                        {errors.termsAccepted && <span className="error">{errors.termsAccepted}</span>}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button type="submit" className="theme-btn-one">Qeydiyyatdan keç <i className="icon-Arrow-Right"></i></button>
                    </div>
                  </div>
                </form>
                 <div className="text"><span>və ya</span></div>
                <div className="login-now">
                  <p>Hesabınız var? <a href="/login">Daxil ol</a></p>
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

export default Register;
