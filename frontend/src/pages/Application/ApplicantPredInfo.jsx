import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsDownload, BsArrowRight } from 'react-icons/bs';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { LiaPrintSolid } from 'react-icons/lia';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { calculateDuration, formatDate } from '../../utils';

const ApplicantPredInfo = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [application, setApplication] = useState(null);
  const params = useParams();
  const url = `/api/applications/get/${params.applicationId}`;
  const navigate = useNavigate();

  const loanDuration = application?.loanDuration;
  const loanTime = application?.createdAt;
  // console.log(application?.lastLoanDate)

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setApplication(response.data);
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
    fetchApplication();
  }, [params.applicationId]);
  return (
    <main>
      {application && !error && !loading && (
        <div className="flex flex-col gap-4 px-5 md:px-24 pt-4 font-[Inter] text-[#5F6D7E]">
          <div className="hidden md:flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <span className="text-xs">Applications</span>{' '}
              <span>
                <HiOutlineChevronRight size={12} />
              </span>
              <span className="text-xs">Applicant's Info</span>{' '}
              <span>
                <HiOutlineChevronRight size={12} />
              </span>
              <span className="text-xs">Prediction Info</span>{' '}
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-xl md:text-2xl text-[#2E3646]">
                {application.applicantName}
              </h1>
              <p className="text-xs">ID {application.applicationId}</p>
            </div>
            <div className="flex gap-3">
              <LiaPrintSolid />
              <BsDownload />
              <BsArrowRight />
            </div>
          </div>
          <div className="flex gap-3 items-center text-xs border-t border-t-[#D1D9E2]">
            <Link
              to={`/applications/applicant/prediction/${application.applicationId}`}
            >
              <div className=" border-b-[2px] border-b-[#2E3646] py-3">
                <h3>Prediction Info</h3>
              </div>
            </Link>
            <Link
              to={`/applications/applicant/contact/${application.applicationId}`}
            >
              <div className=" border-b border-b-[#5F6D7E] py-3">
                <h3>Contact Info</h3>
              </div>
            </Link>
            <Link to={'#'}>
              <div className=" border-b border-b-[#5F6D7E] py-3">
                <h3>Message</h3>
              </div>
            </Link>
          </div>
          <div className="flex flex-col border text-xs md:text-sm rounded-lg bg-[#F8F9FB]">
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Information</p>
              <p className="w-2/5">Value</p>
              <p className="w-1/5">Remarks</p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-2/5 truncate">Loan Request Amount</p>
              <p className="w-2/5">{application.loanAmount}</p>
              <p className="w-1/5"></p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Credit Score</p>
              <p className="w-2/5">{application.creditScore}</p>
              <p className="w-1/5"></p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Credit utilization</p>
              <p className="w-2/5">{application.creditDebitRatio}</p>
              <p className="w-1/5"></p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Annual Income</p>
              <p className="w-2/5">{application.applicantIncome}</p>
              <p className="w-1/5"></p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Loan Duration</p>
              <p className="w-2/5">
                {calculateDuration(loanDuration, loanTime)}
              </p>
              <p className="w-1/5"></p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-2/5 truncate">Previous Loan Performance</p>
              <p className="w-2/5">5/5</p>
              <p className="w-1/5"></p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Last Loan Date</p>
              <p className="w-2/5">
                {application.lastLoanDate === undefined
                  ? 'NIL'
                  : formatDate(application.lastLoanDate)}
              </p>
              <p className="w-1/5"></p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-2/5 truncate">Gurantor's Credit Score</p>
              <p className="w-2/5">500</p>
              <p className="w-1/5"></p>
            </div>

            <div className="flex p- h-8 border-b border-b-[#bdd1e9]">
              <p className="w-2/5"></p>
              <p className="w-2/5"></p>
              <p className="w-1/5"></p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ApplicantPredInfo;
