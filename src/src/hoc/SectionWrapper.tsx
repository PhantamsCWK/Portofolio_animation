import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SectionWrapper = (Components: any, idName: string) => 
function HOC() {
    return (
        <motion.div
            variants={staggerContainer(0, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Components />
        </motion.div>
    )
 }


export default SectionWrapper