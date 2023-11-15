import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { HiArrowTrendingUp, HiOutlineHandThumbUp } from 'react-icons/hi2';
import { MdOutlineDataExploration } from 'react-icons/md';
import { PiSortAscendingLight } from 'react-icons/pi';
import { BsArrowDownShort, BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';
import {
  ApprovedButton,
  PendingButton,
  RejectedButton,
  BlueButton,
  GreyButton,
  FairButton,
  GreenButton,
} from '../../utils/Buttons';

const ApplicationDetails = () => {
  return (
    <div className="flex flex-col gap-4 px-24 pt-4 font-[Inter] text-[#5F6D7E]">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <span className="text-xs">Dashboard</span>{' '}
            <span>
              <HiOutlineChevronRight size={12} />
            </span>
            <span className="text-xs">Application Details</span>{' '}
          </div>
          <div className="flex gap-1 items-center">
            <BsArrowLeft />
            <span className="text-xs">Back</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl text-[#2E3646]">
                Muktar Bello
              </h1>
            </div>
            <div className="flex gap-2">
              <GreyButton text="Info" />
              <BlueButton text="Review" />
            </div>
          </div>
          <p className="text-sm">Loan History and Performance</p>
        </div>
      </div>

      <div className="flex gap-3 items-center  bg-[#F7F7F7] rounded-lg p-4">
        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Loan Status</p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <HiOutlineHandThumbUp />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">N102,000.00</span>
            <div className="flex gap-2 text-xs items-center">
              <p>Short Term Loan</p>
              <RejectedButton />
            </div>
          </div>
        </div>

        <div className="border-r border-r-[#5F6D7E] py-2 h-full"></div>

        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Credit Utilization</p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <HiArrowTrendingUp />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">35%</span>
            <div className="flex gap-2 text-xs items-center">
              <p>(&lt;30)</p>
              <FairButton text="Fair" />
            </div>
          </div>
        </div>

        <div className="border-r border-r-[#5F6D7E] py-2 h-full"></div>

        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Outstanding Debt</p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <PiSortAscendingLight />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">N5,000.00</span>
            <div className="flex gap-2 text-xs items-center">
              <p>&lt;20% Previous Debt</p>
              <GreenButton text="Good" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col w-2/5 border rounded-lg bg-[#F7F7F7]">
          <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
            <div className="flex flex-col">
              <p className="text-[#2E3646] font-bold">Credit Score</p>
              <p className="text-sm">FICO Model</p>
            </div>
            <AiOutlineEllipsis />
          </div>

          <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
            Chart
          </div>
          <div className="flex justify-between bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
            <div>
              <p>Change Model</p>
            </div>
            <div className="flex gap-2 items-center">
              <span>More</span>
              <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-3/5 border rounded-lg bg-[#F7F7F7]">
          <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
            <div className="flex flex-col">
              <p className="text-[#2E3646] font-bold">Previous Loans</p>
              <p className="text-sm">Subtitle</p>
            </div>
            <AiOutlineEllipsis />
          </div>

          <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
            Chart
          </div>
        </div>
      </div>
      <div className="flex flex-col  bg-[#F7F7F7]">
        <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
          <div className="flex flex-col">
            <p className="text-[#2E3646] font-bold">
              Previous Loan Applications
            </p>
            <p className="text-sm">Sorted by date</p>
          </div>
          <AiOutlineEllipsis />
        </div>

        <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
          <div className="w-1/5">
            <p>Product</p>
          </div>
          <div className="w-1/5">
            <p>Rev No.</p>
          </div>
          <div className="flex items-center gap-1 w-1/5">
            <p>Status</p> <BsArrowDownShort />
          </div>
          <div className="flex items-center gap-1 w-1/5">
            <p>Amount</p> <BsArrowDownShort />
          </div>
          <div className="flex items-center gap-1 w-1/5"></div>
        </div>

        <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
          <div className=" flex gap-2 items-center w-1/5">
            <FaUserCircle size={25} />
            <div>
              <p className="text-[#2E3646]">Short Term</p>
              <p className="text-xs">Alat by WEMA</p>
            </div>
          </div>
          <div className="flex items-center text-xs w-1/5">
            <p>20237899</p>
          </div>
          <div className="flex items-center w-1/5">
            <GreenButton text="Paid" />
          </div>
          <div className="flex items-center text-xs w-1/5">
            <p>$967.00</p>
          </div>
          <div className="flex items-center text-xs w-1/5">
            <AiOutlineEllipsis />
          </div>
        </div>
        <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
          <div className=" flex gap-2 items-center w-1/5">
            <FaUserCircle size={25} />
            <div>
              <p className="text-[#2E3646]">Short Term</p>
              <p className="text-xs">Alat by WEMA</p>
            </div>
          </div>
          <div className="flex items-center text-xs w-1/5">
            <p>20237899</p>
          </div>
          <div className="flex items-center w-1/5">
            <GreenButton text="Paid" />
          </div>
          <div className="flex items-center text-xs w-1/5">
            <p>$967.00</p>
          </div>
          <div className="flex items-center text-xs w-1/5">
            <AiOutlineEllipsis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
