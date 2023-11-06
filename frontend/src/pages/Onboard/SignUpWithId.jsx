import React from 'react'
import BgImg from '../../assets/images/BgImg.png'
import LogoImg from '../../assets/images/LogoImg.png'
import checkedIcon from '../../assets/images/checkedIcon.png'
import uncheckedIcon from '../../assets/images/uncheckedIcon.png'
import vectorLine from '../../assets/images/Line.png'
import { GoArrowRight } from 'react-icons/go'
import {Link} from 'react-router-dom'

const SignUpWithId = () => {

  const handleChange = (e) => {

  }
  return (
    <div className="min-h-screen bg-cover bg-center flex " style={{ backgroundImage: `url(${BgImg})` }}>
      <div className='h-screen flex flex-col w-1/2'>
        <div className='flex mt-auto '>
        <div className='flex gap-1 mt-auto my-48 ml-28 '>
          <img src={LogoImg} className='w-10' alt="Logo" />
          <span className=' font-[Montserrat] font-semibold text-white text-[2rem]'>Cash2Go</span>
        </div>
        <div className='flex gap-2 mx-auto my-12 ml-28'>
          <div>
          <img src={checkedIcon} alt="" />
          <img src={vectorLine} alt="" className='ml-3 h-9 border'/>
          <img src={uncheckedIcon} alt="" />
          <img src={vectorLine} alt="" className='ml-3 h-9'/>
          <img src={uncheckedIcon} alt="" />
          <img src={vectorLine} alt="" className='ml-3 h-9' />
          <img src={uncheckedIcon} alt="" />
          <img src={vectorLine} alt="" className='ml-3 h-9' />
          <img src={uncheckedIcon} alt="" />
          
        </div>
        <div>
            <div className='mb-6'>
              <span className='text-white font-[Zen Kaku Gothic Antique]'>STEP 1</span>
              <p className='text-slate-400 text-xs'>Fill your Work e-mail and Number</p>
            </div>
            <div className='mb-6'>
              <span className='text-white font-[Zen Kaku Gothic Antique]'>STEP 2</span>
              <p className='text-slate-400 text-xs'>Fill in the OTP sent to your mail</p>
            </div>
            <div className='mb-6'>
              <span className='text-white font-[Zen Kaku Gothic Antique]'>STEP 3</span>
              <p className='text-slate-400 text-xs'>Create your password</p>
            </div>
            <div className='mb-6'>
              <span className='text-white font-[Zen Kaku Gothic Antique]'>STEP 4</span>
              <p className='text-slate-400 text-xs'>Security question</p>
            </div>
            <div className='mb-6'>
              <span className='text-white font-[Zen Kaku Gothic Antique]'>FINAL STEP</span>
              <p className='text-slate-400 text-xs'>Log in to Cash2Go</p>
            </div>
            
          </div>
        </div>
        
        </div>
        
      </div>
      <div className='w-1/2 bg-white'>
      <div className="p-3 w-3/5 mx-auto font-[Inter]">
      <h1 className="text-3xl text-center text-[#172233] font-semibold my-16">Sign Up</h1>
      <form className="flex flex-col gap-5">
        <div className=''>
          <label className='self-stretch text-[#5F6D7E] font-semibold' htmlFor="email">Email</label>
          <div>
            <input
          type="email"
          placeholder="myworkemail@work.com"
          className="border border-[#5F6D7E] p-2 rounded-lg w-full focus:outline-none"
          id="email"
          onChange={handleChange}
        />
          </div>
        </div>
        
        <div>
          <label className='self-stretch text-[#5F6D7E] font-semibold' htmlFor="companyId">Company ID</label>
          <div>
          <input
          type="password"
          placeholder="123ABC"
          className="border p-2 mb-2 border-[#5F6D7E] rounded-lg w-full focus:outline-none"
          id="companyId"
          onChange={handleChange}
        />
          </div>
        </div>
        
        <button
          
          className="bg-[#172233] flex items-center justify-center gap-2 text-white p-2
        rounded-lg hover:opacity-80
        disabled:opacity-50"
        >
          Next <GoArrowRight/>
        </button>
        
      </form>
      
      <div className="flex text-center justify-center gap-4 mt-20">
        <p className="text-[#454E5C]">Term of use </p>
        <Link to="/sign-in">
        <p className="text-[#454E5C]">Privacy policy</p>
        </Link>
      </div>
    </div>
      </div>
    </div>
  )
}

export default SignUpWithId