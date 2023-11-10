import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial:{
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildern: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})

    return (
        <motion.div className = "services" variants={variants} initial="initial" ref={ref} animate={ /*isInView &&*/ "animate"} >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT I DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color:"#352F44"}}>
                    <h2>Full-Stack Developer</h2>
                    <p>Creating Quality Products that are well functional following design principles</p>
                    <button>Learn more</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"#352F44"}}>
                    <h2>UX/UI Designer</h2>
                    <p>Excellent product's designs that are always intuitive</p>
                    <button>Learn more</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"#352F44"}}>
                    <h2>Cloud Achitect</h2>
                    <p>Certified Architect Designer.</p>
                    <button>Learn more</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"#352F44"}}>
                    <h2>Artificial Intelligence</h2>
                    <p>Obtained a deep knowledge in the field of AI, ML and DL.</p>
                    <button>Learn More</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;