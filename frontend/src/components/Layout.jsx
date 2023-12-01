import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex flex-col flex-1 overflow-y-scroll xl:overflow-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
