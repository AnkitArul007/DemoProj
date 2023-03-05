import React from 'react'
import "../styles/section3.css"

import Girl from "../images/girl.svg"
import Boy from "../images/boy.svg"
import Water from "../images/water.svg"

// importing data file
import WorkData from "../data/section3WorkData.json"
import LowerSecData from "../data/WorkSecLowerHalfData.json"



const images = [Water, Girl, Boy]

const Section3 = () => {
  return (
    <section className='section-3-wrapper container-fluid'>
        <div className="row col-12 px-5 h-50">
            <h2 className="col-4 text-uppercase h-25">
                Our Work
                <span>_</span>
            </h2>
            <div className="technology-container col-8 d-flex flex-row flex-wrap justify-content-center align-items-start h-100">
                
                {WorkData.map((ele)=>(
                    <div className="tech-content-wrapper col-6 h-50 position-relative d-flex flex-column justify-content-center align-items-start">
                        <div className='background-number col-4 position-absolute'>
                            <p>{ele.p}</p>
                        </div>
                        <h4 className='text-capitalize col-5'>{ele.h4}</h4>
                        <p>{ele.p2}</p>
                    </div>
                ))}

            </div>
        </div>

        <div className="row fact-cont-wrapper h-50 col-11">
            
            {LowerSecData.map((ele, i) => {
                console.log(ele.img)
                return i%2 === 0 ? 
                (<div className="facts-cont col-4 h-50 d-flex justify-content-center align-items-center p-0 position-relative">
                    <div className='position-absolute'>
                        <p className='background-alphabet'>{ele.p}</p>
                    </div>
                    <p className='col-8 mx-auto'>{ele.p2}</p>
                </div>)
                :
                (<div className="facts-cont col-4 h-50 d-flex justify-content-center align-items-center p-0">
                    <img className='' src={images[i/2 - 0.5]} alt="" style={{
                    }}/>
                </div>)
            })}
        </div>
    </section>
  )
}

export default Section3