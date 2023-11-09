import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import checkedIcon from '../../assets/images/checkedIcon.png';
import uncheckedIcon from '../../assets/images/uncheckedIcon.png';
import vectorLine from '../../assets/images/Line.png';
import { GoArrowRight } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  signUpIdStart,
  signUpIdSuccess,
  signUpIdFailure,
  resetAuth,
} from '../../redux/user/userSlice';

const SignUpWithPassword = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const url = '/api/user/register';
  const email = currentUser?.user?.email;

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
    dispatch(resetAuth());
    dispatch(signUpIdStart());
    if (!firstName || !surname || !password || !confirmPassword) {
      dispatch(signUpIdFailure('All fields are required!'));
    } else if (password.length < 6 || !hasNumber) {
      dispatch(
        signUpIdFailure(
          'Password must be at least 6 characters long and must contain at least one number',
        ),
      );
    } else if (password !== confirmPassword) {
      dispatch(signUpIdFailure('Passwords do not match!'));
    } else {
      try {
        const response = await axios.post(url, {
          firstName,
          surname,
          password,
          confirmPassword,
          email,
        });
        dispatch(signUpIdSuccess(response.data));
        navigate('/signup/security-question');
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
      <div className="w-1/2 bg-white">
        <div className="p-3 w-3/5 mx-auto font-[Inter]">
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
