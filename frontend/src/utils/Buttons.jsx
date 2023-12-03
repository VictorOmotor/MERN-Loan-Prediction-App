import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoXCircle } from 'react-icons/go';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const RejectedButton = () => {
  return (
    <div className=" md:flex items-center text-xs gap-0.5 bg-[#FD3D39] rounded px-1 text-white">
      <span>
        <GoXCircle className="hidden md:block" />
      </span>{' '}
      <span>Rejected</span>
    </div>
  );
};
export const ApprovedButton = () => {
  return (
    <div className="md:flex items-center text-xs gap-0.5 bg-[#169872] rounded px-1 text-white">
      <span>
        <AiOutlineCheckCircle className="hidden md:block" />
      </span>{' '}
      <span>Approved</span>
    </div>
  );
};
export const GreenButton = ({ text }) => {
  return (
    <div className="md:flex items-center text-xs gap-0.5 bg-[#169872] rounded px-1 text-white">
      <span>
        <AiOutlineCheckCircle className="hidden md:block" />
      </span>{' '}
      <span>{text}</span>
    </div>
  );
};
export const PendingButton = () => {
  return (
    <div className="md:flex items-center text-xs gap-0.5 bg-[#C0F5F9] rounded px-1 text-[#2E3847]">
      <span>
        <HiOutlineExclamationCircle className="hidden md:block" />
      </span>{' '}
      <span className="font-semibold">Pending</span>
    </div>
  );
};
export const FairButton = ({ text }) => {
  return (
    <div className="md:flex items-center text-xs gap-0.5 bg-fair rounded px-1 text-[#2E3847]">
      <span>
        <HiOutlineExclamationCircle />
      </span>{' '}
      <span className="font-semibold">{text}</span>
    </div>
  );
};
export const PoorButton = ({ text }) => {
  return (
    <div className="md:flex items-center text-xs gap-0.5 bg-[#FD3D39] rounded px-1 text-[#2E3847]">
      <span>
        <HiOutlineExclamationCircle className="hidden md:block" />
      </span>{' '}
      <span className="font-semibold">{text}</span>
    </div>
  );
};
export const BlueButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#2E3646] px-4 py-1 font-semibold text-white text-xs rounded-md"
    >
      {text}
    </button>
  );
};
export const GreyButton = ({ text }) => {
  return (
    <button className="bg-[#E6E9EC] px-4 py-1 md:px-2 font-semibold text-[#5F6D7E] md:py-1 text-xs rounded-md">
      {text}
    </button>
  );
};
export const HomeLogin = () => {
  return (
    <Link to={'/login'}>
      <button className="bg-loginButtonBackground px-3 font-semibold text-[#5F6D7E] py-1 text-xs rounded-md">
        Login
      </button>
    </Link>
  );
};
export const HomeSignUp = () => {
  return (
    <Link to={'/signup'}>
      <button className="bg-[#1436D9] px-3 font-semibold text-[#FFF] py-1 text-xs rounded-md">
        Sign Up
      </button>
    </Link>
  );
};
export const HomeButton = ({ text }) => {
  return (
    <Link to={'/onboard'}>
      <button className="bg-[#1436D9] font-semibold text-[#FFF] p-2 md:p-3 text-xs uppercase">
        {text}
      </button>
    </Link>
  );
};
