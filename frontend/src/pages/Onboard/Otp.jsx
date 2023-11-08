import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import uncheckedIcon from '../../assets/images/uncheckedIcon.png';
import vectorLine from '../../assets/images/Line.png';
import { GoArrowRight } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  signUpIdStart,
  signUpIdSuccess,
  signUpIdFailure,
  resignUpIdStart,
  resignUpIdSuccess,
  resignUpIdFailure,
  resetAuth,
} from '../../redux/user/userSlice';
import OtpInput from '../../components/Forms/OtpInput';

const Otp = () => {
  const { currentUser, loading, error, reload, resendError, success } =
    useSelector((state) => state.user);
  const [signUpOtp, setSignUpOtp] = useState('');
  const resendUrl = '/api/user/signup';
  const otpUrl = '/api/user/verifyotp';
  const navigate = useNavigate();
  const email = currentUser?.user?.email;
  const companyId = currentUser?.user?.companyId;
  const dispatch = useDispatch();

  const handleOtpChange = (otpValue) => {
    setSignUpOtp(otpValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(resetAuth());
    dispatch(signUpIdStart());
    if (signUpOtp.length < 4) {
      dispatch(signUpIdFailure('Please pass in the 4-digit OTP'));
    } else {
      try {
        const response = await axios.post(otpUrl, { signUpOtp });
        dispatch(signUpIdSuccess(response.data));
        navigate('/register');
        dispatch(resetAuth());
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch(signUpIdFailure(message));
      }
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    dispatch(resetAuth());
    dispatch(resignUpIdStart());
    try {
      const response = await axios.post(resendUrl, { email, companyId });
      dispatch(resignUpIdSuccess(response.data));
      dispatch(resetAuth());
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch(resignUpIdFailure(message));
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
            <OtpInput value={signUpOtp} onChange={handleOtpChange} />
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
