import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsDownload, BsArrowRight } from 'react-icons/bs';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { LiaPrintSolid } from 'react-icons/lia';
import { Link, useParams } from 'react-router-dom';
import { formatDate, getFormattedLoanDuration } from '../../utils';

const ApplicantPredInfo = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [application, setApplication] = useState(null);
  const params = useParams();
  const url = `/api/applications/get/${params.applicationId}`;
  const formattedLoanDuration = getFormattedLoanDuration(
    application?.loanDuration,
  );

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
        <div className="flex flex-col gap-4 px-24 pt-4 font-[Inter] text-[#5F6D7E]">
          <div className="flex items-center justify-between">
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
            <div className="flex gap-1 items-center">
              <BsArrowLeft />
              <span className="text-xs">Back</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-2xl text-[#2E3646]">
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
            <div className=" border-b-[2px] border-b-[#2E3646] py-3">
              <h3>Prediction Info</h3>
            </div>
            <Link
              to={`/applications/applicant/contact/${application.applicationId}`}
            >
              <div className=" border-b border-b-[#5F6D7E] py-3">
                <h3>Contact Info</h3>
              </div>
            </Link>
            <div className=" border-b border-b-[#5F6D7E] py-3">
              <h3>Message</h3>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg bg-[#F8F9FB]">
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-1/3">Information</p>
              <p className="w-1/3">Value</p>
              <p className="w-1/3">Remarks</p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-1/3">Loan Request Amount</p>
              <p className="w-1/3">{application.loanAmount}</p>
              <p className="w-1/3">1234567890</p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-1/3">Credit Score</p>
              <p className="w-1/3">{application.creditScore}</p>
              <p className="w-1/3">40,000.00</p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-1/3">Credit utilization</p>
              <p className="w-1/3">{application.creditDebitRatio}</p>
              <p className="w-1/3">&lt; 25,000.00</p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-1/3">Annual Income</p>
              <p className="w-1/3">{application.applicantIncome}</p>
              <p className="w-1/3">0</p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-1/3">Loan Duration</p>
              <p className="w-1/3">{formattedLoanDuration}</p>
              <p className="w-1/3">Self Employed</p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-1/3">Previous Loan Performance</p>
              <p className="w-1/3">5/5</p>
              <p className="w-1/3">Yes</p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-1/3">Last Loan Date</p>
              <p className="w-1/3">
                {application.lastLoanDate === undefined
                  ? 'No Date Chosen'
                  : formatDate(application.lastLoanDate)}
              </p>
              <p className="w-1/3">1</p>
            </div>
            <div className="flex p-2 h-8 border-b border-b-[#bdd1e9]">
              <p className="w-1/3">Gurantor's Credit Score</p>
              <p className="w-1/3">500</p>
              <p className="w-1/3">Graduate</p>
            </div>

            <div className="flex p- h-8 border-b border-b-[#bdd1e9]">
              <p className="w-1/3"></p>
              <p className="w-1/3"></p>
              <p className="w-1/3"></p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ApplicantPredInfo;
