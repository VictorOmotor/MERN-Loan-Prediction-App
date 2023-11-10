import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LaptopImg from '../../assets/images/Laptop.png';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  signUpIdStart,
  signUpIdSuccess,
  signUpIdFailure,
  resetAuth,
} from '../../redux/user/userSlice';
import { PasswordChangedWidget } from '../../components/Widgets/Widgets';

const ResetPassword = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const params = useParams();
  const url = `/api/user/resetpassword/reset/${params.resetPasswordToken}`;

  const handleToggleVisiblity = (e) => {
    setShowPassword(!showPassword);
  };

  const handleVerifyPasswordVisiblity = (e) => {
    setShowVerifyPassword(!showVerifyPassword);
  };

  const handleClose = (e) => {
    setIsVisible(!isVisible);
    navigate('/login');
  };

  const handleContinue = (e) => {
    navigate('/login');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    let hasNumber = /\d/.test(formData.password);
    const { password, confirmPassword } = formData;
    e.preventDefault();
    dispatch(resetAuth());
    dispatch(signUpIdStart());
    if (!password || !confirmPassword) {
      dispatch(signUpIdFailure('Both fields are required'));
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
          password,
          confirmPassword,
        });
        dispatch(signUpIdSuccess());
        setIsVisible(true);
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-44">
            <h1 className="text-xl text-[#172233] font-semibold">
              Reset Password
            </h1>
            <div className="">
              <label
                className="text-[#5F6D7E] font-semibold"
                htmlFor="password"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={showPassword ? '123ABC' : '**********'}
                  className="border border-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
                  id="password"
                  onChange={handleChange}
                  required
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
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showVerifyPassword ? 'text' : 'password'}
                  placeholder={showVerifyPassword ? '123ABC' : '**********'}
                  className="border p-2 mb-2 border-[#5F6D7E] rounded-lg w-full focus:outline-none"
                  id="confirmPassword"
                  onChange={handleChange}
                  required
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
                <>Reset</>
              )}
            </button>
          </form>
          <p className="text-red-500 text-xs mt-2">{error ? error : ''}</p>
          <div className="flex text-center justify-center text-[#000] gap-4 py-16">
            <span>Term of use </span>
            <Link to="/sign-in">
              <span>Privacy policy</span>
            </Link>
          </div>
        </div>
      </div>
      {isVisible && (
        <PasswordChangedWidget
          onContinue={handleContinue}
          onClose={handleClose}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};

export default ResetPassword;
