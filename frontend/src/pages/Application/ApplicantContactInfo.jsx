import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsDownload, BsArrowRight } from 'react-icons/bs';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { LiaPrintSolid } from 'react-icons/lia';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { capitalizeWords, formatDate } from '../../utils';

const ApplicantContactInfo = () => {
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

  return (
    <main>
      {application && !error && !loading && (
        <div className="flex flex-col gap-4 px-5 md:px-24 pt-4 font-[Inter] text-[#5F6D7E]">
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
              <span className="text-xs">Contact Info</span>{' '}
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
            <Link
              to={`/applications/applicant/prediction/${application.applicationId}`}
            >
              <div className=" border-b border-b-[#5F6D7E] py-3">
                <h3>Prediction Info</h3>
              </div>
            </Link>

            <Link
              to={`/applications/applicant/contact/${application.applicationId}`}
            >
              <div className=" border-b-[2px] border-b-[#2E3646] py-3">
                <h3>Contact Info</h3>
              </div>
            </Link>

            <div className=" border-b border-b-[#5F6D7E] py-3">
              <h3>Financial History</h3>
            </div>
          </div>
          <div className="flex flex-col border text-xs md:text-sm rounded-lg bg-[#F8F9FB]">
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Information</p>
              <p>Value</p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Gender</p>
              <p>{application.gender === 'male' ? 'Male' : 'Female'}</p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">D.O.B</p>
              <p>{formatDate(application.dob)}</p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Contact information</p>
              <p>{application.contactAddress}</p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">State of Origin</p>
              <p>{capitalizeWords(application.stateOfOrigin)}</p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Address of Employer</p>
              <p>{application.workAddress}</p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Phone Number</p>
              <p>{application.phone}</p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Next of Kin's Phone</p>
              <p>{application.nextOfKinPhone}</p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5">Marital Status</p>
              <p>
                {application.maritalStatus === 'married' ? 'Married' : 'Single'}
              </p>
            </div>
            <div className="flex p-2 border-b border-b-[#bdd1e9]">
              <p className="w-2/5"></p>
              <p></p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ApplicantContactInfo;
