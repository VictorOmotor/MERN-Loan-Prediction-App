import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';
import { IoIosNotificationsOutline } from 'react-icons/io';

const Header = () => {
  return (
    <div className=" w-screen h-16 bg-[#172233] font-[Inter] text-[#A2A7AD] flex items-center max-w-6xl justify-between px-5">
      <div>
        <form className="flex items-center bg-[#F8F9FB] h-8 w-60 rounded-lg p-3 text-[#5F6D7E]">
          <button>
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none ml-2 w-24 sm:w-44"
          />
          <GoArrowRight />
        </form>
      </div>
      <div className="flex items-center gap-6 px-10">
        <div>
          <IoIosNotificationsOutline size={25} />
        </div>
        <div className="flex items-center gap-1.5">
          <FaUserCircle size={35} />
          <div className="flex flex-col text-xs text-[#5F6D7E]">
            <span>Gbenga Stutern</span>
            <span>Loan Analyst</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
