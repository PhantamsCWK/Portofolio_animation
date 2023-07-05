import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom'

const HookFish = () => {
  const { scrollY } = useScroll();

  const scaleY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })


  return (
    <motion.div
      className='fixed z-10 h-96 w-20 left-[-25px] sm:left-0 lg:left-4 flex flex-col justify-start items-center min-h-[10rem] max-h-[38rem]'
      style={{ height: scaleY }}
    >
        <div className='bg-black w-1 h-full' />
        <Link to="/" onClick={() => window.scrollTo(0,0)} className='w-5 h-5  bg-yellow-300 rounded-full hover:shadow-rouded hover:shadow-yellow-100/40' />
    </motion.div>
  )
}

export default HookFish