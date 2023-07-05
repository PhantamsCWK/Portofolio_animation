import { About, ParticlesCanvas, Tech } from "../components";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div 
      className=""
    >
      <About />
      <Tech />
      <ParticlesCanvas />
    </motion.div>
  )
}

export default AboutPage