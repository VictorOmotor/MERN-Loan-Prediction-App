import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { CiCircleCheck } from 'react-icons/ci';
import { LuAlertCircle } from 'react-icons/lu';

export const ResetPasswordWidget = ({
  isVisible,
  email,
  onContinue,
  onClose,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50" />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 p-6 justify-center items-center text-[#5F6D7E] font-[Inter] gap-3 bg-[#E9EBF1] border border-gray-300 rounded-lg shadow-xsm relative">
          <FaTimes
            className="cursor-pointer absolute top-2 right-2"
            onClick={onClose}
          />
          <div className="flex flex-col items-center gap-1.5">
            <CiCircleCheck size={30} className="text-slate-500" />
            <h1 className="font-bold">Reset Link</h1>
          </div>

          <p className="text-center text-xs flex flex-col text-slate-500">
            A password reset link has been sent to{' '}
            <span className="text-[#172233]">{email}</span>
          </p>
          <button
            onClick={onContinue}
            className="bg-[#4CAF4F] px-2 font-extrabold text-[#2E3847] py-1  rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export const PasswordChangedWidget = ({ isVisible, onContinue, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50" />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 p-6 justify-center items-center text-[#5F6D7E] font-[Inter] gap-3 bg-[#E9EBF1] border border-gray-300 rounded-lg shadow-xsm relative">
          <FaTimes
            className="cursor-pointer absolute top-2 right-2"
            onClick={onClose}
          />
          <div className="flex flex-col items-center gap-1.5">
            <CiCircleCheck size={30} className="text-slate-500" />
            <h1 className="font-bold">Password Changed</h1>
          </div>

          <p className="text-center text-xs flex flex-col text-slate-500">
            Congratulations, your password has been successfully <br /> changed.
            You may now proceed to Log in.
          </p>
          <button
            onClick={onContinue}
            className="bg-[#5E74A2] px-2 font-extrabold text-[#FFF] py-1  rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export const SignUpSuccessfulWidget = ({ isVisible, onContinue, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50" />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 p-6 justify-center items-center text-[#5F6D7E] font-[Inter] gap-3 bg-[#E9EBF1] border border-gray-300 rounded-lg shadow-xsm relative">
          <FaTimes
            className="cursor-pointer absolute top-2 right-2"
            onClick={onClose}
          />
          <div className="flex flex-col items-center gap-1.5">
            <CiCircleCheck size={30} className="text-slate-500" />
            <h1 className="font-bold">Congratulations !!!</h1>
          </div>

          <p className="text-center text-xs flex flex-col text-slate-500">
            Your signup for our Cash2Go app is now complete. Get ready <br /> to
            unlock great financial possibilities and achieve your goals.
          </p>
          <button
            onClick={onContinue}
            className="bg-[#5E74A2] px-2 font-extrabold text-[#FFF] py-1  rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export const EmailVerificationWidget = ({
  isVisible,
  onContinue,
  onClose,
  email,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50" />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 p-6 justify-center items-center text-[#5F6D7E] font-[Inter] gap-3 bg-[#E9EBF1] border border-gray-300 rounded-lg shadow-xsm relative">
          <FaTimes
            className="cursor-pointer absolute top-2 right-2"
            onClick={onClose}
          />
          <div className="flex flex-col items-center gap-1.5">
            <LuAlertCircle size={30} className="text-slate-500" />
            <h1 className="font-bold">Confirm e-mail</h1>
          </div>
          <div className="flex flex-col text-center">
            <p className=" text-xs text-slate-500">
              An email has been sent to{' '}
              <span className="text-[#172233]">{email}</span> Kindly check{' '}
              <br /> your inbox to confirm your registration
            </p>
          </div>

          <button
            onClick={onContinue}
            className="bg-[#5E74A2] px-2 font-extrabold text-[#FFF] py-1  rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
