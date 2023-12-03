import React, { useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetForm, setHistoryFormData } from '../../redux/form/formSlice';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';

const NewAppFinHistory = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { historyFormData, contactFormData, loanFormData } = useSelector(
    (state) => state.form,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = '/api/applications/create';

  const handleChange = (e) => {
    const updatedFormData = {
      ...historyFormData,
      [e.target.id]: e.target.value,
    };

    dispatch(setHistoryFormData(updatedFormData));
  };

  const formData = { ...contactFormData, ...loanFormData, ...historyFormData };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { loanDuration } = loanFormData;
    const selectedLoanDate = new Date(loanDuration);
    const selectedDate = new Date(contactFormData.dob);
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    const { phone, nextOfKinPhone, bvn } = contactFormData;
    const pattern = /^\d{11}$/;
    if (selectedLoanDate <= new Date()) {
      setError('Loan duration must be a date after today.');
    } else if (!pattern.test(phone)) {
      setError('Invalid phone number!');
    } else if (!pattern.test(nextOfKinPhone)) {
      setError('Invalid next of kin phone number!');
    } else if (bvn.length !== 11 && bvn.length !== 12) {
      setError('Invalid bvn!');
    } else if (selectedDate > eighteenYearsAgo) {
      setError('Must be 18 years or older!');
    } else {
      try {
        setError(null);
        setLoading(true);
        const response = await axios.post(url, formData);
        setLoading(false);
        dispatch(resetForm());
        navigate(`/applications/overview/${response.data.applicationId}`);
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
    <div className="flex flex-col gap-4 px-5 md:px-24 pt-4 font-[Inter] text-[#5F6D7E]">
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
        <Link to={'/applications/new-application/loaninfo'}>
          <div className=" border-b border-b-[#5F6D7E] py-3">
            <h3>Loan Info</h3>
          </div>
        </Link>
        <Link to={'#'}>
          <div className=" border-b-[2px] border-b-[#2E3646] py-3">
            <h3>Financial History</h3>
          </div>
        </Link>
      </div>
      <div className="flex flex-col bg-[#F8F9FB]">
        <div className="p-3 flex justify-between items-center border-b border-b-[#D1D9E2]">
          <h2 className=" text-xl text-[#2E3646]">Prediction Information</h2>
          <AiOutlineEllipsis />
        </div>
        <div className="p-2">
          <form onSubmit={handleSubmit} className="p-2">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-between">
              <div className="flex flex-col gap-2 md:gap-3 w-full md:w-1/2">
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="creditScore"
                  >
                    Credit Score
                  </label>
                  <div>
                    <input
                      type="number"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="creditScore"
                      required
                      onChange={handleChange}
                      value={historyFormData?.creditScore || ''}
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
                    <input
                      type="number"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="creditDebitRatio"
                      required
                      onChange={handleChange}
                      value={historyFormData?.creditDebitRatio || ''}
                    />
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
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="salaryEarner"
                      required
                      onChange={handleChange}
                      value={historyFormData?.salaryEarner || ''}
                    >
                      <option className="text-[#5F6D7E] font-semibold" value="">
                        Please select an answer
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
                    htmlFor="lastLoanAmount"
                  >
                    Last Loan Amount
                  </label>
                  <div>
                    <input
                      type="number"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="lastLoanAmount"
                      required
                      onChange={handleChange}
                      value={historyFormData?.lastLoanAmount || ''}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-3 w-full md:w-1/2">
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="creditBalance"
                  >
                    Credit Balance
                  </label>
                  <div>
                    <input
                      type="number"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="creditBalance"
                      required
                      onChange={handleChange}
                      value={historyFormData?.creditBalance || ''}
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
                      type="number"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="applicantIncome"
                      required
                      onChange={handleChange}
                      value={historyFormData?.applicantIncome || ''}
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
                      type="number"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="coApplicantIncome"
                      required
                      onChange={handleChange}
                      value={historyFormData?.coApplicantIncome || ''}
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
                    <input
                      type="date"
                      className="border border-[#5F6D7E] p-1 uppercase rounded-lg w-full h-7 mt-1 focus:outline-none"
                      id="lastLoanDate"
                      onChange={handleChange}
                      value={historyFormData?.lastLoanDate || ''}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="bg-[#172233] w-full md:w-1/3 h-7 mt-4 flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <Spinner className="w-6 h-6 animate-spin rounded-full border-4 border-t-[#5F6D7E]" />
              ) : (
                <>Make Prediction</>
              )}
            </button>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAppFinHistory;
