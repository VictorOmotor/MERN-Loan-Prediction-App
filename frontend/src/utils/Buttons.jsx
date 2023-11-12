import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoXCircle } from 'react-icons/go';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export const RejectedButton = () => {
  return (
    <div className="flex items-center text-xs gap-0.5 bg-[#FD3D39] rounded px-1 text-white">
      <span>
        <GoXCircle />
      </span>{' '}
      <span>Rejected</span>
    </div>
  );
};
export const ApprovedButton = () => {
  return (
    <div className="flex items-center text-xs gap-0.5 bg-[#169872] rounded px-1 text-white">
      <span>
        <AiOutlineCheckCircle />
      </span>{' '}
      <span>Approved</span>
    </div>
  );
};
export const PendingButton = () => {
  return (
    <div className="flex items-center text-xs gap-0.5 bg-[#C0F5F9] rounded px-1 text-[#2E3847]">
      <span>
        <HiOutlineExclamationCircle />
      </span>{' '}
      <span className="font-semibold">Pending</span>
    </div>
  );
};
