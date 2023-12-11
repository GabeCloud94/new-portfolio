import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillLeftCircle, AiFillRightCircle, AiFillCode, AiFillSmile, AiFillMail } from 'react-icons/ai';
import ProfilePicture from '../assets/profile-pic.jpg';

export default function Sidebar(): JSX.Element {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true); // Set isMenuCollapsed to true by default

  const toggleMenu = () => {
    setIsMenuCollapsed((prev) => !prev);
  };

  // Use useEffect to update isMenuCollapsed based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMenuCollapsed(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sidebarWidthClass = isMenuCollapsed ? 'w-16' : 'w-64';
  const imageWidthClass = isMenuCollapsed ? 'w-14' : 'w-1/2';

  return (
    <div
      className={`h-screen sticky top-0 bg-violet-400 ${sidebarWidthClass} py-4 flex flex-col justify-between text-white text-center transition-all duration-500 z-10`}
    >
      <div className="flex flex-col">
        <button
          className={`menu-toggle hidden mb-2 lg:flex ${isMenuCollapsed ? 'collapsed mx-4 justify-center' : 'mr-4 justify-end'}`}
          onClick={toggleMenu}
        >
          {isMenuCollapsed ? (
            <>
              <AiFillRightCircle className="transition-opacity duration-500 opacity-100 animate-pulse" />
              <AiFillLeftCircle className={`transition-opacity duration-500 opacity-0 ${isMenuCollapsed ? 'hidden' : ''}`} />
            </>
          ) : (
            <>
              <AiFillRightCircle className={`transition-opacity duration-500 opacity-0 ${isMenuCollapsed ? 'hidden' : ''}`} />
              <AiFillLeftCircle className="transition-opacity duration-500 opacity-100" />
            </>
          )}
        </button>
        <NavLink to="/" className="nav-link-img">
          <img className={`rounded-full ${imageWidthClass} mx-auto mb-6 border-2 border-solid border-white hover:border-neutral-300 transition-all duration-500`} src={ProfilePicture} alt="Profile" />
        </NavLink>
        <ul className="flex flex-col w-full gap-6 items-center divide-y divide-white">
          <li className="w-full pt-6  flex justify-center text-lg">
            <NavLink to="/about" className="group relative nav-link flex items-center">
              <AiFillSmile />{isMenuCollapsed ? ('') : ('About Me')}
              {isMenuCollapsed && <span className="pointer-events-none absolute -top-2 left-12 w-max opacity-0  group-hover:opacity-100 bg-violet-400 transition-all duration-700 rounded-full p-2">About Me</span>}
            </NavLink>
          </li>
          <li className="w-full pt-6  flex justify-center text-lg">
            <NavLink to="/work" className="group relative nav-link flex items-center">
              <AiFillCode />{isMenuCollapsed ? ('') : ('My Work')}
              {isMenuCollapsed && <span className="pointer-events-none absolute -top-2 left-12 w-max opacity-0  group-hover:opacity-100 bg-violet-400 transition-all duration-700 rounded-full p-2">My Work</span>}
            </NavLink>
          </li>
          <li className="w-full py-6 flex justify-center text-lg">
            <NavLink to="/contact" className="group  relative nav-link flex items-center">
              <AiFillMail />{isMenuCollapsed ? ('') : ('Contact Me')}
              {isMenuCollapsed && <span className="pointer-events-none absolute -top-2 left-12 w-max opacity-0  group-hover:opacity-100 bg-violet-400 transition-all duration-700 rounded-full p-2">Contact Me</span>}
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={`text-center bottom-0 w-full pt-6 border-t border-white ${isMenuCollapsed ? 'opacity-0' : 'opacity-100'}`}>Designed by Gabe Cloud 2023</div>
    </div>
  );
}



