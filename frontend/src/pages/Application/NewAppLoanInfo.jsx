import React, { useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { setLoanFormData } from '../../redux/form/formSlice';
import { useDispatch, useSelector } from 'react-redux';

const NewAppLoanInfo = () => {
  const [error, setError] = useState(null);
  const { loanFormData } = useSelector((state) => state.form);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const updatedFormData = {
      ...loanFormData,
      [e.target.id]: e.target.value,
    };

    dispatch(setLoanFormData(updatedFormData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { loanDuration } = loanFormData;
    const selectedDate = new Date(loanDuration);
    if (selectedDate <= new Date()) {
      setError('Please select any date after today.');
    } else {
      try {
        setError(null);
        navigate('/applications/new-application/history');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex flex-col gap-4 px-5 md:px-24 pt-4 font-[Inter] text-[#5F6D7E]">
      <div className="hidden md:flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <span className="text-xs">Applications</span>{' '}
          <span>
            <HiOutlineChevronRight size={12} />
          </span>
          <span className="text-xs">New Application</span>{' '}
          <span>
            <HiOutlineChevronRight size={12} />
          </span>
          <span className="text-xs">Loan Info</span>{' '}
          <span>
            <HiOutlineChevronRight size={12} />
          </span>
        </div>
        <div
          role="button"
          onClick={() => navigate(-1)}
          className="hidden md:flex gap-1 items-center"
        >
          <BsArrowLeft />
          <span className="text-xs">Back</span>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl text-[#2E3646]">New Application</h1>
      </div>
      <div className="flex gap-3 items-center text-xs border-t border-t-[#D1D9E2]">
        <Link to={'/applications/new-application/personalinfo'}>
          <div className=" border-b border-b-[#5F6D7E] py-3">
            <h3>Contact Info</h3>
          </div>
        </Link>
        <Link to={'#'}>
          <div className=" border-b-[2px] border-b-[#2E3646] py-3">
            <h3>Loan Info</h3>
          </div>
        </Link>
        <Link to={'/applications/new-application/history'}>
          <div className=" border-b border-b-[#5F6D7E] py-3">
            <h3>Financial History</h3>
          </div>
        </Link>
      </div>
      <div className="flex flex-col bg-[#F8F9FB]">
        <div className="p-3 flex justify-between items-center border-b border-b-[#D1D9E2]">
          <h2 className=" text-xl text-[#2E3646]">Loan Information</h2>
          <AiOutlineEllipsis />
        </div>
        <div className="p-2">
          <form onSubmit={handleSubmit} className="p-2">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-between">
              <div className="flex flex-col gap-2 md:gap-4 w-full md:w-1/2">
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="dependents"
                  >
                    Dependents
                  </label>
                  <div>
                    <input
                      type="number"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="dependents"
                      onChange={handleChange}
                      required
                      value={loanFormData?.dependents || ''}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="selfEmployed"
                  >
                    Self Employed
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="selfEmployed"
                      required
                      onChange={handleChange}
                      value={loanFormData?.selfEmployed || ''}
                    >
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value=" "
                      >
                        Please select
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="true"
                      >
                        Yes
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="false"
                      >
                        No
                      </option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="maritalStatus"
                  >
                    Married
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="maritalStatus"
                      onChange={handleChange}
                      required
                      value={loanFormData?.maritalStatus || ''}
                    >
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value=" "
                      >
                        Please select
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="married"
                      >
                        Yes
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="single"
                      >
                        No
                      </option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="education"
                  >
                    Education
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="education"
                      onChange={handleChange}
                      required
                      value={loanFormData?.education || ''}
                    >
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value=" "
                      >
                        Please select
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="undergraduate"
                      >
                        Under-graduate
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="graduate"
                      >
                        Graduate
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="postgraduate"
                      >
                        Post-Graduate
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-4 w-full md:w-1/2">
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="loanAmount"
                  >
                    Loan Amount
                  </label>
                  <div>
                    <input
                      type="number"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="loanAmount"
                      onChange={handleChange}
                      required
                      value={loanFormData?.loanAmount || ''}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="loanDuration"
                  >
                    Loan Duration
                  </label>
                  <div>
                    <input
                      type="Date"
                      className="border border-[#5F6D7E] p-1 uppercase rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="loanDuration"
                      onChange={handleChange}
                      required
                      value={loanFormData?.loanDuration || ''}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="loanType"
                  >
                    Loan Type
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="loanType"
                      onChange={handleChange}
                      required
                      value={loanFormData?.loanType || ''}
                    >
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value=" "
                      >
                        Please select
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="shortTerm"
                      >
                        Short Term
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="mediumTerm"
                      >
                        Medium Term
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="longTerm"
                      >
                        LongTerm
                      </option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="creditHistory"
                  >
                    Credit History
                  </label>
                  <div>
                    <input
                      type="number"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="creditHistory"
                      onChange={handleChange}
                      required
                      value={loanFormData?.creditHistory || ''}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="bg-[#172233] w-full md:w-1/3 h-7 mt-4 flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
            >
              Next <GoArrowRight />
            </button>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAppLoanInfo;
