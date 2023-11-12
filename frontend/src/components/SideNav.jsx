import React from 'react';
import LogoImg from '../assets/images/LogoImg.png';
import { Link } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';
import { FaRegClone } from 'react-icons/fa';
import { SiSimpleanalytics } from 'react-icons/si';
import { PiArrowsClockwiseDuotone } from 'react-icons/pi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import {
  MdOutlineHelpOutline,
  MdOutlinePowerSettingsNew,
} from 'react-icons/md';

const SideNav = () => {
  return (
    <div className="h-screen w-1/6 bg-[#172233] border-r border-r-[#D1D9E2] bg-fixed">
      <div className="flex flex-col gap-4 font-[Inter] text-[#A2A7AD]">
        <Link to={'/'}>
          <div className="flex gap-2 items-center pb-6  pt-4 px-6">
            <img src={LogoImg} alt="Logo" className="w-5" />
            <h1 className="font-[Montserrat] text-white font-bold">Cash2Go</h1>
          </div>
        </Link>
        <nav>
          <ul className="flex flex-col gap-5 px-6">
            <li className="flex gap-3 items-center">
              <RiDashboardFill />
              <span>Dashboard</span>
            </li>
            <li className="flex gap-3 items-center">
              <FaRegClone />
              <span>Applications</span>
            </li>
            <li className="flex gap-3 items-center">
              <SiSimpleanalytics />
              <span>Analytics</span>
            </li>
            <li className="flex gap-3 items-center">
              <PiArrowsClockwiseDuotone />
              <span>Recovery</span>
            </li>
            <li className="flex gap-3 items-center">
              <AiOutlineMail />
              <span>Messages</span>
            </li>
          </ul>
          <div className="border-b border-b-[#A2A7AD4D] py-5"></div>
          <ul className="flex flex-col gap-5 px-6 pt-1">
            <li className="flex gap-3 items-center">
              <BsGlobe />
              <span>Resources</span>
            </li>
            <li className="flex gap-3 items-center">
              <FiSettings />
              <span>Settings</span>
            </li>
            <li className="flex gap-3 items-center">
              <MdOutlineHelpOutline />
              <span>Help Center</span>
            </li>
            <li className="flex gap-3 items-center my-14">
              <MdOutlinePowerSettingsNew />
              <span>Log out</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
