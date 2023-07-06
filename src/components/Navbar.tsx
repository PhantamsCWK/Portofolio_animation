import { Link, useLocation } from 'react-router-dom'
import { BiMenu, BiX } from "react-icons/bi";
import { AnimatePresence, motion, useCycle } from 'framer-motion';

import { styles } from '../styles'
import { navLinks } from '../constants'
import { useMediaQuery } from '../hooks';

const sideBar = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 }
  }
}

const listItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}


const Navbar = () => {
  const [ isOpen, toogleOpen ] = useCycle(false, true);
  const location = useLocation();
  
  const isMobile = useMediaQuery("(max-width: 639px)");

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
                  ? "text-blue-700 hover:text-blue-700"
                  : "text-secondary hover:text-white"
              } hover:border-b hover:border-blue-700 text-[18px] font-medium cursor-pointer`}
            >
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>
        
        {
          isMobile && (
          <div className='flex flex-1 justify-end items-center '>
            <span onClick={() => toogleOpen()} className='z-20 cursor-pointer'>
                { 
                  isOpen ? <BiX size={30} /> : <BiMenu size={30} />
                }
            </span>
            <AnimatePresence>
              {
                isOpen && (
                  <motion.aside 
                    className={`black-gradient absolute top-0 right-0 z-10 h-screen`}
                    initial={{ width: 0 }}
                    animate={{ width: "40%" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                  <motion.ul 
                    className='p-6 list-none flex justify-end items-start flex-col gap-4 mt-10'
                    variants={sideBar}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    {navLinks.map(link => (
                      <motion.li
                        key={link.id}
                        className={`${
                          location.pathname === `/${link.id}`
                            ? "text-blue-700 hover:text-blue-700"
                            : "text-secondary hover:text-white"
                        } hover:text-white hover:border-b hover:border-blue-700 font-poppins font-semibold cursor-pointer text-[16px]`}
                        onClick={() => toogleOpen()}
                        variants={listItem}
                      >
                        <Link to={link.id}>{link.title}</Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                  </motion.aside>
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