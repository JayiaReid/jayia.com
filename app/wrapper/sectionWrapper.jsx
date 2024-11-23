import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const sectionWrapper = (Component, id) => 
    // defines sectionwrapper for navigation and consistent page padding
function HOC(){
    return(
        <motion.section variants={staggerContainer()} 
        initial="hidden" 
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className="hash-span" id={id}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
    )
}

export default sectionWrapper