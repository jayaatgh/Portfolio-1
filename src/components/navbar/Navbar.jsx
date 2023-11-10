import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration: 0.5}}
            >
                Code Cub
            </motion.span>
            <div className="social">
                <a href="https://www.facebook.com/jayabhargavi.jayabhargavi.75/"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.hackerrank.com/profile/jayabhargavi"><img src="/hackerrank.png" alt="" /></a>
                <a href="https://github.com/jayaatgh"><img src="/git.png" alt="" /></a>
                <a href="https://dribbble.com/jayabhargavi"><img src="/dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;