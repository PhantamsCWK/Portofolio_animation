import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BiMenu, BiX } from "react-icons/bi";
import { AnimatePresence, motion } from 'framer-motion';

import { styles } from '../styles'
import { navLinks } from '../constants'
import { useMediaQuery } from '../hooks';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  
  const isMobile = useMediaQuery("(max-width: 759px)");

  return (
    <nav 
      className={`${styles.paddingX} fixed w-full flex items-center py-5 z-[1] top-0 bg-gradient-to-b from-primary`}
      onScroll={(e) => console.log(e.currentTarget.scrollTop)}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0,0);
          }}
        >
          {/* <img src={logo} alt="logo" className='w-9 h-9 object-contain'/> */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Chandra<span className='sm:block hidden'> &nbsp; Wijaya Kusuma</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${
                location.pathname === `/${link.id}`
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>
        
        {
          isMobile && (
          <div className='flex flex-1 justify-end items-center '>
            <span onClick={() => setToggle(!toggle)} className='z-20'>
                { 
                  toggle ? <BiX size={30} /> : <BiMenu size={30} />
                }
            </span>
            <AnimatePresence>
              {
                toggle && (
                  <motion.div 
                    className={`black-gradient absolute top-0 right-0 z-10 h-screen`}
                    initial={{ width: 0 }}
                    animate={{ width: "10rem" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                  <ul 
                    className='p-6 list-none flex justify-end items-start flex-col gap-4 mt-10'
                  >
                    {navLinks.map(link => (
                      <li
                        key={link.id}
                        className={`${
                          location.pathname === `/${link.id}`
                            ? "text-blue-700"
                            : "text-secondary"
                        } font-poppins font-semibold cursor-pointer text-[16px]`}
                        onClick={() => {
                          setToggle(!toggle)
                        }}
                      >
                        <Link to={link.id}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                  </motion.div>
                )
              }
            </AnimatePresence>
          </div>
          )
        }
      </div>

    </nav>
  )
}

export default Navbar