import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import { GoArrowRight } from 'react-icons/go';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ellipseImg from '../../assets/images/Ellipse 3.png';
import Spinner from '../../components/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  signUpIdStart,
  signUpIdSuccess,
  signUpIdFailure,
  resetAuth,
} from '../../redux/user/userSlice';
import { validateEmail } from '../../utils';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { loading, error } = useSelector((state) => state.user);
  const url = '/api/user/forgotpassword';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(resetAuth());
    dispatch(signUpIdStart());
    if (!validateEmail(email)) {
      dispatch(signUpIdFailure('Please enter a valid email'));
    }
    try {
      const response = await axios.post(url, { email });
      dispatch(signUpIdSuccess(response.data));
      navigate('/resetpassword/security-question');
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch(signUpIdFailure(message));
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="h-screen flex flex-col justify-center items-end w-1/2">
        <img src={ellipseImg} className=" w-4/6 " alt="ellipse" />
      </div>
      <div className="w-1/2 bg-white">
        <div className="p-3 w-3/5 mx-auto font-[Inter]">
          <form onSubmit={handleSubmit} className="flex flex-col mt-44">
            <h1 className="text-xl text-[#172233] mb-5 font-semibold">
              Reset Password
            </h1>
            <div>
              <label className="text-[#5F6D7E] font-semibold" htmlFor="email">
                Email
              </label>
              <div>
                <input
                  type="email"
                  placeholder="myworkemail@work.com"
                  className="border border-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <p className="text-[#5F6D7E80] text-sm pt-1 mb-5">
              Please provide the e-mail used for registration
            </p>

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
                  Next <GoArrowRight />
                </>
              )}
            </button>
            <p className="text-red-500 text-sm my-1">{error ? error : ''}</p>
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

export default ForgotPassword;
