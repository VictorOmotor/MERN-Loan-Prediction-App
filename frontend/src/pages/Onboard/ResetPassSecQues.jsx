import React from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LaptopImg from '../../assets/images/Laptop.png';

const ResetPassSecQues = () => {
  const handleChange = (e) => {};
  return (
    <div
      className="min-h-screen bg-cover bg-center flex "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="h-screen flex flex-col w-1/2">
        <div className="flex flex-col items-end h-2/3 pt-36">
          <img src={LaptopImg} className=" w-72" alt="laptop" />
        </div>
        <div className="flex flex-col items-center p-3">
          <div className="flex gap-1 pb-2">
            <img src={LogoImg} className=" w-8" alt="Logo" />
            <span className=" font-[Montserrat] font-semibold text-white text-3xl">
              Cash2Go
            </span>
          </div>
          <div>
            <BiSolidQuoteAltRight className="text-white my-3" />
          </div>
          <div className="text-center font-[Roboto] text-slate-300 text-xs italic">
            <p>Money is a terrible master but an excellent servant.</p>
            <p> - P. T. Barnum</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-white">
        <div className="p-3 w-3/5 mx-auto font-[Inter]">
          <form className="flex flex-col gap-5 mt-44">
            <h1 className="text-xl text-[#172233] font-semibold">
              Reset Password
            </h1>
            <div className="">
              <label
                className="text-[#5F6D7E] font-semibold"
                htmlFor="securityQuestion"
              >
                Select a Security Question
              </label>
              <div>
                <select
                  type="text"
                  placeholder="First Name"
                  className="border border-[#5F6D7E] focus:text-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
                  id="firstName"
                  onChange={handleChange}
                >
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="option1"
                  >
                    Option 1
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="option2"
                  >
                    Option 2
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="option3"
                  >
                    Option 3
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="option4"
                  >
                    Option 4
                  </option>
                </select>
              </div>
            </div>
            <div className="">
              <label
                className="text-[#5F6D7E] font-semibold"
                htmlFor="securityAnswer"
              >
                Your Answer
              </label>
              <div>
                <input
                  type="text"
                  className="border border-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
                  id="securityAnswer"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              className="bg-[#172233] items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
            >
              Reset
            </button>
          </form>

          <div className="flex text-center justify-center text-[#000] gap-4 py-16">
            <span>Term of use </span>
            <Link to="/sign-in">
              <span>Privacy policy</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassSecQues;
