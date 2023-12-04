import React, { useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const InitialPredicion = () => {
  const [mode, setMode] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mode) {
      setError('Please select an option!');
    } else if (mode !== 'manual') {
      setError('Not available at the moment!');
    } else {
      setError(null);
      navigate('/applications/new-application/personalinfo', {
        state: { mode },
      });
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
        <h1 className="font-bold text-2xl text-[#2E3646]">New Prediction</h1>
        <p className="text-xs">Please select an input method</p>
      </div>
      <div className="flex flex-col bg-[#F8F9FB]">
        <div className="p-3 flex justify-between items-center border-b border-b-[#D1D9E2]">
          <h2 className=" text-xl text-[#2E3646]">Applicant's Details</h2>
          <AiOutlineEllipsis />
        </div>
        <div className="p-3 mb-32">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="text-[#5F6D7E] font-semibold" htmlFor="mode">
                Mode
              </label>
              <div className="flex flex-col md:flex-row gap-4 w-4/5 md:w-full md:gap-10 md:items-center">
                <select
                  type="text"
                  className="border border-[#5F6D7E] p-2 rounded-lg md:w-1/3 h-10 mt-1 focus:outline-none"
                  id="mode"
                  required
                  onChange={(e) => setMode(e.target.value)}
                >
                  <option className="text-[#5F6D7E] font-semibold" value=" ">
                    Select option
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="manual"
                  >
                    Manual Input
                  </option>
                  <option className="text-[#5F6D7E] font-semibold" value="bvn">
                    Use BVN
                  </option>
                  <option
                    className="text-[#5F6D7E] font-semibold"
                    value="bankStatement "
                  >
                    Use Bank Statement
                  </option>
                </select>
                <button
                  className="bg-[#172233] flex items-center justify-center gap-2 md:w-1/6 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
                >
                  Next <GoArrowRight />
                </button>
              </div>
              <p className="text-red-500 text-sm my-2">{error ? error : ''}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InitialPredicion;
