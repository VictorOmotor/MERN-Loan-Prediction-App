import React, { useState } from 'react';
import LogoImg from '../../assets/images/homeLogo.png';
import { Link } from 'react-router-dom';
import { HomeLogin, HomeSignUp } from '../../utils/Buttons';
import { RiMenu5Fill } from "react-icons/ri";

const LandingHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-auto border bg-headerBackground font-[Inter]">
      <nav className="flex justify-between py-3 px-4 md:px-20 items-center">
        <Link to={'/'}>
          <div className="flex gap-1 text-logoBlue items-center">
            <img src={LogoImg} alt="Logo" className="w-5" />
            <h1 className="font-[Montserrat] font-bold">Cash2Go</h1>
          </div>
        </Link>

        {/* Responsive Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <RiMenu5Fill className="w-6 h-6 text-fontBlue" />
        </div>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:gap-7 text-sm items-center text-fontBlue`}
        >
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/about'}>
            <li>About Us</li>
          </Link>
          <Link to={'#'}>
            <li>Help Center</li>
          </Link>
          <li>
            <HomeLogin />
          </li>
          <li>
            <HomeSignUp />
          </li>
        </ul>

        <ul className="hidden md:flex items-center gap-3">
          <li>
            <HomeLogin />
          </li>
          <li>
            <HomeSignUp />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default LandingHeader;
