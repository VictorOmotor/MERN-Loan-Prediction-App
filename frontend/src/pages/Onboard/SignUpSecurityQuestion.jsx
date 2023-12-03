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
import { SignUpSuccessfulWidget } from '../../components/Widgets/Widgets';
import Loader from '../../components/Loader/Loader';

const SignUpSecurityQuestion = () => {
  const [formData, setFormData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { email, firstName, surname, password } = state;
  const url = '/api/user/signup/security-question';

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
      setLoading(false);
    } else if (!securityAnswer) {
      setError('Please provide an answer');
      setLoading(false);
    } else {
      try {
        const response = await axios.post(url, {
          securityAnswer,
          securityQuestion,
          email,
          firstName,
          surname,
          password,
        });
        setIsVisible(true);
        setLoading(false);
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
    }
  };

  return (
    <div
      className="md:min-h-screen md:bg-cover md:bg-center flex "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {loading && <Loader />}
      {isVisible && (
        <SignUpSuccessfulWidget
          onContinue={handleContinue}
          onClose={handleClose}
          isVisible={isVisible}
        />
      )}
      <div className="md:h-screen md:flex md:flex-col md:w-1/2 relative">
        <div className="hidden md:block absolute">
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
              <GoCheckCircleFill size={30} className="text-white" />
              <img src={vectorLine} alt="" className="ml-3 h-9" />
              <img src={checkedIcon} alt="" />
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
          <form
            className="flex flex-col gap-5 mt-20 md:mt-40"
            onSubmit={handleSubmit}
          >
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
                  className="border border-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
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
              // disabled={loading}
            >
              Sign up <GoArrowRight />
              {/* {loading ? (
                <Spinner className="w-6 h-6 animate-spin rounded-full border-4 border-t-[#5F6D7E]" />
              ) : (
                <>
                  Sign up <GoArrowRight />
                </>
              )} */}
            </button>
          </form>
          <p className="text-red-500 text-sm mt-2">{error ? error : ''}</p>
          <div className="flex  justify-center gap-4 mt-8">
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

export default SignUpSecurityQuestion;
