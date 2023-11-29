import React from 'react';
import { HomeButton } from '../utils/Buttons';
import Rectangle84 from '../assets/images/Rectangle 84.png';
import Rectangle85 from '../assets/images/Rectangle 85.png';
import Rectangle86 from '../assets/images/Rectangle 86.png';
import Rectangle87 from '../assets/images/Rectangle 87.png';
import Rectangle88 from '../assets/images/Rectangle 88.png';
import Rectangle90 from '../assets/images/Rectangle 90.png';
import Ellipse7 from '../assets/images/Ellipse 7.png';
import Ellipse8 from '../assets/images/Ellipse 8.png';
import Ellipse9 from '../assets/images/Ellipse 9.png';
import Ellipse18 from '../assets/images/Ellipse 18.png';
import Ellipse19 from '../assets/images/Ellipse 19.png';
import Ellipse21 from '../assets/images/Ellipse 21.png';
import AdjustmentsOutline from '../assets/images/AdjustmentsOutline.svg';
import DuplicateOutline from '../assets/images/DuplicateOutline.svg';
import InterestCalculator from '../assets/images/interest rate calculator.png';
import InterestResume from '../assets/images/interest on resume.png';
import { FaRegClone } from 'react-icons/fa';
const HeroSection = () => {
  return (
    <>
      <section>
        <div className="">
          <h2 className="">For Loan Professionals</h2>
          <h1 className="">Predict the loans</h1>
          <p className="">
            Cash2go is a web application for credit analyst, risk analyst, bank
            officers and other loan officers, used to predict the loans of their
            respective customer’s loan application.
          </p>
          <HomeButton text="Get Started" />
        </div>
        <div className="">
          <img src={Rectangle85} alt="" className="" />
          <img src={Rectangle86} alt="" className="" />
          <img src={Rectangle87} alt="" className="" />
          <img src={Rectangle88} alt="" className="" />
          <img src={Ellipse7} alt="" className="" />
          <img src={Ellipse8} alt="" className="" />
          <img src={Ellipse9} alt="" className="" />
          <img src={Rectangle84} alt="" className="" />
        </div>
      </section>
      <section>
        <div className="">
          <img src={Rectangle90} alt="" className="" />
        </div>
        <div className="">
          <FaRegClone />
          <h1 className="">Intuitive Dashboard</h1>
          <p className="">
            A user friendly and visually organised interface that presents key
            data and insights of loan application.
          </p>
          <HomeButton text="Start here" />
        </div>
      </section>
      <section>
        <div className="">
          <img src={AdjustmentsOutline} alt="" className="" />
          <h1 className="">Efficient Analysis</h1>
          <p className="">
            A streamlined and effective process of examining and interpreting
            data of loan applications.
          </p>
          <HomeButton text="Start here" />
        </div>
        <div className="">
          <img src={Rectangle90} alt="" className="" />
        </div>
      </section>
      <section>
        <div className="">
          <img src={Rectangle90} alt="" className="" />
        </div>
        <div className="">
          <img src={DuplicateOutline} alt="" className="" />
          <h1 className="">Strong Prediction</h1>
          <p className="">
            Almost 100% accurate estimation of loan application outcome based on
            reliable predictive model.
          </p>
          <HomeButton text="Start here" />
        </div>
        <section>
          <div className="">
            <img src={Ellipse18} alt="" className="" />
          </div>
          <div className="">
            <h2 className=" uppercase">coming soon!!!</h2>
            <h1 className=" uppercase">Cash2go Mobile App</h1>
            <h2 className=" uppercase">iOS AND ANDROID COMPATIBLE</h2>
            <HomeButton text="Get a demo" />
          </div>
          <div className="">
            <img src={Ellipse21} alt="" className="" />
          </div>
          <img src={Ellipse18} alt="" className="" />
          <img src={Ellipse19} alt="" className="" />
          <img src={InterestCalculator} alt="" className="" />
          <img src={InterestResume} alt="" className="" />
        </section>
      </section>
    </>
  );
};

export default HeroSection;
