import React from 'react';
import LogoImg from '../../assets/images/LogoImg.png';
import { Link } from 'react-router-dom';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';
import { logOutStart, logOutSuccess } from '../../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FaInstagram, FaTimes, FaYoutube } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import { FiTwitter } from 'react-icons/fi';

const LandingMenu = ({ onClick }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
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
    <div
      className="fixed inset-0 bg-[#1436D9] bg-opacity-95 z-50 md:hidden "
      onClick={onClick}
    >
      <div className="flex flex-col gap-4 font-[Inter] text-white">
        <div className="flex items-center justify-between pb-6  pt-3 px-4">
          <Link to={'/'}>
            <div className="flex gap-2 items-center">
              <img src={LogoImg} alt="Logo" className="w-5" />
              <h1 className="font-[Montserrat] text-white font-bold">
                Cash2Go
              </h1>
            </div>
          </Link>
          <FaTimes
            size={28}
            className="text-white md:hidden"
            onClick={onClick}
          />
        </div>

        <nav>
          <ul className="flex flex-col gap-7 justify-center items-center ">
            {currentUser ? (
              <Link to={'/dashboard'}>
                <li className="">Dashboard</li>
              </Link>
            ) : (
              ''
            )}
            {currentUser ? (
              ''
            ) : (
              <>
                <Link to={'/login'}>
                  <li className="flex gap-3 items-center hover:bg-[#5F6D7E]">
                    Login
                  </li>
                </Link>
                <Link to={'/signup'}>
                  <li className="flex gap-3 items-center hover:bg-[#5F6D7E]">
                    Sign In
                  </li>
                </Link>
              </>
            )}

            {/* <Link to={'/about'}>
            <li className="flex gap-3 items-center hover:bg-[#5F6D7E]">
              About Us
            </li>
            </Link> */}
            <Link to={'#'}>
              <li className="flex gap-3 items-center hover:bg-[#5F6D7E]">
                Privacy Policy
              </li>
            </Link>
            <Link to={'#'}>
              <li className="flex gap-3 items-center hover:bg-[#5F6D7E]">
                Help Center
              </li>
            </Link>
            <Link to={'#'}>
              <li className="flex gap-3 items-center hover:bg-[#5F6D7E]">
                App Demo
              </li>
            </Link>
            {currentUser ? (
              <li
                onClick={handleLogout}
                className="flex gap-3 cursor-pointer items-center hover:bg-[#5F6D7E] my-3"
              >
                <MdOutlinePowerSettingsNew />
                <span>Log out</span>
              </li>
            ) : (
              ''
            )}

            <div className="flex flex-col items-center gap-2">
              <p>Copyright &copy; 2023 Cash2go Ltd</p>
              <p>All rights reserved</p>
            </div>
            <div className="flex items-center gap-4">
              <FaInstagram />
              <CiGlobe />
              <FiTwitter />
              <FaYoutube />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LandingMenu;
