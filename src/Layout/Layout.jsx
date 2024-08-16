// Layout.jsx
import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
