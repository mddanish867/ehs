import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This will render the matched child route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
