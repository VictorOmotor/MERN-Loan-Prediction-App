import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <div className="flex flex-col flex-1 overflow-y-auto ">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
