import BgImg from '../../assets/images/BgImg.png';
import LogoImg from '../../assets/images/LogoImg.png';
import ellipseImg from '../../assets/images/Ellipse 3.png';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center fixed inset-0"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <ul
        className="flex gap-7 justify-end h-2/5 mr-10 mt-7 uppercase text-white font-[Inter]  
       font-semibold "
      >
        <Link to={'/login'}>
          <li className="cursor-pointer">Login</li>
        </Link>
        <Link to={'/signup'}>
          <li className="cursor-pointer">Sign Up</li>
        </Link>
      </ul>
      <div className="flex flex-col items-center relative">
        <div className="flex items-center gap-2">
          <img src={LogoImg} className="w-8 h-8" alt="Logo" />
          <span className=" font-[Montserrat] font-semibold text-white text-[2rem]">
            Cash2Go
          </span>
        </div>
        <p className="text-[#A2A7AD] ml-11">Enabling Hassle-free lending....</p>
      </div>
      <img
        src={ellipseImg}
        className="absolute inset-0 w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/3 mx-auto my-auto z-50"
        alt="ellipse"
      />
    </div>
  );
};

export default Onboarding;
