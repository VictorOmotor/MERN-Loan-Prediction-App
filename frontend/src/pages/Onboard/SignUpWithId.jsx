import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import uncheckedIcon from '../../assets/images/uncheckedIcon.png';
import vectorLine from '../../assets/images/Line.png';
import { GoArrowRight } from 'react-icons/go';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { validateEmail } from '../../utils';
import Spinner from '../../components/Spinner/Spinner';
import { EmailVerificationWidget } from '../../components/Widgets/Widgets';
import Loader from '../../components/Loader/Loader';

const SignUpWithId = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [showId, setShowId] = useState(false);
  const url = '/api/user/signup';
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisiblity = (e) => {
    setShowId(!showId);
  };
  const handleClose = (e) => {
    setIsVisible(!isVisible);
    navigate('/signup/password-otp', { state: { email } });
  };

  const handleContinue = (e) => {
    navigate('/signup/password-otp', { state: { email } });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!email || !companyId) {
      setError('Both fields are required!');
      setLoading(false);
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      setLoading(false);
    }
    try {
      const response = await axios.post(url, { email, companyId });
      setLoading(false);
      setIsVisible(true);
    } catch (error) {
      setLoading(false);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setError(message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {loading && <Loader />}
      {isVisible && (
        <EmailVerificationWidget
          onContinue={handleContinue}
          onClose={handleClose}
          isVisible={isVisible}
          email={email}
        />
      )}
      <div className="hidden md:h-screen md:flex md:flex-col md:w-1/2 relative">
        <div className="absolute">
          <div className="flex items-center gap-1 absolute transform translate-x-5 translate-y-96 sm:translate-y-96 sm:translate-x-8 lg:translate-y-80 lg:translate-x-24 xl:translate-y-96 xl:translate-x-36 ">
            <img src={LogoImg} className=" w-10" alt="Logo" />
            <span className=" font-[Montserrat] font-semibold text-white text-[2rem]">
              Cash2Go
            </span>
          </div>
          <div className="flex gap-2 mx-auto relative transform translate-x-4 translate-y-16 lg:translate-y-52 lg:translate-x-72 xl:translate-y-60 xl:translate-x-96 ">
            <div>
              <img src={checkedIcon} alt="" />
              <img src={vectorLine} alt="" className="ml-3 h-9 border" />
              <img src={uncheckedIcon} alt="" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <img src={uncheckedIcon} alt="" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <img src={uncheckedIcon} alt="" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <img src={uncheckedIcon} alt="" />
            </div>
            <div>
              <div className=" mb-5 sm:mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  STEP 1
                </span>
                <p className="text-slate-400 text-xs">
                  Fill your Work e-mail and Number
                </p>
              </div>
              <div className="mb-5 sm:mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  STEP 2
                </span>
                <p className="text-slate-400 text-xs">
                  Fill in the OTP sent to your mail
                </p>
              </div>
              <div className="mb-5 sm:mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  STEP 3
                </span>
                <p className="text-slate-400 text-xs">Create your password</p>
              </div>
              <div className="mb-5 sm:mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  STEP 4
                </span>
                <p className="text-slate-400 text-xs">Security question</p>
              </div>
              <div className="mb-5 sm:mb-6">
                <span className="text-white font-[Zen Kaku Gothic Antique]">
                  FINAL STEP
                </span>
                <p className="text-slate-400 text-xs">Log in to Cash2Go</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 bg-white">
        <div className="p-3 md:w-3/5 mx-auto font-[Inter]">
          <h1 className="text-3xl text-center text-[#172233] font-semibold my-16">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="">
              <label
                className="self-stretch text-[#5F6D7E] font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <div>
                <input
                  type="email"
                  placeholder="myworkemail@work.com"
                  className="border border-[#5597e9] p-2 rounded-lg w-full focus:outline-none"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="self-stretch text-[#5F6D7E] font-semibold"
                htmlFor="companyId"
              >
                Company ID
              </label>
              <div className="relative">
                <input
                  type={showId ? 'text' : 'password'}
                  placeholder={showId ? '123ABC' : '********'}
                  className="border p-2 mb-2 border-[#5F6D7E] rounded-lg w-full focus:outline-none"
                  id="companyId"
                  onChange={(e) => setCompanyId(e.target.value)}
                />
                <div className="absolute top-1/2 right-3 transform -translate-y-3/4 cursor-pointer">
                  {showId ? (
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

            <button
              className="bg-[#172233] flex items-center justify-center gap-2 text-white p-2
              rounded-lg hover:opacity-80
              disabled:opacity-50"
              disabled={loading}
            >
              Next <GoArrowRight />
              {/* {loading ? (
                <Spinner className="w-6 h-6 animate-spin rounded-full border-4 border-t-[#5F6D7E]" />
              ) : (
                <>
                  Next <GoArrowRight />
                </>
              )} */}
            </button>
          </form>
          <p className="text-red-500 text-sm my-2">{error ? error : ''}</p>

          <div className="flex flex-col md:flex-row text-center justify-center gap-4 mt-7 md:mt-20">
            <p className="text-[#454E5C]">Term of use </p>
            <Link to="/sign-in">
              <p className="text-[#454E5C]">Privacy policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpWithId;
