import BgImg from '../../assets/images/BgImg.png'
import { LoginButton } from '../../components/Buttons/Buttons'

const Onboarding = () => {
  return (
    <div>
      <img src={BgImg} className='w-screen h-screen fixed' alt="background" />
      <ul className=' relative uppercase text-white font-[Inter] leading-9 
      tracking-[-0.00119rem] font-semibold text-[1.19588rem] flex justify-end gap-6
      py-16 px-24'>
        <li className='cursor-pointer'>Login</li>
        <li className='cursor-pointer'>Sign Up</li>
      </ul>
    </div>
  )
}

export default Onboarding