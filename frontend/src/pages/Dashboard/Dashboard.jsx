import React from 'react';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div>Layout</div>
      </div>
    </div>
  );
};

export default Dashboard;
