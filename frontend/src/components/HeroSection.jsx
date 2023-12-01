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
import AdjustmentsOutline from '../assets/images/AdjustmentsOutline.svg';
import DuplicateOutline from '../assets/images/DuplicateOutline.svg';
import ViewGrid from '../assets/images/ViewGrid.svg';
import InterestCalculator from '../assets/images/interest rate calculator.png';
import InterestResume from '../assets/images/interest on resume.png';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
const HeroSection = () => {
  return (
    <div className=" container font-[Inter] p-5 flex flex-col gap-7">
      <section className="flex h-screen relative">
        <div className=" flex flex-col items-start gap-1 pt-24 pl-6 w-2/5">
          <h2 className="text-[#006EFC] font-semibold uppercase text-xs">
            For Loan Professionals
          </h2>
          <h1 className="text-[#0A1C6B] text-8xl">Predict the loans</h1>
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
          className="h-20 absolute left-1/2 top-16"
        />
        <img
          src={Rectangle87}
          alt="hero image"
          className="h-20 absolute right-28 top-16"
        />

        <img
          src={Rectangle88}
          alt=""
          className="h-20 absolute left-1/2 bottom-24"
        />
        <img
          src={Rectangle86}
          alt=""
          className="h-20 absolute right-28 bottom-24"
        />
        {/* </div> */}

        <div>
          <img src={Ellipse7} alt="" className="absolute w-32 right-1/4" />
          <img
            src={Ellipse8}
            alt=""
            className="absolute w-32 right-1/4 bottom-4"
          />
          <img
            src={Ellipse9}
            alt=""
            className="absolute w-32 top-60 transform translate-x-[40%]"
          />
        </div>
        <img
          src={Rectangle84}
          alt=""
          className="absolute top-36 right-52 h-1/2"
        />
      </section>
      <section className="flex py-7">
        <div className=" w-2/5">
          <img src={Rectangle90} alt="" className="" />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center bg-homeCardBackground my-8 w-3/5">
          <img src={ViewGrid} alt="" className="" />
          <h1 className=" text-fontBlue text-3xl font-semibold">
            Intuitive Dashboard
          </h1>
          <p className="text-fontBlue text-xs text-center">
            A user friendly and visually organised interface that <br />{' '}
            presents key data and insights of loan application.
          </p>
          <HomeButton text="Start here" />
        </div>
      </section>
      <section className="flex py-7">
        <div className="flex flex-col gap-5 justify-center items-center bg-homeCardBackground my-8 w-3/5">
          <HiOutlineAdjustmentsVertical size={40} className="text-[#006EFC]" />
          <h1 className="text-fontBlue text-3xl font-semibold">
            Efficient Analysis
          </h1>
          <p className="text-fontBlue text-xs text-center">
            A streamlined and effective process of examining and <br />{' '}
            interpreting data of loan applications.
          </p>
          <HomeButton text="Start here" />
        </div>
        <div className="w-2/5">
          <img src={Rectangle92} alt="" className="" />
        </div>
      </section>
      <section className="flex py-7">
        <div className=" w-2/5">
          <img src={Rectangle91} alt="" className="" />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center bg-homeCardBackground my-8 w-3/5">
          <HiOutlineDuplicate size={36} className="text-[#006EFC]" />
          <h1 className="text-fontBlue text-3xl font-semibold">
            Strong Prediction
          </h1>
          <p className="text-fontBlue text-xs text-center">
            Almost 100% accurate estimation of loan application <br /> outcome
            based on reliable predictive model.
          </p>
          <HomeButton text="Start here" />
        </div>
      </section>
      <section className="flex flex-col relative justify-center items-center py-7">
        <div className="flex flex-col gap-5 justify-center items-center bg-homeCardBackground py-7 w-1/2 border-2 border-[#006EFC]">
          <h2 className="text-[#006EFC] font-semibold uppercase">
            coming soon!!!
          </h2>
          <h1 className="text-fontBlue text-4xl font-semibold">
            Cash2go Mobile App
          </h1>
          <h2 className="text-fontBlue text-xs font-semibold">
            iOS AND ANDROID COMPATIBLE
          </h2>
          <HomeButton text="Get a demo" />
        </div>

        <img src={Ellipse21} alt="" className="absolute top-0 right-36 h-28" />

        <img
          src={Ellipse18}
          alt="home-image"
          className="absolute top-0 left-36 h-28"
        />
        <img
          src={Ellipse19}
          alt=""
          className="absolute left-52 h-28 top-44 bg-white border rounded-full"
        />
        <img
          src={Ellipse18}
          alt=""
          className="absolute right-52 h-28 top-44 bg-white border rounded-full"
        />
        <img
          src={InterestCalculator}
          alt=""
          className="absolute right-60 top-20 h-20 border-2 border-[#1436D9] rounded-full bg-white"
        />
        <img
          src={InterestCalculator}
          alt=""
          className="absolute left-28 top-32 h-20 border-2 border-[#1436D9] rounded-full"
        />
        <img
          src={InterestResume}
          alt=""
          className="absolute left-60 top-20 h-20 border-2 border-[#1436D9] rounded-full bg-white"
        />
        <img
          src={InterestResume}
          alt=""
          className="absolute right-28 top-32 h-20 border-2 border-[#1436D9] rounded-full"
        />
      </section>
    </div>
  );
};

export default HeroSection;
