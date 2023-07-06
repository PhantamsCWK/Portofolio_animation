import { motion } from 'framer-motion'

const TransitionEffect = () => {
    const colors = [ "bg-oceanBlue", "bg-primary", "bg-tertiary" ]

  return (
    <>
        {
            colors.map((c, i) => (
                <motion.div 
                  className={`${c} absolute bottom-0 left-0 h-full z-50`} 
                  initial={{ width: "50%" }} 
                  animate={{ width: 0 }}
                  exit={{ width: "50%" }}
                  transition={{ duration: 0.8, delay: (i * 0.2) }}
                />
            ))
        }
        {
            colors.map((c, i) => (
                <motion.div 
                  className={`${c} absolute bottom-0 right-0 h-full z-50`} 
                  initial={{ width: "50%" }} 
                  animate={{ width: 0 }}
                  exit={{ width: "50%" }}
                  transition={{ duration: 0.8, delay: (i * 0.2) }}
                />
            ))
        }
    </>
  )
}

export default TransitionEffect