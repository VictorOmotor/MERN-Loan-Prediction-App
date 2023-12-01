import React from 'react';
import LogoImg from '../assets/images/LogoImg.png';
import { Link } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';
import { FaRegClone, FaTimes } from 'react-icons/fa';
import { SiSimpleanalytics } from 'react-icons/si';
import { PiArrowsClockwiseDuotone } from 'react-icons/pi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import {
  MdOutlineHelpOutline,
  MdOutlinePowerSettingsNew,
} from 'react-icons/md';
import { logOutStart, logOutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Menu = ({ onClick }) => {
  const dispatch = useDispatch();
  const url = '/api/user/logout';
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logOutStart());
      const response = await axios.get(url);
      dispatch(logOutSuccess(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-[#172233] bg-opacity-95 z-50 md:hidden "
      onClick={onClick}
    >
      <div className="flex flex-col gap-4 font-[Inter] text-white">
        <div className="flex items-center justify-between pb-6  pt-3 px-6">
          <Link to={'/'}>
            <div className="flex gap-2 items-center">
              <img src={LogoImg} alt="Logo" className="w-5" />
              <h1 className="font-[Montserrat] text-white font-bold">
                Cash2Go
              </h1>
            </div>
          </Link>
          <FaTimes
            size={30}
            className="text-white md:hidden"
            onClick={onClick}
          />
        </div>

        <nav>
          <ul className="flex flex-col gap-2 ">
            <Link to={'/dashboard'}>
              <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
                <RiDashboardFill />
                <span>Dashboard</span>
              </li>
            </Link>
            <Link to={'/applications/all'}>
              <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
                <FaRegClone />
                <span>Applications</span>
              </li>
            </Link>
            <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
              <SiSimpleanalytics />
              <span>Analytics</span>
            </li>
            <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
              <PiArrowsClockwiseDuotone />
              <span>Recovery</span>
            </li>
            <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
              <AiOutlineMail />
              <span>Messages</span>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 pt-">
            <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
              <BsGlobe />
              <span>Resources</span>
            </li>
            <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
              <FiSettings />
              <span>Settings</span>
            </li>
            <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
              <MdOutlineHelpOutline />
              <span>Help Center</span>
            </li>
            <li
              onClick={handleLogout}
              className="flex gap-3 cursor-pointer items-center px-6 py-1 hover:bg-[#5F6D7E] my-3"
            >
              <MdOutlinePowerSettingsNew />
              <span>Log out</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;

// import React from 'react';
// import LogoImg from '../assets/images/LogoImg.png';
// import { Link } from 'react-router-dom';
// import { RiDashboardFill } from 'react-icons/ri';
// import { FaRegClone, FaTimes } from 'react-icons/fa';
// import { SiSimpleanalytics } from 'react-icons/si';
// import { PiArrowsClockwiseDuotone } from 'react-icons/pi';
// import { AiOutlineMail } from 'react-icons/ai';
// import { BsGlobe } from 'react-icons/bs';
// import { FiSettings } from 'react-icons/fi';
// import {
//   MdOutlineHelpOutline,
//   MdOutlinePowerSettingsNew,
// } from 'react-icons/md';
// import { logOutStart, logOutSuccess } from '../redux/user/userSlice';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';

// const Menu = ({onClick, isMenuOpen}) => {
//   const dispatch = useDispatch();
//   const url = '/api/user/logout';
//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(logOutStart());
//       const response = await axios.get(url);
//       dispatch(logOutSuccess(response));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className={`fixed inset-0 bg-[#172233] bg-opacity-95 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
//         isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//       }`}>
//       <div className="flex flex-col gap-4 font-[Inter] text-white">
//         <div className='flex items-center justify-between pb-6  pt-3 px-6'>
//           <Link to={'/'}>
//           <div className="flex gap-2 items-center">
//             <img src={LogoImg} alt="Logo" className="w-5" />
//             <h1 className="font-[Montserrat] text-white font-bold">Cash2Go</h1>
//           </div>
//         </Link>
//         <FaTimes size={30} className='text-white md:hidden' onClick={onClick} />
//         </div>

//         <nav>
//           <ul className="flex flex-col gap-2 ">
//             <Link to={'/dashboard'}>
//               <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
//                 <RiDashboardFill />
//                 <span>Dashboard</span>
//               </li>
//             </Link>
//             <Link to={'/applications/all'}>
//               <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
//                 <FaRegClone />
//                 <span>Applications</span>
//               </li>
//             </Link>
//             <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
//               <SiSimpleanalytics />
//               <span>Analytics</span>
//             </li>
//             <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
//               <PiArrowsClockwiseDuotone />
//               <span>Recovery</span>
//             </li>
//             <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
//               <AiOutlineMail />
//               <span>Messages</span>
//             </li>
//           </ul>
//           <ul className="flex flex-col gap-3 pt-">
//             <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
//               <BsGlobe />
//               <span>Resources</span>
//             </li>
//             <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
//               <FiSettings />
//               <span>Settings</span>
//             </li>
//             <li className="flex gap-3 items-center px-6 py-1 hover:bg-[#5F6D7E]">
//               <MdOutlineHelpOutline />
//               <span>Help Center</span>
//             </li>
//             <li
//               onClick={handleLogout}
//               className="flex gap-3 cursor-pointer items-center px-6 py-1 hover:bg-[#5F6D7E] my-3"
//             >
//               <MdOutlinePowerSettingsNew />
//               <span>Log out</span>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Menu;
