import React from 'react';
import LandingHeader from '../../components/Landing/LandingHeader';
import LandingFooter from '../../components/Landing/LandingFooter';
import { CiGlobe } from 'react-icons/ci';
import Rectangle3 from '../../assets/images/Rectangle3.svg';
import { HiViewGrid } from 'react-icons/hi';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';

{
  /* <CiGlobe /> */
}
const About = () => {
  return (
    <>
      <LandingHeader />
      <section className="flex flex-col gap-7 mt-10 pl-32 font-[Inter]">
        <div className="flex gap-7">
          <img src={Rectangle3} alt="hero image" className="w-10" />
          <span className=" text-logoBlue font-bold uppercase">Who we are</span>
        </div>
        <div className="w-3/4 ml-10">
          <p className=" text-4xl">
            Cash2go app is a software application, for loan professionals, that
            uses various data and predictive algorithms to assess an
            individual’s creditworthiness and provide predictions on their
            likelihood of being approved for a loan from a financial
            institutions.
          </p>
        </div>
      </section>
      <section className="pt-4 pb-7 px-12">
        <div className="flex justify-center items-center gap-10 p-7 h-80">
          <div className="flex bg-homeCardBackground h-full gap-2 py-4">
            <div>
              <HiViewGrid size={30} className="text-[#006EFC]" />
            </div>

            <p className="text-fontBlue">
              Welcome to our loan prediction app “Cash2go”. We began operation
              in July 2023, this app is a subsidiary of Cash2go Ltd. Our mobile
              app will be launching soon!!!
            </p>
          </div>
          <div className="flex bg-homeCardBackground h-full gap-2 py-2">
            <div>
              <HiOutlineAdjustmentsVertical
                size={30}
                className="text-[#006EFC] border-2 border-[#006EFC]"
              />
            </div>
            <p className="">
              The mission of Cash2go app is to empower loan professionals by
              providing almost accurate and reliable predictions regarding an
              individual’s loan approval chances.
            </p>
          </div>
          <div className="flex bg-homeCardBackground h-full gap-2 py-2">
            <div>
              <CiGlobe size={30} className="text-[#006EFC]" />
            </div>
            <p className="">
              The vision of Cash2go app is to assist financial institutions in
              mitigating risks and optimising their lending process through
              advanced data analytics and predictive models.
            </p>
          </div>
        </div>

        <div className=""></div>
        <div className=""></div>
      </section>
      <LandingFooter />
    </>
  );
};

export default About;
