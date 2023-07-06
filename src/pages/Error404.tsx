import { motion } from "framer-motion"
import { ParticlesCanvas } from "../components"
import { styles } from "../styles"

const Error404 = () => {
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
        <motion.div
            className="flex flex-col justify-center items-center gap-2"
            initial="initial"
            animate="show"
            variants={{ 
                initial: {
                    opacity: 0,
                    scale: 1,
                    color: "white",
                },
                show: {
                    opacity: 1,
                    transition: { delay: 1, type: "tween", duration: 1 }
                },
             }}
        >
            <motion.h1 
                className={`${styles.sectionHeadText}`}
                whileHover="hover"
                // whileTap="tap"
                variants={{ 
                    hover: {
                        scale: 1.2,
                        color: "red",
                        transition: { type: "spring" }
                    },
                    // tap: {

                    // }
                 }}
                
            > 
                not found
            </motion.h1>
            <span className={`${styles.sectionSubText}`}>
            we cannot find your destianation
            </span>
        </motion.div>
        <ParticlesCanvas />
    </div>
  )
}

export default Error404