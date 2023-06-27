import React, { useState } from 'react'
import { BubbleCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  const [techName, setTechName] = useState();
  const handleEnter = (name) => {
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
        {technologies.map((technology) => (
          <div onMouseEnter={() => handleEnter(technology.name)} onMouseLeave={handleLeave} className='w-28 h-28' key={technology.name}>
            <BubbleCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, 'Tech')