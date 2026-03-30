import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {
  const activeNavlinks = (
    <div className='space-x-2'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? "text-[#9F62F2] text-md underline p-2 rounded-md font-bold "
            : "font-bold p-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/apps'
        className={({ isActive }) =>
          isActive
            ? "text-[#9F62F2] underline p-2 rounded-md font-bold "
            : "font-bold p-2"
        }
      >
        Apps
      </NavLink>
      <NavLink
        to='/installation'
        className={({ isActive }) =>
          isActive
            ? "text-[#9F62F2] underline p-2 rounded-md font-bold "
            : "font-bold p-2"
        }
      >
        Installation
      </NavLink>
    </div>
  );

  return (
    <div className='navbar bg-base-100 shadow-sm lg:px-20'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {" "}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex='-1'
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            {activeNavlinks}
          </ul>
        </div>
        {/* <a>HERO IO</a> */}
        <div className='flex items-center justify-center gap-2'>
          <img className='h-10' src={logo} alt='' />
          <a className='text-xl font-bold text-[#9F62F2]' href='/'>
            HERO.IO
          </a>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{activeNavlinks}</ul>
      </div>
      <div className='navbar-end flex gap-2 '>
        <a href="https://github.com/shahajalal-shawon" className="btn bg-[#9F62F2] text-white text-md">
           <FontAwesomeIcon icon={faGithub} className="text-xl" />
          Contribute
        </a>
      </div>
    </div>
  );
};
