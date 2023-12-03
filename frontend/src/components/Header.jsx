import React, { useState } from 'react';
import { FaSearch, FaTimes, FaUserCircle } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/images/LogoImg.png';
import { RiMenu5Fill } from 'react-icons/ri';
import Menu from './Menu';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  let fullName =
    currentUser?.user?.firstName + ' ' + currentUser?.user?.surname;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen ? (
        <Menu onClick={toggleMenu} />
      ) : (
        <div className=" xl:w-screen h-12 md:h-16 bg-[#172233] font-[Inter] text-[#A2A7AD] flex items-center md:max-w-6xl justify-between p-3 md:px-5">
          <Link className="md:hidden" to={'/'}>
            <img src={LogoImg} alt="Logo" className="w-6" />
          </Link>
          <div className="hidden md:block">
            <div className="flex items-center bg-[#F8F9FB] h-4 md:h-8 w-36 sm:w-60 rounded-lg p-3 text-[#5F6D7E]">
              <button>
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none ml-2 w-16 sm:w-44"
              />
              <GoArrowRight className="hidden md:block" />
            </div>
          </div>
          <div className="flex items-center  gap-1 md:gap-6 px-10">
            <div>
              <IoIosNotificationsOutline size={25} />
            </div>
            <div className="md:flex items-center gap-1.5">
              <FaUserCircle size={35} className="hidden md:block" />
              <div className="flex flex-col text-xs text-[#5F6D7E]">
                <span>{fullName}</span>
                <span className="hidden md:block">Loan Analyst</span>
              </div>
            </div>
          </div>
          {!isMenuOpen ? (
            <RiMenu5Fill
              size={30}
              className="text-white md:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <FaTimes
              size={30}
              className="text-white md:hidden"
              onClick={toggleMenu}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Header;
