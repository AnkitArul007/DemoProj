import React from 'react'
import "../styles/section1.css"
import BlackCap from "../images/blackBottleCap.svg";
import Circle from "../images/circle.svg"
import BlackBottle from "../images/blackBottle.svg"
import Button from "./Btn"
import { motion } from "framer-motion"

const Section1 = () => {
  return (
    <section className=''>
        <div className="bottleCapImgCont">
            <img src={BlackCap} alt="capImg" />
        </div>
        <motion.div className=""
            initial={{scale:1, opacity:1}}
            animate={{scale:1.2, opacity:0.8}}
            transition={{duration:2.5}}
            style={{
                zIndex:"-10"
            }}
        >
            <img src={Circle} alt="capImg" />
        </motion.div>
        <div className="bottleImgCont">
            <img src={BlackBottle} alt="capImg" />
        </div>


        <div className="contents-wrapper position-absolute">
                <motion.h1
                    initial={{opacity:0, scale:0.6}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:2.5}}
                >  
                    Self Cleaning Bottles <br/> In 60 Seconds
                </motion.h1>
                <motion.p
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:2.5}}
                >Hit refresh with the intelligently clean bottle built for adventure</motion.p>
            <motion.div 
                initial={{y:"150px", opacity:0}}
                animate={{y:0, opacity: 1, scale: 1 }}
                transition={{duration:2.5}}
                style={{
                    zIndex:"-10"
                }}
            >
                <Button name="Know More"/>
            </motion.div>
        </div>
    </section>
  )
}

export default Section1