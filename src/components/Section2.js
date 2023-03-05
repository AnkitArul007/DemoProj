import React from 'react'
import "../styles/section2.css"
import Bottle1 from "../images/bottle1.svg"
import Bottle2 from "../images/bottle2.svg"
import Bottle3 from "../images/bottle3.svg"
import Bottle4 from "../images/bottle4.svg"
import Text from "../images/text.svg"

// importing hooks and framer-motion
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"

const Section2 = () => {
    // using intersection observer for animating the bottles onScroll
    const { ref, inView } = useInView({
        threshold:0.2
    });  
    // using useAnimation hook to animate the bottles from "framer-moition"
    const animateOdds = useAnimation();
    const animateEvens = useAnimation();
    const animateText = useAnimation();

    // useEffect hook to animate the bottles while in-view of the window
    useEffect(()=>{
        if (inView){
            animateOdds.start({
                x:0,
                y:0,
                rotate:"-30deg",
                transition: {
                    duration:1
                }
            })

            animateEvens.start({
                x:0,
                y:0,
                rotate:"-30deg",
                transition: {
                    duration:1
                }
            })

            animateText.start({
                y:0,
                transition:{
                    duration:1
                }
            })
        }
        if(!inView){
            animateOdds.start({
                x:"-100%",
                y:"600%",
                rotate:"-30deg",
                transition: {
                    duration:1
                }
            })

            animateEvens.start({
                x:"100%",
                y:"-600%",
                rotate:"-30deg",
                transition: {
                    duration:1
                }
            })

            animateText.start({
                y:"250px",
                transition:{
                    duration:0.8
                }
            })
        }
    }, [inView]);

  return (
    <section ref={ref} className='container-fluid section-2-wrapper p-0 my-5'>
        <div className="image-cont-background d-flex flex-row w-100 p-0 col-12 position-relative">

            <motion.div className="textContWrapper position-absolute d-flex justify-content-center align-items-center" style={{
                width:"100%",
                height:"100%",
                zIndex:"15"
            }}
                animate={animateText}
            >
                <img src={Text} alt="" />
            </motion.div>

            <motion.div className='imageCont-bottle1 col-3 d-flex justify-content-center align-items-center p-0'
                initial={{rotate:"30deg", scale:"0.9"}}
                animate={{rotate:"30deg", scale:"0.9"}}
            >
                <motion.img src={Bottle1} alt="bottleImage" style={{
                    top:"-50px"
                }}
                    animate={animateOdds}
                />
            </motion.div>

            <motion.div className='imageCont-bottle1 col-3 d-flex justify-content-center align-items-center p-0'
                initial={{rotate:"30deg", scale:"0.9"}}
                animate={{rotate:"30deg", scale:"0.9"}}
            >
                <motion.img src={Bottle2} alt="bottleImage" className='object-fit-contain' style={{
                    top:"-100px",
                }}
                    animate={animateEvens}
                />
            </motion.div>

            <motion.div className='imageCont-bottle1 col-3 d-flex justify-content-center align-items-center p-0' 
                initial={{rotate:"30deg", scale:"0.9"}}
                animate={{rotate:"30deg", scale:"0.9"}}
            >
                <motion.img src={Bottle3} alt="bottleImage" className='object-fit-contain' style={{
                    bottom:"-130px",
                }}
                    animate={animateOdds}
                />
            </motion.div>

            <motion.div className='imageCont-bottle1 col-3 d-flex justify-content-center align-items-center p-0' style={{
                right:"0"
            }}
                initial={{rotate:"30deg", scale:"0.9"}}
                animate={{rotate:"30deg", scale:"0.9"}}
            >
                <motion.img src={Bottle4} alt="bottleImage" className='object-fit-contain'
                 style={{
                    top:"-130px",
                }}
                    animate={animateEvens}
                />
            </motion.div>
        </div>
    </section>
  )
}

export default Section2