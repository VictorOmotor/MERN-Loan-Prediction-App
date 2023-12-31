import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import uncheckedIcon from '../../assets/images/uncheckedIcon.png';
import vectorLine from '../../assets/images/Line.png';
import { GoArrowRight } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import OtpInput from '../../components/Forms/OtpInput';

const Otp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);
  const [resendError, setResendError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [signUpOtp, setSignUpOtp] = useState('');
  const resendUrl = '/api/user/signup';
  const otpUrl = '/api/user/verifyotp';
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { email, companyId } = state;

  const handleOtpChange = (otpValue) => {
    setSignUpOtp(otpValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setResendError(false);
    setSuccess(false);
    setLoading(true);
    if (signUpOtp.length < 4) {
      setError('Please pass in the 4-digit OTP');
      setLoading(false);
    } else {
      try {
        const response = await axios.post(otpUrl, { signUpOtp });
        console.log(response);
        setLoading(false);
        navigate('/register', { state: { email } });
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

  const handleResend = async (e) => {
    e.preventDefault();
    setResendError(null);
    setLoading(false);
    setReload(true);
    setSuccess(false);
    try {
      const response = await axios.post(resendUrl, { email, companyId });
      setReload(false);
      setSuccess(true);
    } catch (error) {
      setReload(false);
      setSuccess(false);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setResendError(message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="md:h-screen md:flex md:flex-col md:w-1/2 md:relative">
        <div className="hidden md:block absolute ">
          <div className="flex items-center gap-1 absolute transform translate-x-5 translate-y-96 sm:translate-y-96 sm:translate-x-8 lg:translate-y-80 lg:translate-x-24 xl:translate-y-96 xl:translate-x-36">
            <img src={LogoImg} className="w-10" alt="Logo" />
            <span className=" font-[Montserrat] font-semibold text-white text-[2rem]">
              Cash2Go
            </span>
          </div>
          <div className="hidden md:flex gap-2 mx-auto relative transform translate-x-4 translate-y-16 lg:translate-y-52 lg:translate-x-72 xl:translate-y-60 xl:translate-x-96">
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
      <div className="flex items-center justify-center w-full md:w-1/2 bg-white">
        <div className="p-3 md:w-3/5 mx-auto font-[Inter]">
          <div className="border bg-[#DFDEDE] p-7">
            <OtpInput
              value={signUpOtp}
              onChange={handleOtpChange}
              error={error}
            />
            <p className="text-red-500 text-xs mt-2 text-center">
              {error ? error : ''}
            </p>
          </div>
          <div className="flex flex-col items-center my-7">
            <h2 className=" text-2xl font-black mb-3">Enter OTP</h2>
            <p className="text-xs">Enter the 4 digit OTP sent to your mail</p>
            <p className="text-xs">
              Click{' '}
              <span
                className="font-bold cursor-pointer hover:underline"
                onClick={handleResend}
              >
                HERE
              </span>{' '}
              to Resend OTP{' '}
              {reload && (
                <span className="flex justify-center mt-2">
                  <Spinner className="w-6 h-6 animate-spin rounded-full border-4 border-t-[#5F6D7E]" />
                </span>
              )}
            </p>
            {success && (
              <p className="text-gray-500 text-xs mt-2">OTP resent!</p>
            )}

            <p className="text-red-500 text-xs mt-2">
              {resendError ? resendError : ''}
            </p>
          </div>

          <button
            className="bg-[#172233]  w-full flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <Spinner className="w-6 h-6 animate-spin rounded-full border-4 border-t-[#5F6D7E]" />
            ) : (
              <>
                Submit <GoArrowRight />
              </>
            )}
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
