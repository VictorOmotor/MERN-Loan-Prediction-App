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
import { PendingButton } from '../../utils/Buttons';

const PendingApplications = () => {
  return (
    <div className="flex flex-col gap-4 px-24 pt-4 font-[Inter] text-[#5F6D7E]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <span className="text-xs">Applications</span>{' '}
          <span>
            <HiOutlineChevronRight size={12} />
          </span>
          <span className="text-xs">Pending</span>{' '}
        </div>
        <div className="flex gap-1 items-center">
          <BsArrowLeft />
          <span className="text-xs">Back</span>
        </div>
      </div>

      <div className="flex gap-3 items-center text-xs border-t border-t-[#D1D9E2]">
        <div className="border-b border-b-[#5F6D7E] py-3">
          <h3>All Applications</h3>
        </div>
        <div className=" border-b border-b-[#5F6D7E] py-3">
          <h3>Approved</h3>
        </div>
        <div className=" border-b-[2px] border-b-[#2E3646] py-3">
          <h3>Pending</h3>
        </div>
        <div className=" border-b border-b-[#5F6D7E] py-3">
          <h3>Rejected</h3>
        </div>
      </div>

      <div className="flex flex-col  bg-[#F7F7F7]">
        <div className="border-b p-2 border-b-[#D1D9E2]">
          <p className="text-[#2E3646] font-bold">Recent Applications</p>
        </div>

        <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
          <div className="w-1/3">
            <p>Applicant's Info</p>
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

        <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
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

        <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
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

        <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
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

        <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
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
        <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
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
        <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
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
        <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
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
        <div className="flex justify-between bg-[#F7F7F7] items-center text-xs border-b py-1 px-2 border-b-[#D1D9E2]">
          <div className=" flex gap-2 items-center">
            <BsArrowLeft />
            <span className="text-[#2E3646]">Prev</span>
          </div>
          <div className="flex items-center gap-4 text-xs px-1">
            <span>1</span>
            <span>2</span>
            <AiOutlineEllipsis />
            <span className="border bg-[#E6E9EC] p-2">5</span>
            <span>6</span>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="text-[#2E3646]">Next</span>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingApplications;
