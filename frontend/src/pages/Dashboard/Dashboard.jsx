import React, { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineEllipsis } from 'react-icons/ai';
import {
  BsArrowDownShort,
  BsArrowLeft,
  BsArrowRight,
  BsDownload,
} from 'react-icons/bs';
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
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { formatDateWithSlash } from '../../utils';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState(null);
  const url = '/api/applications/get';
  const navigate = useNavigate();
  const rejectedApplications = applications?.filter(
    ({ status }) => status === 'rejected',
  );
  const approvedApplications = applications?.filter(
    ({ status }) => status === 'approved',
  );
  const pendingApplications = applications?.filter(
    ({ status }) => status === 'pending',
  );
  let fullName =
    currentUser?.user?.firstName + ' ' + currentUser?.user?.surname;

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setApplications(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setError(message);
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);
  return (
    <div className="flex flex-col gap-4 px-5 md:px-24 py-4 text-xs lg:text-base font-[Inter] text-[#5F6D7E]">
      <div className="flex flex-col gap-3.5">
        <div className="flex gap-1 items-center justify-between md:justify-start">
          <span className="text-xs">Dashboard</span>{' '}
          <span>
            <HiOutlineChevronRight size={12} className="hidden md:block" />
          </span>
          <div className="md:hidden flex items-center gap-2">
            <Link to={'/applications/all'}>
              <GreyButton text="Existing" />
            </Link>
            <Link to={'/applications/new-application/prediction'}>
              <BlueButton text="New" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl truncate md:text-2xl text-[#2E3646]">
                {fullName},
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Link to={'/applications/all'}>
                <GreyButton text="Existing" />
              </Link>
              <Link to={'/applications/new-application/prediction'}>
                <BlueButton text="New" />
              </Link>
            </div>
          </div>
          {applications ? (
            <p className="text-sm">
              Welcome back, You have <span>{applications.length}</span> new
              applications
            </p>
          ) : (
            <p className="text-sm">Welcome, You have no applications</p>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 items-center  bg-[#F7F7F7] rounded-lg p-4">
        <div className="flex flex-col w-full md:w-1/3">
          <div className="flex items-center justify-between">
            <p>Approved Loans</p>
            <div className="bg-[#454E5C] p-1 md:p-2 text-white rounded-md">
              <AiOutlineCheckCircle />
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-0">
            <span className="font-bold">
              {approvedApplications ? approvedApplications.length : 0}
            </span>
            <div className="flex gap-2 text-xs items-center">
              {approvedApplications ? (
                <p>+{approvedApplications?.length} From Yesterday</p>
              ) : (
                <p>No approved application</p>
              )}
              <ApprovedButton />
            </div>
          </div>
        </div>

        <div className=" border-t border-t-[#5F6D7E] w-full md:w-0 md:border-r md:border-r-[#5F6D7E] md:py-10 md:h-full"></div>

        <div className="flex flex-col w-full md:w-1/3">
          <div className="flex items-center justify-between">
            <p>Pending Reviews</p>
            <div className="bg-[#454E5C] p-1 md:p-2 text-white rounded-md">
              <HiOutlineExclamationCircle />
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-0">
            <span className="font-bold">
              {pendingApplications ? pendingApplications.length : 0}
            </span>
            <div className="flex gap-2 text-xs items-center">
              {pendingApplications ? (
                <p>+{pendingApplications?.length} From Yesterday</p>
              ) : (
                <p>No pending application</p>
              )}
              <PendingButton />
            </div>
          </div>
        </div>

        <div className="border-t border-t-[#5F6D7E] w-full md:w-0 md:border-r md:border-r-[#5F6D7E] md:py-10 md:h-full"></div>

        <div className="flex flex-col w-full md:w-1/3">
          <div className="flex items-center justify-between">
            <p>Rejected Loans</p>
            <div className="bg-[#454E5C] p-1 md:p-2 text-white rounded-md">
              <GoXCircle />
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-0">
            <span className="font-bold">
              {rejectedApplications ? rejectedApplications.length : 0}
            </span>
            <div className="flex gap-2 text-xs items-center">
              {rejectedApplications ? (
                <p>+{rejectedApplications?.length} From Yesterday</p>
              ) : (
                <p>No rejected application</p>
              )}
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
              <BsDownload className="hidden md:block" />
            </div>
          </div>
        </div>

        <div className="flex justify-between md:justify-start bg-[#F7F7F7] items-center font-bold text-xs border-b p-3 border-b-[#D1D9E2]">
          <div className="w-1/3">
            <p>Product</p>
          </div>
          <div className="flex items-center gap-1 w-1/6">
            <p>Date</p> <BsArrowDownShort className="hidden md:block" />
          </div>
          <div className="flex items-center gap-1 w-1/6">
            <p>Status</p> <BsArrowDownShort className="hidden md:block" />
          </div>
          <div className="hidden md:flex items-center gap-1 w-1/6 md:w-1/5">
            <p>Credit Score</p> <BsArrowDownShort className="hidden md:block" />
          </div>
          <div className="hidden md:flex items-center gap-1 ml-3 md:ml-0">
            <p>Amount</p> <BsArrowDownShort className="hidden md:block" />
          </div>
        </div>
        {applications ? (
          applications
            ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            ?.map(
              ({
                _id,
                loanAmount,
                applicantName,
                applicationId,
                creditScore,
                status,
                createdAt,
              }) => (
                <Link to={`/applications/overview/${applicationId}`}>
                  <div
                    key={_id}
                    className="flex justify-between md:justify-start bg-[#F7F7F7] items-center text-sm border-b px-2 h-12 border-b-[#D1D9E2]"
                  >
                    <div className=" flex gap-2 items-center w-1/3">
                      <FaUserCircle size={25} className="hidden md:block" />
                      <div>
                        <p className="text-[#2E3646] truncate">
                          {applicantName}
                        </p>
                        <p className="text-xs">ID-{applicationId}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-xs md:px-1 w-1/6">
                      <p>{formatDateWithSlash(createdAt)}</p>
                    </div>
                    <div className="flex items-center md:px-2 w-1/6">
                      {status === 'approved' ? (
                        <ApprovedButton />
                      ) : status === 'pending' ? (
                        <PendingButton />
                      ) : (
                        <RejectedButton />
                      )}
                    </div>
                    <div className="hidden md:flex items-center text-xs w-1/6 px-2.5">
                      <p>{creditScore}</p>
                    </div>
                    <div className="hidden md:flex items-center px-2.5 text-xs w-1/6">
                      <p>₦{loanAmount.toLocaleString('en-US')}</p>
                      <span className="hidden md:block">.00</span>
                    </div>
                    <div className="flex items-center">
                      <BsDownload className="hidden md:block" />
                    </div>
                  </div>
                </Link>
              ),
            )
        ) : (
          <p className=" p-2">No loan application</p>
        )}
        {applications && applications?.length > 4 && (
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
        )}
      </div>
    </div>
  );
};

export default Dashboard;
