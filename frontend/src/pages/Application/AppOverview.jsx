import React, { useEffect, useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { HiArrowTrendingUp, HiOutlineHandThumbUp } from 'react-icons/hi2';
import { MdPending } from 'react-icons/md';
import { PiSortAscendingLight } from 'react-icons/pi';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { HiOutlineChevronRight, HiOutlineThumbDown } from 'react-icons/hi';
import {
  ApprovedButton,
  PendingButton,
  RejectedButton,
  BlueButton,
  GreyButton,
  FairButton,
  GreenButton,
  PoorButton,
} from '../../utils/Buttons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { CreditScoreChart } from '../../components/Charts';
const AppOverview = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [application, setApplication] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const url = `/api/applications/get/${params.applicationId}`;

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

  let parsedCreditBalance = +application?.creditBalance;
  let parsedLastLoanAmount = +application?.lastLoanAmount;
  let debtLoanRatio = parsedCreditBalance / parsedLastLoanAmount;
  return (
    <main>
      {application && !error && !loading && (
        <div className="flex flex-col gap-4 px-5 md:px-24 pt-4 font-[Inter] text-[#5F6D7E]">
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <div className="flex gap-1 items-center">
                <span className="text-xs">Applications</span>{' '}
                <span>
                  <HiOutlineChevronRight size={12} />
                </span>
                <span className="text-xs">Application Overview</span>{' '}
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
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-2xl text-[#2E3646]">
                    {application.applicantName}
                  </h1>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/applications/applicant/prediction/${application.applicationId}`}
                  >
                    <GreyButton text="Info" />
                  </Link>
                  <BlueButton text="Review" />
                </div>
              </div>
              <p className="text-sm">ID {application.applicationId}</p>
            </div>
          </div>

          <div className="flex gap-3 items-center text-xs lg:text-sm bg-[#F7F7F7] rounded-lg p-4">
            <div className="flex flex-col w-1/3">
              <div className="flex items-center justify-between">
                <p>Loan Status</p>
                <div className="bg-[#454E5C] p-1 md:p-2 text-white rounded-md">
                  {application.status === 'approved' ? (
                    <HiOutlineHandThumbUp />
                  ) : application.status === 'pending' ? (
                    <MdPending />
                  ) : (
                    <HiOutlineThumbDown />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold">
                  ₦{application.loanAmount.toLocaleString('en-US')}.00
                </span>
                <div className="flex gap-2 text-xs items-center">
                  <p>
                    {application.loanType === 'shortTerm'
                      ? 'Short Term'
                      : application.loanType === 'mediumTerm'
                      ? 'Medium Term'
                      : 'Long Term'}
                  </p>
                  {application.status === 'approved' ? (
                    <ApprovedButton />
                  ) : application.status === 'pending' ? (
                    <PendingButton />
                  ) : (
                    <RejectedButton />
                  )}
                </div>
              </div>
            </div>

            <div className="border-r border-r-[#5F6D7E] py-7 md:py-10 h-full"></div>

            <div className="flex flex-col w-1/3">
              <div className="flex items-center justify-between">
                <p>Credit Utilization</p>
                <div className="bg-[#454E5C] p-1 md:p-2 text-white rounded-md">
                  <HiArrowTrendingUp />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold">
                  {application.creditDebitRatio}%
                </span>
                <div className="flex gap-2 text-xs items-center">
                  <p>{application.creditDebitRatio < 30 ? '(<30)' : '(>30)'}</p>
                  {application.status === 'approved' ? (
                    <ApprovedButton />
                  ) : application.status === 'pending' ? (
                    <PendingButton />
                  ) : (
                    <RejectedButton />
                  )}
                </div>
              </div>
            </div>

            <div className="border-r border-r-[#5F6D7E] py-7 md:py-10 h-full"></div>

            <div className="flex flex-col w-1/3">
              <div className="flex items-center justify-between">
                <p>Outstanding Debt</p>
                <div className="bg-[#454E5C] p-1 md:p-2 text-white rounded-md">
                  <PiSortAscendingLight />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold">
                  ₦{application.creditBalance.toLocaleString('en-US')}.00
                </span>
                <div className="flex gap-2 text-xs items-center">
                  <p>
                    {parsedCreditBalance === 0 && parsedLastLoanAmount === 0
                      ? '<20%'
                      : debtLoanRatio < 20
                      ? '<20%'
                      : debtLoanRatio > 20 && debtLoanRatio < 50
                      ? '>20%'
                      : '>50%'}
                  </p>
                  {parsedCreditBalance === 0 && parsedLastLoanAmount === 0 ? (
                    <GreenButton text="Excellent" />
                  ) : debtLoanRatio < 20 ? (
                    <GreenButton text="Excellent" />
                  ) : debtLoanRatio > 20 && debtLoanRatio < 50 ? (
                    <FairButton text="Fair" />
                  ) : (
                    <PoorButton text="Poor" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col w-2/5 border rounded-lg bg-[#F7F7F7]">
              <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
                <div className="flex flex-col">
                  <p className="text-[#2E3646] font-bold">Credit Score</p>
                  <p className="text-sm">FICO Model</p>
                </div>
                <AiOutlineEllipsis />
              </div>

              <div className="flex flex-col gap-3 bg-[#F7F7F7] items-center relative font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
                <CreditScoreChart creditScore={application.creditScore} />
                <div className="flex gap-2 items-center">
                  <span>
                    {+application.creditScore > 749
                      ? '750 - 850'
                      : +application.creditScore < 750 &&
                        +application.creditScore > 500
                      ? '500 - 750'
                      : ' < 500'}
                  </span>
                  {+application.creditScore > 749 ? (
                    <GreenButton text={'Excellent'} />
                  ) : +application.creditScore < 750 &&
                    +application.creditScore > 500 ? (
                    <FairButton text={'Fair'} />
                  ) : (
                    <PoorButton text={'Poor'} />
                  )}
                </div>
                <div className="absolute py-10 flex flex-col items-center">
                  <h1 className="text-3xl text-[#169872]">
                    {+application.creditScore}
                  </h1>
                  <h2 className="text-base">Credit Score</h2>
                </div>
              </div>
              <div className="flex justify-between bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
                <div>
                  <p>Change Model</p>
                </div>
                <div className="flex gap-2 items-center">
                  <span>More</span>
                  <BsArrowRight />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-3/5 border rounded-lg bg-[#F7F7F7]">
              <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
                <div className="flex flex-col">
                  <p className="text-[#2E3646] font-bold">Previous Loans</p>
                  <p className="text-sm">Subtitle</p>
                </div>
                <AiOutlineEllipsis />
              </div>

              <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
                Chart
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col  bg-[#F7F7F7]">
            <div className=" flex justify-between items-center border-b p-2 border-b-[#D1D9E2]">
              <div className="flex flex-col">
                <p className="text-[#2E3646] font-bold">
                  Previous Loan Applications
                </p>
                <p className="text-sm">Sorted by date</p>
              </div>
              <AiOutlineEllipsis />
            </div>

            <div className="flex bg-[#F7F7F7] items-center font-bold text-xs border-b p-2 border-b-[#D1D9E2]">
              <div className="w-1/5">
                <p>Product</p>
              </div>
              <div className="w-1/5">
                <p>Rev No.</p>
              </div>
              <div className="flex items-center gap-1 w-1/5">
                <p>Status</p> <BsArrowDownShort />
              </div>
              <div className="flex items-center gap-1 w-1/5">
                <p>Amount</p> <BsArrowDownShort />
              </div>
              <div className="flex items-center gap-1 w-1/5"></div>
            </div>

            <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
              <div className=" flex gap-2 items-center w-1/5">
                <FaUserCircle size={25} />
                <div>
                  <p className="text-[#2E3646]">Short Term</p>
                  <p className="text-xs">Alat by WEMA</p>
                </div>
              </div>
              <div className="flex items-center text-xs w-1/5">
                <p>20237899</p>
              </div>
              <div className="flex items-center w-1/5">
                <GreenButton text="Paid" />
              </div>
              <div className="flex items-center text-xs w-1/5">
                <p>$967.00</p>
              </div>
              <div className="flex items-center text-xs w-1/5">
                <AiOutlineEllipsis />
              </div>
            </div>
            <div className="flex bg-[#F7F7F7] items-center text-sm border-b py-1 px-2 border-b-[#D1D9E2]">
              <div className=" flex gap-2 items-center w-1/5">
                <FaUserCircle size={25} />
                <div>
                  <p className="text-[#2E3646]">Short Term</p>
                  <p className="text-xs">Alat by WEMA</p>
                </div>
              </div>
              <div className="flex items-center text-xs w-1/5">
                <p>20237899</p>
              </div>
              <div className="flex items-center w-1/5">
                <GreenButton text="Paid" />
              </div>
              <div className="flex items-center text-xs w-1/5">
                <p>$967.00</p>
              </div>
              <div className="flex items-center text-xs w-1/5">
                <AiOutlineEllipsis />
              </div>
            </div>
          </div> */}
        </div>
      )}
    </main>
  );
};

export default AppOverview;
