/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  const [techName, setTechName] = useState<string>("");
  const handleEnter = (name: string) => {
    if(techName !== name){
      setTechName(name)
    }
  }

  const handleLeave = () => {
    if(techName) {
      setTechName("")
    }
  }

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <span className=' uppercase text-xl h-10 font-semibold'>
        { techName }
      </span>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, i) => (
          <motion.div
            onMouseEnter={() => handleEnter(technology.name)}
            onMouseLeave={handleLeave} 
            className='w-24 h-24 p-3 rounded-full bg-tertiary' 
            key={technology.name}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              backgroundColor: "#13255A" }}
            whileTap={{ 
              scale: 0.9,
              rotate: -360, 
              transition: { duration: 0.5 } }}
            variants={{ 
              hidden: { opacity: 0 },
              show: {
                x: 0,
                y: 0,
                rotate: 360,
                opacity: 1,
                transition: { type: "spring", duration: 0.5, delay: i * 0.2 }
              }
             }}

          >
            <img src={technology.icon} className='w-full h-full' alt="" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, 'Tech')