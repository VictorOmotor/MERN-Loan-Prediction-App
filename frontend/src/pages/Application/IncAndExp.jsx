import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2';
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
import { RiArrowUpDownLine } from 'react-icons/ri';

const IncAndExp = () => {
  return (
    <div className="flex flex-col gap-4 px-24 pt-4 font-[Inter] text-[#5F6D7E]">
      <div className="flex flex-col gap-3.5">
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
            <span className="text-xs">Review</span>{' '}
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
                Ogbeni Mallam
              </h1>
            </div>
            <div className="flex gap-2">
              <GreyButton text="Contact" />
              <BlueButton text="Message" />
            </div>
          </div>
          <p className="text-sm">ID 20239076</p>
        </div>
      </div>

      <div className="flex gap-3 items-center text-xs border-t border-t-[#D1D9E2]">
        <div className="border-b border-b-[#5F6D7E] py-3">
          <h3>Cashflow</h3>
        </div>
        <div className=" border-b border-b-[#5F6D7E] py-3">
          <h3>Previous Loans</h3>
        </div>
        <div className=" border-b-[2px] border-b-[#2E3646] py-3">
          <h3>Income & Expenditure</h3>
        </div>
        <div className=" border-b border-b-[#5F6D7E] py-3">
          <h3>Spending Pattern</h3>
        </div>
        <div className=" border-b border-b-[#5F6D7E] py-3">
          <h3>Behavioural</h3>
        </div>
      </div>

      <div className="flex gap-3 items-center  bg-[#F7F7F7] rounded-lg p-4">
        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Salary Earner</p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <RiArrowUpDownLine />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Yes</span>
            <div className="flex gap-2 text-xs items-center">
              <p>&lt; True</p>
              <GreenButton text="Good" />
            </div>
          </div>
        </div>

        <div className="border-r border-r-[#5F6D7E] py-2 h-full"></div>

        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Average Salary</p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <HiArrowTrendingUp />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">N50,000.00</span>
            <div className="flex gap-2 text-xs items-center">
              <p>&gt; 5% Loan Amount</p>
              <GreenButton text="Good" />
            </div>
          </div>
        </div>

        <div className="border-r border-r-[#5F6D7E] py-2 h-full"></div>

        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Income-Expenditure % </p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <HiArrowTrendingDown />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">62%</span>
            <div className="flex gap-2 text-xs items-center">
              <p>(&gt; 50%)</p>
              <FairButton text="Fair" />
            </div>
          </div>
        </div>

        <div className="border-r border-r-[#5F6D7E] py-2 h-full"></div>

        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Average Other Income</p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <PiSortAscendingLight />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">N22,000.00</span>
            <div className="flex gap-2 text-xs items-center">
              <p>&lt; N/A</p>
              <GreenButton text="Good" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col w-2/5 border rounded-lg bg-[#F7F7F7]">
          <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
            <div className="flex flex-col">
              <p className="text-[#2E3646] font-bold">Average Repay Rate</p>
              <p className="text-sm">April, 2023</p>
            </div>
            <AiOutlineEllipsis />
          </div>

          <div className=" bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
            Chart
          </div>
          <div className="flex justify-between bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
            <div>
              <p>Subtitle</p>
            </div>
            <div className="flex gap-2 items-center">
              <span>Change</span>
              <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-3/5 border rounded-lg bg-[#F7F7F7]">
          <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
            <div className="flex flex-col">
              <p className="text-[#2E3646] font-bold">Previous Loans</p>
              <p className="text-sm">Most Recent</p>
            </div>
            <AiOutlineEllipsis />
          </div>

          <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
            Chart
          </div>
          <div className=" flex gap-2 items-center bg-[#F7F7F7] text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
            <p>Link</p>
            <BsArrowRight />
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

export default IncAndExp;
