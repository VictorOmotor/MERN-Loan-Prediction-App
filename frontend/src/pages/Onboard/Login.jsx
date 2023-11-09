import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { GoArrowRight } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import LaptopImg from '../../assets/images/Laptop.png';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import axios from 'axios';
import { validateEmail } from '../../utils';
import Spinner from '../../components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginInUserStart,
  loginInUserSuccess,
  loginInUserFailure,
  resetAuth,
} from '../../redux/user/userSlice';
import Loader from '../../components/Loader/Loader';

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = '/api/user/login';
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisiblity = (e) => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    const { email, password } = formData;
    e.preventDefault();
    dispatch(resetAuth());
    dispatch(loginInUserStart());
    if (!email || !password) {
      dispatch(loginInUserFailure('Both fields are required!'));
    } else if (!validateEmail(email)) {
      dispatch(loginInUserFailure('Please enter a valid email'));
    } else {
      try {
        const response = await axios.post(url, {
          email,
          password,
        });
        dispatch(loginInUserSuccess(response.data));
        navigate('/dashboard');
        dispatch(resetAuth());
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch(loginInUserFailure(message));
      }
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {loading && <Loader />}
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
          <h1 className="text-3xl text-center text-[#172233] font-semibold pt-28 pb-8">
            Log in
          </h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="">
              <label className="text-[#5F6D7E] font-semibold" htmlFor="email">
                Email
              </label>
              <div>
                <input
                  type="email"
                  placeholder="myworkemail@work.com"
                  className="border border-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
                  id="email"
                  onChange={handleChange}
                  required
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

            <button
              className="bg-[#172233] flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
            >
              Log in <GoArrowRight />
            </button>
          </form>
          <p className="text-red-500 text-xs mt-2">{error ? error : ''}</p>
          <div className="flex text-center justify-center gap-8 mt-4 text-[#000]">
            <Link to={'/forgotpassword'}>
              <span>Forgot Password?</span>
            </Link>
            <Link to="/sign-in">
              <span>Sign Up</span>
            </Link>
          </div>

          <div className="flex text-center justify-center text-[#000] gap-4 pt-12">
            <span>Term of use </span>

            <span>Privacy policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
