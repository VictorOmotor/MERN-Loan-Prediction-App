import React from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import uncheckedIcon from '../../assets/images/uncheckedIcon.png';
import vectorLine from '../../assets/images/Line.png';
import { GoArrowRight } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

const SignUpSecurityQuestion = () => {
  const handleChange = (e) => {};
  return (
    <div
      className="min-h-screen bg-cover bg-center flex "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="h-screen flex flex-col w-1/2">
        <div className="flex mt-auto ">
          <div className="flex gap-1 mt-auto my-48 ml-28 ">
            <img src={LogoImg} className="w-10" alt="Logo" />
            <span className=" font-[Montserrat] font-semibold text-white text-[2rem]">
              Cash2Go
            </span>
          </div>
          <div className="flex gap-2 mx-auto my-12 ml-28">
            <div>
              <GoCheckCircleFill size={30} className="text-white" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <GoCheckCircleFill size={30} className="text-white" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <GoCheckCircleFill size={30} className="text-white" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <img src={checkedIcon} alt="" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <img src={uncheckedIcon} alt="" />
            </div>
            <div>
              <div className="mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  STEP 1
                </span>
                <p className="text-slate-400 text-xs">
                  Fill your Work e-mail and Number
                </p>
              </div>
              <div className="mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  STEP 2
                </span>
                <p className="text-slate-400 text-xs">
                  Fill in the OTP sent to your mail
                </p>
              </div>
              <div className="mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  STEP 3
                </span>
                <p className="text-slate-400 text-xs">Create your password</p>
              </div>
              <div className="mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  STEP 4
                </span>
                <p className="text-slate-400 text-xs">Security question</p>
              </div>
              <div className="mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  FINAL STEP
                </span>
                <p className="text-slate-400 text-xs">Log in to Cash2Go</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-white">
        <div className="p-3 w-3/5 mx-auto font-[Inter]">
          <form className="flex flex-col gap-5 mt-40">
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
                  className="border border-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
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
              className="bg-[#172233] flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
            >
              Sign up <GoArrowRight />
            </button>
          </form>

          <div className="flex  justify-center gap-4 mt-8">
            <p className="text-[#454E5C]">Term of use </p>
            <Link to="">
              <p className="text-[#454E5C]">Privacy policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSecurityQuestion;
