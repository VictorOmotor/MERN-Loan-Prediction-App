import React from 'react';
import { HomeButton } from '../utils/Buttons';
import Rectangle84 from '../assets/images/Rectangle 84.png';
import Rectangle85 from '../assets/images/Rectangle 85.png';
import Rectangle86 from '../assets/images/Rectangle 86.png';
import Rectangle87 from '../assets/images/Rectangle 87.png';
import Rectangle88 from '../assets/images/Rectangle 88.png';
import Rectangle90 from '../assets/images/Rectangle 90.png';
import Rectangle91 from '../assets/images/Rectangle 90 (2).png';
import Rectangle92 from '../assets/images/Rectangle 90 (1).png';
import Ellipse7 from '../assets/images/Ellipse 7.png';
import Ellipse8 from '../assets/images/Ellipse 8.png';
import Ellipse9 from '../assets/images/Ellipse 9.png';
import Ellipse18 from '../assets/images/Ellipse 18.png';
import Ellipse19 from '../assets/images/Ellipse 19.png';
import Ellipse21 from '../assets/images/Ellipse 21.png';
import ViewGrid from '../assets/images/ViewGrid.svg';
import InterestCalculator from '../assets/images/interest rate calculator.png';
import InterestResume from '../assets/images/interest on resume.png';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
const HeroSection = () => {
  return (
    <div className=" container font-[Inter] p-3 flex flex-col gap-4 xl:gap-7">
      <section className="flex md:h-screen relative">
        <div className=" flex flex-col items-start gap-3 md:gap-1 md:pt-8 xl:pt-24 md:pl-6 md:w-2/5">
          <h2 className="text-[#006EFC] font-semibold uppercase text-xs">
            For Loan Professionals
          </h2>
          <h1 className="text-[#0A1C6B] text-3xl font-semibold md:text-6xl xl:text-8xl">
            Predict the loans
          </h1>
          <p className="text-[#121212] text-xl">
            Cash2go is a web application for credit analyst, risk analyst, bank
            officers and other loan officers, used to predict the loans of their
            respective customer’s loan application.
          </p>
          <HomeButton text="Get Started" />
        </div>
        <img
          src={Rectangle85}
          alt="image"
          className="hidden md:block h-20 absolute md:right-72 md:top-20 lg:left-1/2 lg:top-16"
        />
        <img
          src={Rectangle87}
          alt="hero image"
          className=" hidden md:block h-20 absolute md:top-20 md:right-3 lg:right-28 lg:top-16"
        />

        <img
          src={Rectangle88}
          alt=""
          className=" hidden md:block h-20 absolute md:right-72 md:bottom-32 lg:left-1/2 lg:bottom-24"
        />
        <img
          src={Rectangle86}
          alt=""
          className=" hidden md:block h-20 absolute md:bottom-32 md:right-3 lg:right-28 lg:bottom-24"
        />

        <div>
          <img
            src={Ellipse7}
            alt=""
            className="hidden md:block absolute md:w-28 xl:w-32 md:right-32 md:top-6 lg:top-0 lg:right-1/4"
          />
          <img
            src={Ellipse8}
            alt=""
            className=" hidden md:block absolute md:w-28 md:right-32 md:bottom-20 xl:w-32 lg:right-1/4 lg:bottom-8 xl:bottom-4"
          />
          <img
            src={Ellipse9}
            alt=""
            className=" hidden md:block absolute md:w-28 md:top-52 md:left-80 lg:top-52 xl:w-32 xl:top-60 transform lg:translate-x-[100%] xl:ml-24"
          />
        </div>
        <img
          src={Rectangle84}
          alt=""
          className="absolute hidden md:block md:w-1/4 lg:w-56 xl:w-80 lg:h-60 xl:h-1/2  md:top-40 lg:top-36 lg:right-48 xl:right-52 md:right-24 md:h-1/3"
        />
      </section>
      <section className="flex md:py-0 xl:py-7">
        <div className=" w-72 md:w-96 xl:w-2/5">
          <img src={Rectangle90} alt="" className="" />
        </div>
        <div className="flex flex-col gap-2 xl:gap-5 justify-center items-center bg-homeCardBackground md:my-8 w-80 md:w-3/5">
          <img src={ViewGrid} alt="" className="" />
          <h1 className=" text-fontBlue md:text-3xl font-semibold">
            Intuitive Dashboard
          </h1>
          <p className="text-fontBlue text-xs text-center">
            A user friendly and visually organised interface that <br />{' '}
            presents key data and insights of loan application.
          </p>
          <HomeButton text="Start here" />
        </div>
      </section>
      <section className="flex py-4 md:py-7">
        <div className="flex flex-col gap-2 xl:gap-5 justify-center items-center bg-homeCardBackground md:my-8 w-80 md:w-3/5">
          <HiOutlineAdjustmentsVertical size={40} className="text-[#006EFC]" />
          <h1 className="text-fontBlue md:text-3xl font-semibold">
            Efficient Analysis
          </h1>
          <p className="text-fontBlue text-xs text-center">
            A streamlined and effective process of examining and <br />{' '}
            interpreting data of loan applications.
          </p>
          <HomeButton text="Start here" />
        </div>
        <div className=" w-72 md:w-96 xl:w-2/5">
          <img src={Rectangle92} alt="" className="" />
        </div>
      </section>
      <section className="flex py-4 md:py-7">
        <div className=" w-72 md:w-96 xl:w-2/5">
          <img src={Rectangle91} alt="" className="" />
        </div>
        <div className="flex flex-col gap-2 w-80 xl:gap-5 justify-center items-center bg-homeCardBackground md:my-8 md:w-3/5">
          <HiOutlineDuplicate size={36} className="text-[#006EFC]" />
          <h1 className="text-fontBlue md:text-3xl font-semibold">
            Strong Prediction
          </h1>
          <p className="text-fontBlue text-xs text-center">
            Almost 100% accurate estimation of loan application <br /> outcome
            based on reliable predictive model.
          </p>
          <HomeButton text="Start here" />
        </div>
      </section>
      <section className="flex flex-col relative justify-center items-center py-4 md:py-7">
        <div className="flex flex-col gap-5 justify-center items-center bg-homeCardBackground py-2 md:py-7 w-1/2 border-2 border-[#006EFC]">
          <h2 className="text-[#006EFC] font-semibold uppercase">
            coming soon!!!
          </h2>
          <h1 className="text-fontBlue md:text-4xl font-semibold">
            Cash2go Mobile App
          </h1>
          <h2 className="text-fontBlue text-xs font-semibold">
            iOS AND ANDROID COMPATIBLE
          </h2>
          <HomeButton text="Get a demo" />
        </div>

        <img
          src={Ellipse21}
          alt=""
          className=" hidden md:block absolute top-0 md:right-8 lg:right-24 xl:right-40 h-28"
        />

        <img
          src={Ellipse18}
          alt="home-image"
          className=" hidden md:block absolute top-0 md:left-8 lg:left-24 xl:left-40 h-28"
        />
        <img
          src={Ellipse19}
          alt=""
          className=" hidden md:block absolute md:left-20 md:bottom-1 lg:left-36 xl:left-52 h-28 xl:bottom-1 bg-white border rounded-full"
        />
        <img
          src={Ellipse18}
          alt=""
          className=" hidden md:block absolute md:right-20 md:bottom-1 lg:right-36 xl:right-52 h-28 xl:bottom-1 bg-white border rounded-full"
        />
        <img
          src={InterestCalculator}
          alt=""
          className=" hidden md:block absolute md:right-28 md:top-24 lg:right-44 xl:right-60  h-20 border-2 border-[#1436D9] rounded-full bg-white"
        />
        <img
          src={InterestCalculator}
          alt=""
          className=" hidden md:block absolute md:left-5 lg:left-16 xl:left-28 top-32 h-20 border-2 border-[#1436D9] rounded-full"
        />
        <img
          src={InterestResume}
          alt=""
          className=" hidden md:block absolute md:left-28 lg:left-44 xl:left-60 md:top-24 h-20 border-2 border-[#1436D9] rounded-full bg-white"
        />
        <img
          src={InterestResume}
          alt=""
          className=" hidden md:block absolute md:right-5 md: lg:right-16 xl:right-28 top-32 h-20 border-2 border-[#1436D9] rounded-full"
        />
      </section>
    </div>
  );
};

export default HeroSection;
