import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import uncheckedIcon from '../../assets/images/uncheckedIcon.png';
import vectorLine from '../../assets/images/Line.png';
import { GoArrowRight } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';

const SignUpWithPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const url = '/api/user/register';
  const location = useLocation();
  const { state } = location;
  const { email } = state;
  const handleToggleVisiblity = (e) => {
    setShowPassword(!showPassword);
  };

  const handleVerifyPasswordVisiblity = (e) => {
    setShowVerifyPassword(!showVerifyPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const { firstName, surname, password, confirmPassword } = formData;
    let hasNumber = /\d/.test(formData.password);
    e.preventDefault();
    setError(null);
    if (!firstName || !surname || !password || !confirmPassword) {
      setError('All fields are required!');
    } else if (password.length < 6 || !hasNumber) {
      setError(
        'Password must be at least 6 characters long and must contain at least one number',
      );
    } else if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      try {
        await setLoading(false);
        await setError(null);
        navigate('/signup/security-question', {
          state: { email, firstName, surname, password, confirmPassword },
        });
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setError(message);
        setLoading(false);
      }
    }
  };

  return (
    <div
      className="md:min-h-screen md:bg-cover md:bg-center flex "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="h-screen md:flex md:flex-col md:w-1/2 md:relative">
        <div className="hidden md:block absolute ">
          <div className="flex items-center gap-1 absolute transform translate-x-5 translate-y-96 sm:translate-y-96 sm:translate-x-8 lg:translate-y-80 lg:translate-x-24 xl:translate-y-96 xl:translate-x-36 ">
            <img src={LogoImg} className="w-10" alt="Logo" />
            <span className=" font-[Montserrat] font-semibold text-white text-[2rem]">
              Cash2Go
            </span>
          </div>
          <div className="flex gap-2 mx-auto relative transform translate-x-4 translate-y-16 lg:translate-y-52 lg:translate-x-72 xl:translate-y-60 xl:translate-x-96">
            <div>
              <GoCheckCircleFill size={30} className="text-white" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <GoCheckCircleFill size={30} className="text-white" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <img src={checkedIcon} alt="" />
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
      <div className="w-full md:w-1/2 bg-white">
        <div className="p-3 md:w-3/5 mx-auto font-[Inter]">
          <form className="flex flex-col gap-5 mt-16" onSubmit={handleSubmit}>
            <div className="">
              <label
                className="text-[#5F6D7E] font-semibold"
                htmlFor="firstName"
              >
                First Name
              </label>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
                  id="firstName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="">
              <label className="text-[#5F6D7E] font-semibold" htmlFor="surname">
                Surname
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
                  id="surname"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                className="text-[#5F6D7E] font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={showPassword ? '123ABC' : '**********'}
                  className="border p-2 mb-2 border-[#5F6D7E] rounded-lg w-full focus:outline-none"
                  id="password"
                  onChange={handleChange}
                />
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                  {showPassword ? (
                    <FaEyeSlash
                      onClick={handleToggleVisiblity}
                      className="text-[#5F6D7E] "
                    />
                  ) : (
                    <FaEye
                      onClick={handleToggleVisiblity}
                      className="text-[#5F6D7E]"
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <label
                className="text-[#5F6D7E] font-semibold"
                htmlFor="confirmPassword"
              >
                Re-enter Password
              </label>
              <div className="relative">
                <input
                  type={showVerifyPassword ? 'text' : 'password'}
                  placeholder={showVerifyPassword ? '123ABC' : '**********'}
                  className="border p-2 mb-2 border-[#5F6D7E] rounded-lg w-full focus:outline-none"
                  id="confirmPassword"
                  onChange={handleChange}
                />
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                  {showVerifyPassword ? (
                    <FaEyeSlash
                      onClick={handleVerifyPasswordVisiblity}
                      className="text-[#5F6D7E] "
                    />
                  ) : (
                    <FaEye
                      onClick={handleVerifyPasswordVisiblity}
                      className="text-[#5F6D7E]"
                    />
                  )}
                </div>
              </div>
            </div>

            <button
              className="bg-[#172233] flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <Spinner className="w-6 h-6 animate-spin rounded-full border-4 border-t-[#5F6D7E]" />
              ) : (
                <>
                  Sign up <GoArrowRight />
                </>
              )}
            </button>
          </form>
          <p className="text-red-500 text-xs mt-2">{error ? error : ''}</p>
          <div className="flex  justify-center gap-4 mt-7">
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

export default SignUpWithPassword;
