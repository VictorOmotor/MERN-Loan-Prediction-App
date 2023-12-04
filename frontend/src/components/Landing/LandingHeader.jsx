import React, { useEffect, useState } from 'react';
import LogoImg from '../../assets/images/homeLogo.png';
import { Link } from 'react-router-dom';
import { HomeLogin, HomeSignUp } from '../../utils/Buttons';
import { RiMenu5Fill } from 'react-icons/ri';
import LandingMenu from './LandingMenu';
import { useSelector } from 'react-redux';

const LandingHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen ? (
        <LandingMenu onClick={toggleMenu} />
      ) : (
        <header className="w-full h-auto border bg-headerBackground font-[Inter]">
          <nav className="flex justify-between py-3 px-3 md:px-20 items-center">
            <Link to={'/'}>
              <div className="flex gap-1 text-logoBlue items-center">
                <img src={LogoImg} alt="Logo" className=" w-6 md:w-5" />
                <h1 className=" hidden md:block font-[Montserrat] font-bold">
                  Cash2Go
                </h1>
              </div>
            </Link>
            <ul className="flex gap-7 text-sm items-center text-fontBlue">
              {currentUser ? (
                <Link to={'/dashboard'}>
                  <li className="">Dashboard</li>
                </Link>
              ) : (
                <>
                  <Link to={'/about'}>
                    <li className="hidden md:block">About Us</li>
                  </Link>
                  <Link to={'#'}>
                    <li className="hidden md:block">Help Center</li>
                  </Link>
                </>
              )}
            </ul>
            {currentUser ? (
              ''
            ) : (
              <>
                <ul className="flex items-center gap-3">
                  <li>
                    <HomeLogin />
                  </li>
                  <li>
                    <HomeSignUp />
                  </li>
                </ul>
              </>
            )}

            <RiMenu5Fill
              size={30}
              className="text-fontBlue md:hidden"
              onClick={toggleMenu}
            />
          </nav>
        </header>
      )}
    </>
  );
};

export default LandingHeader;
