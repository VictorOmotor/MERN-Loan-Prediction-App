import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlineChevronRight } from 'react-icons/hi';

const NewAppFinHistory = () => {
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
          <span className="text-xs">Prediction Info</span>{' '}
          <span>
            <HiOutlineChevronRight size={12} />
          </span>
        </div>
        <div className="flex gap-1 items-center">
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
        <div className=" border-b border-b-[#5F6D7E] py-3">
          <h3>Loan Info</h3>
        </div>
        <div className=" border-b-[2px] border-b-[#2E3646] py-3">
          <h3>Financial History</h3>
        </div>
      </div>
      <div className="flex flex-col bg-[#F8F9FB]">
        <div className="p-3 flex justify-between items-center border-b border-b-[#D1D9E2]">
          <h2 className=" text-xl text-[#2E3646]">Prediction Information</h2>
          <AiOutlineEllipsis />
        </div>
        <div className="p-2">
          <form className="p-2">
            <div className="flex gap-6 justify-between">
              <div className="flex flex-col gap-4 w-1/2">
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="creditScore"
                  >
                    Credit Score
                  </label>
                  <div>
                    <input
                      type="text"
                      className="border border-[#5F6D7E] p-2 rounded-lg w-full h-10 mt-1 focus:outline-none"
                      id="creditScore"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="creditDebitRatio"
                  >
                    Credit - Debit Ratio
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-2 rounded-lg w-full h-10 mt-1 focus:outline-none"
                      id="creditDebitRatio"
                      required
                    >
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value=" "
                      >
                        Please select a ratio
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="1.6 "
                      >
                        1.6%
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value=" 3.4"
                      >
                        3.4%
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="5 "
                      >
                        5%
                      </option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="salaryEarner"
                  >
                    Salary Earner
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-2 rounded-lg w-full h-10 mt-1 focus:outline-none"
                      id="salaryEarner"
                      required
                    >
                      <option className="text-[#5F6D7E] font-semibold" value="">
                        Please select an answer
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="Yes "
                      >
                        Yes
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="No "
                      >
                        No
                      </option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="lastLoanAmount"
                  >
                    Last Loan Amount
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-2 rounded-lg w-full h-10 mt-1 focus:outline-none"
                      id="lastLoanAmount"
                      required
                    >
                      <option className="text-[#5F6D7E] font-semibold" value="">
                        Please select an answer
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="40000"
                      >
                        40,000.00
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="100000"
                      >
                        100,000.00
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="500000"
                      >
                        500,000.00
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-1/2">
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="creditBalance"
                  >
                    Credit Balance
                  </label>
                  <div>
                    <input
                      type="text"
                      className="border border-[#5F6D7E] p-2 rounded-lg w-full h-10 mt-1 focus:outline-none"
                      id="creditBalance"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="applicantIncome"
                  >
                    Applicant's Income
                  </label>
                  <div>
                    <input
                      type="text"
                      className="border border-[#5F6D7E] p-2 rounded-lg w-full h-10 mt-1 focus:outline-none"
                      id="applicantIncome"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="coApplicantIncome"
                  >
                    Co-applicant's Income
                  </label>
                  <div>
                    <input
                      type="text"
                      className="border border-[#5F6D7E] p-2 rounded-lg w-full h-10 mt-1 focus:outline-none"
                      id="coApplicantIncome"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="lastLoanDate"
                  >
                    Last Loan Date
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-2 rounded-lg w-full h-10 mt-1 focus:outline-none"
                      id="lastLoanDate"
                      required
                    >
                      <option className="text-[#5F6D7E] font-semibold" value="">
                        Please select an answer
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="below6Months"
                      >
                        &lt; 6 Months
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="above6Months"
                      >
                        &gt; 6 Months
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="above18Months"
                      >
                        &gt; 18 Months
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="bg-[#172233] w-1/3 mt-4 flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
            >
              Make Prediction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAppFinHistory;
