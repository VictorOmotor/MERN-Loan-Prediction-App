import React from 'react';
import { BsArrowLeft, BsDownload, BsArrowRight } from 'react-icons/bs';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { LiaPrintSolid } from 'react-icons/lia';

const ApplicantPredInfo = () => {
  return (
    <div className="flex flex-col gap-4 px-24 pt-4 font-[Inter] text-[#5F6D7E]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <span className="text-xs">Applications</span>{' '}
          <span>
            <HiOutlineChevronRight size={12} />
          </span>
          <span className="text-xs">Applicant's Info</span>{' '}
          <span>
            <HiOutlineChevronRight size={12} />
          </span>
          <span className="text-xs">Prediction Info</span>{' '}
        </div>
        <div className="flex gap-1 items-center">
          <BsArrowLeft />
          <span className="text-xs">Back</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl text-[#2E3646]">Muktar Bello</h1>
          <p className="text-xs">ID 20239076</p>
        </div>
        <div className="flex gap-3">
          <LiaPrintSolid />
          <BsDownload />
          <BsArrowRight />
        </div>
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
      <div className="flex flex-col border rounded-lg bg-[#F8F9FB]">
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">Information</p>
          <p>Value</p>
        </div>
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">BVN</p>
          <p>1234567890</p>
        </div>
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">Loan Amount</p>
          <p>40,000.00</p>
        </div>
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">Income</p>
          <p>&lt; 25,000.00</p>
        </div>
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">Dependents</p>
          <p>0</p>
        </div>
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">Employment Details</p>
          <p>Self Employed</p>
        </div>
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">Married</p>
          <p>Yes</p>
        </div>
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">Credit History</p>
          <p>1</p>
        </div>
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">Education</p>
          <p>Graduate</p>
        </div>
        <div className="flex p-2 border-b border-b-[#bdd1e9]">
          <p className="w-1/5">Property Area</p>
          <p>Rural</p>
        </div>
        <div className="flex p-1 border-b border-b-[#bdd1e9]">
          <p className="w-1/5"></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ApplicantPredInfo;
