import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import uncheckedIcon from '../../assets/images/uncheckedIcon.png';
import vectorLine from '../../assets/images/Line.png';
import { GoArrowRight } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value === '') {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        if (index > 0) {
          document.getElementById(`otp-input-${index - 1}`).focus();
        }
        return newOtp;
      });
    } else if (value.length === 1) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        if (index < 3) {
          document.getElementById(`otp-input-${index + 1}`).focus();
        }
        return newOtp;
      });
    }
  };

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData('text');
    if (pastedText.length === 4) {
      setOtp(pastedText.split(''));
      document.getElementById('otp-input-3').focus();
      e.preventDefault();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
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
              <img src={checkedIcon} alt="" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <img src={uncheckedIcon} alt="" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <img src={uncheckedIcon} alt="" />
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
          <div className="border bg-[#DFDEDE] p-10 mt-20">
            <div className="otp-input flex space-x-4">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                  onPaste={handlePaste}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full p-2 text-3xl border border-[#169872] rounded focus:outline-none text-center"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center my-7">
            <h2 className=" text-2xl font-black mb-3">Enter OTP</h2>
            <p className="text-xs">Enter the 4 digit OTP sent to your mail</p>
            <p className="text-xs">
              Click{' '}
              <span className="font-bold cursor-pointer hover:underline">
                HERE
              </span>{' '}
              to Resend OTP
            </p>
          </div>

          <button
            className="bg-[#172233]  w-full flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
          >
            Sign up <GoArrowRight />
          </button>

          <div className="flex  justify-center gap-4 mt-16">
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

export default Otp;
