import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HookFish = () => {
  return (
    <motion.div
      className='fixed z-10 h-96 w-20 left-[-25px] sm:left-0 lg:left-4 flex flex-col justify-start items-center '
    >
        <div className='bg-black w-1 h-full' />
        <Link to="/" onClick={() => window.scrollTo(0,0)} className='w-5 h-5 bg-yellow-300 rounded-full' />
    </motion.div>
  )
}

export default HookFish