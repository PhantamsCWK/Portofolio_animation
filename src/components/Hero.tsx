import { motion } from 'framer-motion'

import { styles } from '../styles'
import {  SharkCanvas } from './canvas'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '../hooks'

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 758px)");
  

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-tertiary'>Chan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Hello this my first portofolio
          </p>
        </div>
      </div>

      <SharkCanvas isMobile={isMobile} />

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <Link to="about">
          <div className='w-[35px] h-16 rounded-3xl border-b-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{ 
                y: [0, 10, 0]
               }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
               }}
               className='w-10 h-10 rounded-3xl border-b-4 border-secondary'
            />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero