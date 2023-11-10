import React, { useState } from 'react';
import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LaptopImg from '../../assets/images/Laptop.png';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import { ResetPasswordWidget } from '../../components/Widgets/Widgets';

const ResetPassSecQues = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { email } = state;
  const url = `/api/user/resetpassword/security-question`;

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
    const { securityQuestion, securityAnswer } = formData;
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!securityQuestion) {
      setError('Please select a security question');
    } else if (!securityAnswer) {
      setError('Please provide an answer');
    } else {
      try {
        const response = await axios.post(url, {
          securityAnswer,
          securityQuestion,
          email,
        });
        setLoading(false);
        setIsVisible(true);
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
                htmlFor="securityQuestion"
              >
                Select a Security Question
              </label>
              <div>
                <select
                  type="text"
                  placeholder="First Name"
                  className="border border-[#5F6D7E] focus:text-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
                  id="securityQuestion"
                  onChange={handleChange}
                >
                  <option className="text-[#5F6D7E] font-semibold" value=" ">
                    Please select a security question
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="Where did you meet your spouse"
                  >
                    Where did you meet your spouse?
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="When is your next birthday"
                  >
                    When is your next birthday?
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="In what city were you born"
                  >
                    In what city were you born?
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="What is your favorite color"
                  >
                    What is your favorite color?
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="What is your favorite food"
                  >
                    What is your favorite food?
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="What is your favorite childhood cartoon character"
                  >
                    What is your favorite childhood cartoon character?
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="What is the name of your childhood best friend"
                  >
                    What is the name of your childhood best friend?
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="What is your mother's maiden name"
                  >
                    What is your mother's maiden name?
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
        <ResetPasswordWidget
          email={email}
          onContinue={handleContinue}
          onClose={handleClose}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};

export default ResetPassSecQues;
