import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosConfig';
import './Header.css'; 

const Header = () => {
  const navigate = useNavigate();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const submenuRef = useRef(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const email = localStorage.getItem('email');
      if (email) {
        try {
          const response = await axiosInstance.get('http://localhost:8080/api/Auth/GetAllUsers');
          const foundUser = response.data.find(u => u.email === email);
          setUser(foundUser);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setUser(null);
    navigate('/');
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(prev => !prev);
  };

  const closeSubmenu = () => setSubmenuOpen(false);

  const handleClickOutside = (event) => {
    if (
      submenuRef.current && 
      !submenuRef.current.contains(event.target) && 
      !event.target.closest('.submenu')
    ) {
      closeSubmenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderUserDropdown = () => (
    <div className={`dropdown-menu profil-dropdown p-0 ${submenuOpen ? 'open' : ''}`} ref={submenuRef}>
      <div className="card border-0 p-0" style={{ width: '18rem' }}>
        <div className="card-body p-0">
          <div className="list-group m-0">
            <Link to="/profile" className="list-group-item border-0 list-group-item-action" onClick={closeSubmenu}>
              <i className="far fa-user mr-3"></i>Profil
            </Link>
            <Link to="/settings" className="list-group-item border-0 list-group-item-action" onClick={closeSubmenu}>
              <i className="fas fa-key mr-3"></i>Tənzimləmələr
            </Link>
          </div>
          <div className="dropdown-divider m-0"></div>
          <a href="#" className="list-group-item border-0 list-group-item-action text-danger" onClick={() => { handleLogout(); closeSubmenu(); }}>
            <i className="fas fa-power-off mr-3"></i>Çıxış
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="main-header style-two">
      <div className="header-top">
        <div className="auto-container">
          <div className="top-inner clearfix">
            <div className="top-left pull-left">
              <ul className="info clearfix">
                <li>
                  <i className="fas fa-map-marker-alt" />
                  Bakı, Azərbaycan
                </li>
                <li>
                  <i className="fas fa-phone" />
                  <a href="tel:+994102251508">+994 10 225 15 08</a>
                </li>
              </ul>
            </div>
            <div className="top-right pull-right">
              <ul className="info clearfix">
                <li>
                  {user ? (
                    <div className="btn-box">Salam, {user.name} {user.surname}</div>
                  ) : (
                    <a href="/login">Daxil ol</a>
                  )}
                </li>
                <li className="language">
                  <a href="#">AZ</a>
                  <ul className="language-dropdown">
                    <li><a href="#">Azərbaycanca</a></li>
                    <li><a href="#">English</a></li>
                    <li><a href="#">Русский</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-lower">
        <div className="auto-container">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <Link to="/HomePage">
                  <img src="./assets/images/logo-3.png" alt="Logo" />
                </Link>
              </figure>
            </div>
            <div className="menu-area">
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li><Link to="/">Ana Səhifə</Link></li>
                    <li><Link to="/Doctors">Həkimlər</Link></li>
                    <li className="current"><Link to="/About">Haqqımızda</Link></li>
                    <li><Link to="/Contact">Əlaqə</Link></li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="btn-box submenu-container">
              {user ? (
                <>
                  <div className='submenu' onClick={toggleSubmenu}>
                    <span>{user.name} {user.surname}</span>
                    <i className={`fas fa-chevron-down ${submenuOpen ? 'rotated' : ''}`} />
                  </div>
                  {renderUserDropdown()}
                </>
              ) : (
                <a href="/Register" className="theme-btn-one text-nowrap">
                  Qeydiyyatdan Keç
                   <i className="icon-Arrow-Right mx-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
