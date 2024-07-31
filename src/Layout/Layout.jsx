// Layout.jsx
import React from 'react';
import Navbar from '../Home/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
