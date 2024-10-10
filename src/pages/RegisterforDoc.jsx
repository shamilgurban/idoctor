import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

function RegisterForDoc() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    verificationDocument: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'verificationDocument') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateFields = () => {
    const newErrors = {};
    if (!/^[A-Za-z]+$/.test(formData.name)) newErrors.name = 'Ad düzgün deyil';
    if (!/^[A-Za-z]+$/.test(formData.surname)) newErrors.surname = 'Soyad düzgün deyil';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email düzgün deyil';
    if (formData.password.length < 8) newErrors.password = 'Şifrə ən azı 8 simvol olmalıdır';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Şifrələr uyğun gəlmir';
    if (!formData.verificationDocument) newErrors.verificationDocument = 'Doğrulama sənədi tələb olunur';
    else if (formData.verificationDocument.size > 5 * 1024 * 1024)
      newErrors.verificationDocument = 'Sənəd 5MB-dan kiçik olmalıdır';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    const newErrors = validateFields();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    const postData = new FormData();
    postData.append('Name', formData.name);
    postData.append('Surname', formData.surname);
    postData.append('Email', formData.email);
    postData.append('Password', formData.password);
    postData.append('ConfirmPassword', formData.confirmPassword);
    postData.append('VerificationDocument', formData.verificationDocument);

    try {
      const response = await axios.post('http://localhost:8080/api/Auth/RegisterDoctor', postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Qeydiyyat uğurla tamamlandı!');

      setFormData({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        verificationDocument: null,
      });
    } catch (error) {
      console.error('Form göndərilməsində səhv:', error);
      toast.error('Qeydiyyat uğursuz oldu. Yenidən cəhd edin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="boxed_wrapper">
      {loading && <div className="spinner">Yüklənir...</div>}

      <ToastContainer />

      <section className="page-title-two">
        <div className="title-box centred bg-color-2">
          <div className="auto-container">
            <div className="title">
              <h1>Həkim Qeydiyyatı</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="registration-section bg-color-3">
        <div className="auto-container">
          <div className="inner-box">
            <div className="content-box">
              <div className="title-box">
                <h3>Qeydiyyat</h3>
                <Link to="/register">Pasiyentsiniz?</Link>
              </div>
              <div className="inner">
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
                      <label>Təsdiq sənədi</label>
                      <input
                        type="file"
                        name="verificationDocument"
                        onChange={handleChange}
                        accept=".png, .jpeg, .jpg, .pdf"
                        required
                      />
                      {errors.verificationDocument && (
                        <span className="error">{errors.verificationDocument}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button type="submit" className="theme-btn-one" disabled={loading}>
                        {loading ? 'Göndərilir...' : 'Qeydiyyatdan keç'}
                        <i className="icon-Arrow-Right"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text"><span>və ya</span></div>
                <div className="login-now">
                  <p>Hesabınız var? <Link to="/login">Daxil ol</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterForDoc;
