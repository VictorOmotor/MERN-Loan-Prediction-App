import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/homeLogo.png';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { CiGlobe, CiLocationArrow1 } from 'react-icons/ci';

const LandingFooter = () => {
  return (
    <footer className=" pt-10 px-20 pb-14 bg-logoBlue w-full h-auto text-xs font-[Inter] text-footerText">
      <nav className="flex items-center h-32">
        <div className=" flex flex-col justify-between h-full w-1/3">
          <Link to={'/'}>
            <div className="flex gap-1 p-1 text-logoBlue items-center bg-[#F8F9FB] w-1/4">
              <img src={LogoImg} alt="Logo" className="w-5" />
              <h1 className="font-[Montserrat] font-bold">Cash2Go</h1>
            </div>
          </Link>
          <div className="">
            <p>Copyright &copy; 2023 Cash2g0 Ltd</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex items-center gap-4">
            <FaInstagram />
            <CiGlobe />
            <FiTwitter />
            <FaYoutube />
          </div>
        </div>
        <div className="flex justify-evenly h-full w-2/3">
          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white font-bold">Quick Links</h1>
            <ul className="flex flex-col gap-1">
              <li>Log in</li>
              <li>Sign In</li>
              <li>App Demo</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white font-bold">Support</h1>
            <ul className="flex flex-col gap-1">
              <li>About Us</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white font-bold">Stay Up to date</h1>
            <div className="flex items-center bg-[#666f7b] p-2 rounded-md">
              <input
                type="text"
                placeholder="Your email address"
                className="focus:outline-none bg-inherit"
              />
              <CiLocationArrow1 size={20} />
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default LandingFooter;
