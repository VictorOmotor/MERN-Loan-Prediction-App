import BgImg from '../../assets/images/BgImg.png'
import LogoImg from '../../assets/images/LogoImg.png'
import ellipseImg from '../../assets/images/Ellipse 3.png'

const Onboarding = () => {
  return (
    <div>
      <img src={BgImg} className='w-screen h-screen absolute' alt="background" />
      <ul className=' relative uppercase text-white font-[Inter]  
       font-semibold flex justify-end gap-6 pt-8 pr-16'>
        <li className='cursor-pointer'>Login</li>
        <li className='cursor-pointer'>Sign Up</li>
      </ul>
      <div className='absolute'>
      <img src={ellipseImg} className='w-[25rem] ml-96 mt-9' alt="ellipse" />
      </div>
      <div className='flex justify-center mt-56 -ml-48'>
      <div className='flex gap-2.5 relative'>
      <img src={LogoImg} className='w-10' alt="Logo" />
      <span className=' font-[Montserrat] font-semibold text-white text-[2rem]'>Cash2Go</span>

      </div>
      </div>
      <div className='flex justify-center'>
      <p className='text-[#A2A7AD] relative mt-1 -ml-40'>Enabling Hassle-free lending....</p>

      </div>
      
    </div>
  )
}

export default Onboarding

// color: #A2A7AD;


// color: #A2A7AD;
// font-family: Montserrat;
// font-size: 1.5rem;
// font-style: italic;
// font-weight: 500;
// line-height: 2.13125rem;
// letter-spacing: -0.0015rem;