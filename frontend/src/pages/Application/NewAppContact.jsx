import React, { useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { GoArrowRight } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setContactFormData } from '../../redux/form/formSlice';

const NewAppContact = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { contactFormData } = useSelector((state) => state.form);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const companyId = currentUser.user.companyId;

  const handleChange = (e) => {
    const updatedFormData = {
      ...contactFormData,
      [e.target.id]: e.target.value,
    };

    dispatch(setContactFormData(updatedFormData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(contactFormData.dob);
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    const { phone, nextOfKinPhone, bvn } = contactFormData;
    const pattern = /^\d{11}$/;
    if (!pattern.test(phone)) {
      setError('Invalid phone number!');
    } else if (!pattern.test(nextOfKinPhone)) {
      setError('Invalid next of kin phone number!');
    } else if (bvn.length !== 11 && bvn.length !== 12) {
      setError('Invalid bvn!');
    } else if (selectedDate > eighteenYearsAgo) {
      setError('Must be 18 years or older!');
    } else {
      setError(null);
      navigate('/applications/new-application/loaninfo');
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
          <span className="text-xs">Personal Info</span>{' '}
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
        <Link to={'#'}>
          <div className=" border-b-[2px] border-b-[#2E3646] py-3">
            <h3>Contact Info</h3>
          </div>
        </Link>
        <Link to={'/applications/new-application/loaninfo'}>
          <div className=" border-b border-b-[#5F6D7E] py-3">
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
          <h2 className=" text-xl text-[#2E3646]">Personal Information</h2>
          <AiOutlineEllipsis />
        </div>
        <div className="p-2">
          <form onSubmit={handleSubmit} className="px-2">
            <div className="flex gap-6 justify-between">
              <div className="flex flex-col gap-2 w-1/2">
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="companyId"
                  >
                    ID Number
                  </label>
                  <div>
                    <input
                      type="text"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 text-xs mt-1 focus:outline-none"
                      id="companyId"
                      required
                      defaultValue={companyId}
                      disabled
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="First Name Last Name"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 text-xs mt-1 focus:outline-none"
                      id="applicantName"
                      onChange={handleChange}
                      required
                      value={contactFormData?.applicantName || ''}
                    />
                  </div>
                </div>
                <div className="">
                  <label className="text-[#5F6D7E] font-semibold" htmlFor="bvn">
                    BVN
                  </label>
                  <div>
                    <input
                      type="number"
                      placeholder="1234567890"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 text-xs mt-1 focus:outline-none"
                      id="bvn"
                      required
                      onChange={handleChange}
                      value={contactFormData?.bvn || ''}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 text-xs mt-1 focus:outline-none"
                      id="gender"
                      onChange={handleChange}
                      required
                      value={contactFormData?.gender || ''}
                    >
                      <option className="text-[#5F6D7E] font-semibold" value="">
                        Please select your gender
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="male"
                      >
                        Male
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="female"
                      >
                        Female
                      </option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <label className="text-[#5F6D7E] font-semibold" htmlFor="dob">
                    Date of Birth
                  </label>
                  <div>
                    <input
                      type="date"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 text-xs mt-1 focus:outline-none uppercase"
                      id="dob"
                      onChange={handleChange}
                      required
                      value={contactFormData?.dob || ''}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="stateOfOrigin"
                  >
                    State of Origin
                  </label>
                  <div>
                    <select
                      type="text"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 text-xs mt-1 focus:outline-none"
                      id="stateOfOrigin"
                      onChange={handleChange}
                      required
                      value={contactFormData?.stateOfOrigin || ''}
                    >
                      <option className="text-[#5F6D7E] font-semibold" value="">
                        Please select
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="abia"
                      >
                        Abia
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="adamawa"
                      >
                        Adamawa
                      </option>
                      <option
                        className="text-[#5F6D7E] font-semibold"
                        value="akwaIbom"
                      >
                        Akwa Ibom
                      </option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="contactAddress"
                  >
                    Address
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Contact Address"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 text-xs mt-1 focus:outline-none"
                      id="contactAddress"
                      onChange={handleChange}
                      required
                      value={contactFormData?.contactAddress || ''}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="workAddress"
                  >
                    Work Address
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Employee's Address"
                      className="border border-[#5F6D7E] p-2 rounded-lg w-full h-8 text-xs mt-1 focus:outline-none"
                      id="workAddress"
                      onChange={handleChange}
                      value={contactFormData?.workAddress || ''}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="08012345678"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 text-xs mt-1 focus:outline-none"
                      id="phone"
                      onChange={handleChange}
                      required
                      value={contactFormData?.phone || ''}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className="text-[#5F6D7E] font-semibold"
                    htmlFor="nextOfKin"
                  >
                    Next of Kin Number
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="08012345678"
                      className="border border-[#5F6D7E] p-1 rounded-lg w-full h-7 text-xs mt-1 focus:outline-none"
                      id="nextOfKinPhone"
                      onChange={handleChange}
                      required
                      value={contactFormData?.nextOfKinPhone || ''}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="bg-[#172233] w-1/3 h-8 mt-1 flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
            >
              Next <GoArrowRight />
            </button>
          </form>
          {error && <p className="text-red-500 text-sm my-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default NewAppContact;
