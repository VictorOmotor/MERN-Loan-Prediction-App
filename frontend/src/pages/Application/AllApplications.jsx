import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { formatDateWithSlash } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';

const AllApplications = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState(null);
  const url = '/api/applications/get';
  const navigate = useNavigate();

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
    <main>
      {applications && !error && !loading && (
        <div className="flex flex-col gap-4 px-5 md:px-24 pt-4 font-[Inter] text-[#5F6D7E]">
          <div className="flex flex-col gap-3.5">
            <div className="hidden md:flex gap-1 items-center">
              <span className="text-xs">Application</span>{' '}
              <span>
                <HiOutlineChevronRight size={12} />
              </span>
              <span className="text-xs">All Applications</span>{' '}
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-xl md:text-2xl text-[#2E3646]">
                    Applications
                  </h1>
                </div>
                <div className="flex flex-col items-center md:flex-row gap-2">
                  <GreyButton text="Analytics" />
                  <Link to={'/applications/new-application/prediction'}>
                    <BlueButton text="New" />
                  </Link>
                </div>
              </div>
              <p className="text-sm">View all loan applications</p>
            </div>
          </div>

          <div className="flex gap-3 items-center text-xs border-t border-t-[#D1D9E2]">
            <Link to={'/applications/all'}>
              <div className="border-b-[2px] border-b-[#2E3646] py-3">
                <h3>All Applications</h3>
              </div>
            </Link>
            <Link to={'/applications/approved'}>
              <div className=" border-b border-b-[#5F6D7E] py-3">
                <h3>Approved</h3>
              </div>
            </Link>
            <Link to={'/applications/pending'}>
              <div className=" border-b border-b-[#5F6D7E] py-3">
                <h3>Pending</h3>
              </div>
            </Link>
            <Link to={'/applications/rejected'}>
              <div className=" border-b border-b-[#5F6D7E] py-3">
                <h3>Rejected</h3>
              </div>
            </Link>
          </div>

          <div className="flex flex-col  bg-[#F7F7F7]">
            <div className="border-b p-2 border-b-[#D1D9E2]">
              <p className="text-[#2E3646] font-bold">Recent Applications</p>
            </div>

            <div className="flex justify-between md:justify-start bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
              <div className="w-1/3">
                <p>Applicant's Info</p>
              </div>
              <div className="flex items-center gap-1 w-1/6">
                <p>Date</p> <BsArrowDownShort className="hidden md:block" />
              </div>
              <div className="flex items-center gap-1 w-1/6">
                <p>Status</p> <BsArrowDownShort className="hidden md:block" />
              </div>
              <div className="hidden md:flex items-center gap-1 w-1/6">
                <p>Credit Score</p> <BsArrowDownShort />
              </div>
              <div className="hidden md:flex items-center gap-1 ml-3 md:ml-0">
                <p>Amount</p> <BsArrowDownShort />
              </div>
            </div>
            {applications
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map(
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
                      className="flex justify-between md:justify-start bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]"
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
                      <div className="flex items-center mr-3 md:px-2 w-1/6">
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
                      <div className="hidden md:flex items-center">
                        <BsDownload className="hidden md:block" />
                      </div>
                    </div>
                  </Link>
                ),
              )}

            {applications.length > 6 && (
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
      )}
      {!applications && (
        <div className="flex flex-col gap-4 px-24 pt-4 font-[Inter] text-[#5F6D7E]">
          <div className="flex flex-col gap-3.5">
            <div className="flex gap-1 items-center">
              <span className="text-xs">Application</span>{' '}
              <span>
                <HiOutlineChevronRight size={12} />
              </span>
              <span className="text-xs">All Applications</span>{' '}
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-2xl text-[#2E3646]">
                    Applications
                  </h1>
                </div>
                <div className="flex gap-2">
                  <GreyButton text="Analytics" />
                  <BlueButton
                    text="New"
                    onClick={() =>
                      navigate('/applications/new-application/prediction')
                    }
                  />
                </div>
              </div>
              <p className="text-sm">No loan application</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default AllApplications;
