import React, { useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

const NewAppLoanInfo = () => {
  const [error, setError] = useState(null);
  const [LoanFormData, setLoanFormData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { mode, formData } = state;

  const handleChange = (e) => {
    setLoanFormData({
      ...LoanFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { loanDuration } = LoanFormData;
    const selectedDate = new Date(loanDuration);
    if (selectedDate <= new Date()) {
      setError('Please select any date after today.');
    } else {
      try {
        setError(null);
        navigate('/applications/new-application/history', {
          state: { mode, formData, LoanFormData },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex flex-col gap-4 px-24 pt-4 font-[Inter] text-[#5F6D7E]">
      <div className="flex items-center justify-between">
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
          className="flex gap-1 items-center"
        >
          <BsArrowLeft />
          <span className="text-xs">Back</span>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl text-[#2E3646]">New Application</h1>
      </div>
      <div className="flex gap-3 items-center text-xs border-t border-t-[#D1D9E2]">
        <div className=" border-b border-b-[#5F6D7E] py-3">
          <h3>Contact Info</h3>
        </div>
        <div className=" border-b-[2px] border-b-[#2E3646] py-3">
          <h3>Loan Info</h3>
        </div>
        <div className=" border-b border-b-[#5F6D7E] py-3">
          <h3>Financial History</h3>
        </div>
      </div>
      <div className="flex flex-col bg-[#F8F9FB]">
        <div className="p-3 flex justify-between items-center border-b border-b-[#D1D9E2]">
          <h2 className=" text-xl text-[#2E3646]">Loan Information</h2>
          <AiOutlineEllipsis />
        </div>
        <div className="p-2">
          <form onSubmit={handleSubmit} className="p-2">
            <div className="flex gap-6 justify-between">
              <div className="flex flex-col gap-4 w-1/2">
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
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-8 mt-1 focus:outline-none"
                      id="dependents"
                      onChange={handleChange}
                      required
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
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-8 mt-1 focus:outline-none"
                      id="selfEmployed"
                      required
                      onChange={handleChange}
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
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-8 mt-1 focus:outline-none"
                      id="maritalStatus"
                      onChange={handleChange}
                      required
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
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-8 mt-1 focus:outline-none"
                      id="education"
                      onChange={handleChange}
                      required
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
              <div className="flex flex-col gap-4 w-1/2">
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
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-8 mt-1 focus:outline-none"
                      id="loanAmount"
                      onChange={handleChange}
                      required
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
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-8 mt-1 focus:outline-none"
                      id="loanDuration"
                      onChange={handleChange}
                      required
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
                    <input
                      type="text"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-8 mt-1 focus:outline-none"
                      id="loanType"
                      onChange={handleChange}
                      required
                    />
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
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-8 mt-1 focus:outline-none"
                      id="creditHistory"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="bg-[#172233] w-1/6 h-8 mt-4 flex items-center justify-center gap-2 text-white p-2
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
