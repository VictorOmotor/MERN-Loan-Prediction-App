import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsArrowDownShort, BsDownload } from 'react-icons/bs';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { GoXCircle } from 'react-icons/go';
import { HiOutlineChevronRight } from 'react-icons/hi';
import {
  ApprovedButton,
  PendingButton,
  RejectedButton,
  BlueButton,
  GreyButton,
} from '../../utils/Buttons';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 px-24 pt-4 font-[Inter] text-[#5F6D7E]">
      <div className="flex flex-col gap-3.5">
        <div className="flex gap-1 items-center">
          <span className="text-xs">Dashboard</span>{' '}
          <span>
            <HiOutlineChevronRight size={12} />
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl text-[#2E3646]">
                Hello Gbenga,
              </h1>
            </div>
            <div className="flex gap-2">
              <GreyButton text="Existing" />
              <BlueButton text="New" />
            </div>
          </div>
          <p className="text-sm">
            Welcome back, You have <span>13</span> new applications
          </p>
        </div>
      </div>

      <div className="flex gap-3 items-center  bg-[#F7F7F7] rounded-lg p-4">
        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Approved Loans</p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <AiOutlineCheckCircle />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">104</span>
            <div className="flex gap-2 text-xs items-center">
              <p>+10 From Yesterday</p>
              <ApprovedButton />
            </div>
          </div>
        </div>

        <div className="border-r border-r-[#5F6D7E] py-2 h-full"></div>

        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Pending Reviews</p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <HiOutlineExclamationCircle />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">81</span>
            <div className="flex gap-2 text-xs items-center">
              <p>+2 From Yesterday</p>
              <PendingButton />
            </div>
          </div>
        </div>

        <div className="border-r border-r-[#5F6D7E] py-2 h-full"></div>

        <div className="flex flex-col w-1/3">
          <div className="flex items-center justify-between">
            <p>Rejected</p>
            <div className="bg-[#454E5C] p-2 text-white rounded-md">
              <GoXCircle />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">20</span>
            <div className="flex gap-2 text-xs items-center">
              <p>+1 From Yesterday</p>
              <RejectedButton />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  bg-[#F7F7F7]">
        <div className="border-b p-3 border-b-[#D1D9E2]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-[#2E3646] font-bold">Recent Applications</p>
              <p className=" text-xs">Sorted by Time</p>
            </div>
            <div>
              <BsDownload />
            </div>
          </div>
        </div>

        <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-3 border-b-[#D1D9E2]">
          <div className="w-1/3">
            <p>Product</p>
          </div>
          <div className="flex items-center gap-1 w-1/6">
            <p>Date</p> <BsArrowDownShort />
          </div>
          <div className="flex items-center gap-1 w-1/6">
            <p>Status</p> <BsArrowDownShort />
          </div>
          <div className="flex items-center gap-1 w-1/6">
            <p>Credit Score</p> <BsArrowDownShort />
          </div>
          <div className="flex items-center gap-1">
            <p>Amount</p> <BsArrowDownShort />
          </div>
        </div>

        <div className="flex bg-[#F7F7F7] items-center text-sm border-b p-3 border-b-[#D1D9E2]">
          <div className=" flex gap-2 items-center w-1/3">
            <FaUserCircle size={25} />
            <div>
              <p className="text-[#2E3646]">Ogbeni Mallam</p>
              <p className="text-xs">ID -20239078</p>
            </div>
          </div>
          <div className="flex items-center text-xs px-1 w-1/6">
            <p>02/04/23</p>
          </div>
          <div className="flex items-center px-2 w-1/6">
            <ApprovedButton />
          </div>
          <div className="flex items-center text-xs w-1/6 px-2.5">
            <p>810</p>
          </div>
          <div className="flex items-center px-2.5 text-xs w-1/6">
            <p>N 35,000.00</p>
          </div>
          <div className="flex items-center">
            <BsDownload />
          </div>
        </div>

        <div className="flex bg-[#F7F7F7] items-center text-sm border-b p-3 border-b-[#D1D9E2]">
          <div className=" flex gap-2 items-center w-1/3">
            <FaUserCircle size={25} />
            <div>
              <p className="text-[#2E3646]">Ogbeni Mallam</p>
              <p className="text-xs">ID -20239078</p>
            </div>
          </div>
          <div className="flex items-center text-xs px-1 w-1/6">
            <p>02/04/23</p>
          </div>
          <div className="flex items-center px-2 w-1/6">
            <PendingButton />
          </div>
          <div className="flex items-center text-xs w-1/6 px-2.5">
            <p>810</p>
          </div>
          <div className="flex items-center px-2.5 text-xs w-1/6">
            <p>N 35,000.00</p>
          </div>
          <div className="flex items-center">
            <BsDownload />
          </div>
        </div>

        <div className="flex bg-[#F7F7F7] items-center text-sm border-b p-3 border-b-[#D1D9E2]">
          <div className=" flex gap-2 items-center w-1/3">
            <FaUserCircle size={25} />
            <div>
              <p className="text-[#2E3646]">Ogbeni Mallam</p>
              <p className="text-xs">ID -20239078</p>
            </div>
          </div>
          <div className="flex items-center text-xs px-1 w-1/6">
            <p>02/04/23</p>
          </div>
          <div className="flex items-center px-2 w-1/6">
            <RejectedButton />
          </div>
          <div className="flex items-center text-xs w-1/6 px-2.5">
            <p>810</p>
          </div>
          <div className="flex items-center px-2.5 text-xs w-1/6">
            <p>N 35,000.00</p>
          </div>
          <div className="flex items-center">
            <BsDownload />
          </div>
        </div>

        <div className="flex bg-[#F7F7F7] items-center text-sm border-b p-3 border-b-[#D1D9E2]">
          <div className=" flex gap-2 items-center w-1/3">
            <FaUserCircle size={25} />
            <div>
              <p className="text-[#2E3646]">Ogbeni Mallam</p>
              <p className="text-xs">ID -20239078</p>
            </div>
          </div>
          <div className="flex items-center text-xs px-1 w-1/6">
            <p>02/04/23</p>
          </div>
          <div className="flex items-center px-2 w-1/6">
            <ApprovedButton />
          </div>
          <div className="flex items-center text-xs w-1/6 px-2.5">
            <p>810</p>
          </div>
          <div className="flex items-center px-2.5 text-xs w-1/6">
            <p>N 35,000.00</p>
          </div>
          <div className="flex items-center">
            <BsDownload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
