import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import {
  BsArrowDownShort,
  BsArrowLeft,
  BsArrowRight,
  BsDownload,
} from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';
import {
  ApprovedButton,
  PendingButton,
  RejectedButton,
  BlueButton,
  GreyButton,
} from '../../utils/Buttons';

const GeneralAnalytics = () => {
  return (
    <div className="flex flex-col gap-4 px-24 pt-4 font-[Inter] text-[#5F6D7E]">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <span className="text-xs">Dashboard</span>{' '}
            <span>
              <HiOutlineChevronRight size={12} />
            </span>
            <span className="text-xs">Analytics</span>{' '}
          </div>
          <div className="flex gap-1 items-center">
            <BsArrowLeft />
            <span className="text-xs">Back</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl text-[#2E3646]">Analytics</h1>
            </div>
            <div className="flex gap-2">
              <GreyButton text="Info" />
              <BlueButton text="Applicants" />
            </div>
          </div>
          <p className="text-sm">Loan Performance Dashboard</p>
        </div>
      </div>

      <div className="flex flex-col border rounded-lg bg-[#F7F7F7]">
        <div className=" flex items-center border-b p-2 border-b-[#D1D9E2]">
          <div className="flex flex-col w-1/2">
            <p className="text-[#2E3646] font-bold">
              Total Loans Vs Approved Vs Declined
            </p>
            <p className="text-sm">Jan - May 2003</p>
          </div>
          <AiOutlineEllipsis />
        </div>

        <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
          Chart
        </div>

        <div className="flex justify-between bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
          <div>
            <p>Data in person range</p>
          </div>
          <div className="flex gap-2 items-center">
            <span>Link</span>
            <BsArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col w-2/5 border rounded-lg bg-[#F7F7F7]">
          <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
            <div className="flex flex-col">
              <p className="text-[#2E3646] font-bold">
                Overall Average Credit Score
              </p>
              <p className="text-sm">April 2003</p>
            </div>
            <AiOutlineEllipsis />
          </div>

          <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
            Chart
          </div>
        </div>

        <div className="flex flex-col w-3/5 border rounded-lg bg-[#F7F7F7]">
          <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
            <div className="flex flex-col">
              <p className="text-[#2E3646] font-bold">Total Loan Requests</p>
              <p className="text-sm">Jan - May 2003</p>
            </div>
            <AiOutlineEllipsis />
          </div>

          <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
            Chart
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralAnalytics;
