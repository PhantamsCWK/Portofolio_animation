import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <motion.div
//         variants={fadeIn('right', "spring", 0.5 * index, 0.75)}
//         className='w-full green-pink-gradient p-[1px] rounded=[20px] shadow-card'
//       >
//         <div 
//           options={{ 
//             max: 45,
//             scale: 1,
//             speed: 450
//            }}
//            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//         >
//           <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
//           <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

//         </div>

//     </motion.div>
//   )
// }

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducton</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('','', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      My name is Chandra Wijaya Kusuma, I have an interest in technology programming, especially in Web programming. I can learn fast, and adapt well to the environment and I also have experience making several projects with laravel, express, react and some database technology.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");