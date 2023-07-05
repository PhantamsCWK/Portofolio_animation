/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { styles } from '../styles';
import {  SharkCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contactList } from '../constants';

const Contact = () => {
  const [notification, setNotification] = useState(false);
  const regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;


  const handleClick = (text: string) => {
    
    if(regex.test(text)){
      window.open(text, "_blank");
    } else {
      setNotification(true);
      navigator.clipboard.writeText(text);
    }
    setTimeout(() => setNotification(false), 1000);
  }

  return (
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 bg-opacity-70 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact .</h3>
          <AnimatePresence>
          {
            notification && (
                <motion.div
                  initial={{ opacity: 0, x: '-100%' }}
                  animate={{ opacity: 1, x: '0%' }}
                  exit={{ opacity: 0, x: '100%' }}
                  className='flex justify-center items-center bg-tertiary p-5 max-w-[150px] rounded-xl'
                  >
                  Coppied
                </motion.div>
            )
          }
          </AnimatePresence>
          <ul className='mt-10 flex flex-col gap-8'>
            {
              contactList.map(c => (
              <motion.li 
                key={c.type}
                onClick={() => handleClick(c.click)}
                className='flex flex-wrap justify-start items-center gap-2 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium hover:cursor-pointer'
                whileHover={{ 
                  scale: 1.1
                 }}
              >
                <c.icon size={30} />
                <span className='text-[12px] sm:text-base'>
                  {c.name}
                </span>
              </motion.li>
              ))
            }
            
          </ul>
        </motion.div>

        <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <SharkCanvas isMobile={true} />
        </motion.div>
      </div>
  )
}

export default SectionWrapper(Contact, "contact")