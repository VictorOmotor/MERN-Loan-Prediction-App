import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoXCircle } from 'react-icons/go';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export const ApprovedIcon = () => {
  return (
    <div className="bg-[#169872] p-1 md:p-2 text-white rounded-md">
      <AiOutlineCheckCircle />
    </div>
  );
};
export const PendingIcon = () => {
  return (
    <div className="bg-[#C0F5F9] p-1 md:p-2 text-white rounded-md">
      <HiOutlineExclamationCircle />
    </div>
  );
};
export const RejectedIcon = () => {
  return (
    <div className="bg-[#FD3D39] p-1 md:p-2 text-white rounded-md">
      <GoXCircle />
    </div>
  );
};
