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
import { PendingButton } from '../../utils/Buttons';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { formatDateWithSlash, shortenText } from '../../utils';
import { PendingIcon } from '../../components/Icons';

const PendingApplications = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState(null);
  const url = '/api/applications/get';
  const navigate = useNavigate();
  const pendingApplications = applications?.filter(
    ({ status }) => status === 'pending',
  );

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setApplications(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log(error);
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
          <div className="hidden md:flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <span className="text-xs">Applications</span>{' '}
              <span>
                <HiOutlineChevronRight size={12} />
              </span>
              <span className="text-xs">Pending</span>{' '}
            </div>
            <div
              role="button"
              onClick={() => navigate(-1)}
              className="hidden md:flex gap-1 items-center"
            >
              <BsArrowLeft />
              <span className="text-xs">Back</span>
            </div>
          </div>

          <div className="flex gap-3 items-center text-xs border-t border-t-[#D1D9E2]">
            <Link to={'/applications/all'}>
              <div className="border-b border-b-[#5F6D7E] py-3">
                <h3>All Applications</h3>
              </div>
            </Link>
            <Link to={'/applications/approved'}>
              <div className=" border-b border-b-[#5F6D7E] py-3">
                <h3>Approved</h3>
              </div>
            </Link>
            <Link to={'/applications/pending'}>
              <div className=" border-b-[2px] border-b-[#2E3646] py-3">
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
                <p className="hidden md:block">Status</p>
                <p className="md:hidden"> </p>{' '}
                <BsArrowDownShort className="hidden md:block" />
              </div>
              <div className="hidden md:flex items-center gap-1 w-1/6">
                <p>Credit Score</p>{' '}
                <BsArrowDownShort className="hidden md:block" />
              </div>
              <div className="hidden md:flex items-center gap-1">
                <p>Amount</p> <BsArrowDownShort className="hidden md:block" />
              </div>
            </div>

            {applications
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .filter(({ status }) => status === 'pending')
              .map(
                ({
                  _id,
                  loanAmount,
                  applicantName,
                  applicationId,
                  creditScore,
                  createdAt,
                }) => (
                  <Link to={`/applications/overview/${applicationId}`}>
                    <div
                      key={_id}
                      className="flex bg-[#F7F7F7] justify-between md:justify-start items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]"
                    >
                      <div className=" flex gap-2 items-center w-1/3">
                        <FaUserCircle size={25} className="hidden md:block" />
                        <div>
                          <p className="text-[#2E3646]">
                            {shortenText(applicantName, 10)}
                          </p>
                          <p className="text-xs hidden md:block">
                            ID-{applicationId}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-xs md:px-1 w-1/6">
                        <p>{formatDateWithSlash(createdAt)}</p>
                      </div>
                      <div className="hidden md:flex items-center mr-3 md:px-2 w-1/6">
                        <PendingButton />
                      </div>
                      <div className="md:hidden">
                        <PendingIcon />
                      </div>
                      <p className="text-xs underline md:hidden">View</p>
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
            {pendingApplications && pendingApplications.length > 6 && (
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
    </main>
  );
};

export default PendingApplications;
