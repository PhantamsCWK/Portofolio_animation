import { motion } from 'framer-motion'

const TransitionEffect = () => {
    const colors = [ "blue-700", "tertiary", "primary" ]

  return (
    <>
        {
            colors.map((c, i) => (
                <motion.div 
                  className={`bg-${c} absolute bottom-0 left-0 h-full z-50`} 
                  initial={{ width: "50%" }} 
                  animate={{ width: 0 }}
                  exit={{ width: "50%" }}
                  transition={{ duration: 1, delay: i * 0.3 }}
                />
            ))
        }
        {
            colors.map((c, i) => (
                <motion.div 
                  className={`bg-${c} absolute bottom-0 right-0 h-full z-50`} 
                  initial={{ width: "50%" }} 
                  animate={{ width: 0 }}
                  exit={{ width: "50%" }}
                  transition={{ duration: 1, delay: i * 0.3 }}
                />
            ))
        }
    </>
  )
}

export default TransitionEffect