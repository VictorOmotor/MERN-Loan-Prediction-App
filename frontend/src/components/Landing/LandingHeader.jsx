import React from 'react';
import LogoImg from '../../assets/images/homeLogo.png';
import { Link } from 'react-router-dom';
import { HomeLogin, HomeSignUp } from '../../utils/Buttons';

const LandingHeader = () => {
  return (
    <header className=" w-full h-auto border bg-headerBackground font-[Inter]">
      <nav className="flex justify-between py-3 px-20 items-center">
        <Link to={'/'}>
          <div className="flex gap-1 text-logoBlue items-center">
            <img src={LogoImg} alt="Logo" className="w-5" />
            <h1 className="font-[Montserrat] font-bold">Cash2Go</h1>
          </div>
        </Link>
        <ul className="flex gap-7 text-sm items-center text-fontBlue">
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/about'}>
            <li>About Us</li>
          </Link>
          <Link to={'#'}>
            <li>Help Center</li>
          </Link>
        </ul>
        <ul className="flex items-center gap-3">
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
