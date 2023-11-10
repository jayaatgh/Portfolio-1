import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants ={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const isInView = useInView(ref, { margin: "-100px"});

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xgdu57f', 'template_86wbp55', formRef.current, '_6AkWR8B6hTsxgQq4')
          .then((result) => {
                setSuccess(true)
          }, (error) => {
                setError(true)
          });
      };


    return (
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>jayabargavijaya@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Linkedin</h2>
                    <span><a href="https://www.linkedin.com/in/jayabhargavi-b-604a74210/">linkedin.com/in/jayabhargavi-b-604a74210/</a></span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>India</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                
                <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
                    <motion.path 
                        strokeWidth={1} 
                        fill="none" 
                        initial={{pathLength:0}}
                        animate={ isInView && {pathLength: 1}}
                        transition={{duration: 3}}
                        d="M15.17 11.053L11.18 15.315C10.8416 15.6932 10.3599 15.9119 9.85236 15.9178C9.34487 15.9237 8.85821 15.7162 8.51104 15.346C7.74412 14.5454 7.757 13.2788 8.54004 12.494L13.899 6.763C14.4902 6.10491 15.3315 5.72677 16.2161 5.72163C17.1006 5.71649 17.9463 6.08482 18.545 6.736C19.8222 8.14736 19.8131 10.2995 18.524 11.7L12.842 17.771C12.0334 18.5827 10.9265 19.0261 9.78113 18.9971C8.63575 18.9682 7.55268 18.4695 6.78604 17.618C5.0337 15.6414 5.07705 12.6549 6.88604 10.73L12.253 5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </motion.div>
                <motion.form 
                    onSubmit={sendEmail}
                    ref={formRef}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact;