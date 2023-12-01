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
import { logOutStart, logOutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const SideNav = () => {
  const dispatch = useDispatch();
  const url = '/api/user/logout';
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logOutStart());
      const response = await axios.get(url);
      dispatch(logOutSuccess(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hidden md:block md:h-screen md:w-1/5 xl:w-1/6 md:bg-[#172233] md:border-r border-r-[#D1D9E2] md:bg-fixed">
      <div className="flex flex-col gap-4 font-[Inter] text-[#A2A7AD]">
        <Link to={'/'}>
          <div className="flex gap-2 items-center pb-6  pt-4 px-6">
            <img src={LogoImg} alt="Logo" className="w-5" />
            <h1 className="font-[Montserrat] text-white font-bold">Cash2Go</h1>
          </div>
        </Link>
        <nav>
          <ul className="flex flex-col gap-2 ">
            <Link to={'/dashboard'}>
              <li className="flex gap-3 items-center px-6 py-2 hover:bg-[#5F6D7E]">
                <RiDashboardFill />
                <span>Dashboard</span>
              </li>
            </Link>
            <Link to={'/applications/all'}>
              <li className="flex gap-3 items-center px-6 py-2 hover:bg-[#5F6D7E]">
                <FaRegClone />
                <span>Applications</span>
              </li>
            </Link>
            <li className="flex gap-3 items-center px-6 py-2 hover:bg-[#5F6D7E]">
              <SiSimpleanalytics />
              <span>Analytics</span>
            </li>
            <li className="flex gap-3 items-center px-6 py-2 hover:bg-[#5F6D7E]">
              <PiArrowsClockwiseDuotone />
              <span>Recovery</span>
            </li>
            <li className="flex gap-3 items-center px-6 py-2 hover:bg-[#5F6D7E]">
              <AiOutlineMail />
              <span>Messages</span>
            </li>
          </ul>
          <div className="border-b border-b-[#A2A7AD4D] py-5"></div>
          <ul className="flex flex-col gap-3 pt-">
            <li className="flex gap-3 items-center px-6 py-2 hover:bg-[#5F6D7E]">
              <BsGlobe />
              <span>Resources</span>
            </li>
            <li className="flex gap-3 items-center px-6 py-2 hover:bg-[#5F6D7E]">
              <FiSettings />
              <span>Settings</span>
            </li>
            <li className="flex gap-3 items-center px-6 py-2 hover:bg-[#5F6D7E]">
              <MdOutlineHelpOutline />
              <span>Help Center</span>
            </li>
            <li
              onClick={handleLogout}
              className="flex gap-3 cursor-pointer items-center px-6 py-1 hover:bg-[#5F6D7E] xl:my-14"
            >
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
