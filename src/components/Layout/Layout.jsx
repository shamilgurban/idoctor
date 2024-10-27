import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css'; // Create or modify this CSS file

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="content-container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
