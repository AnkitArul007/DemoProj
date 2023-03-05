import React from 'react'
import "../styles/section3.css"

import Girl from "../images/girl.svg"
import T from "../images/testimonialBackground.png"

const Section3 = () => {
  return (
    <section className='section-3-wrapper container-fluid'>
        <div className="row col-12 px-5 h-50">
            <h2 className="col-4 text-uppercase h-25">
                Our Work
                <span>_</span>
            </h2>
            <div className="technology-container col-8 d-flex flex-row flex-wrap justify-content-center align-items-start h-100">
                <div className="tech-content-wrapper col-6 h-50 position-relative d-flex flex-column justify-content-center align-items-start">
                    <div className='background-number col-4 position-absolute'>
                        <p>01</p>
                    </div>
                    <h4 className='text-capitalize col-4'>get inspired</h4>
                    <p>satisfy all your inspiration needs in one place.</p>
                </div>
                <div className="tech-content-wrapper col-6 h-50 position-relative d-flex flex-column justify-content-center align-items-start">
                    <div className='background-number col-4 position-absolute'>
                        <p>02</p>
                    </div>
                    <h4 className='text-capitalize col-4'>get inspired</h4>
                    <p>satisfy all your inspiration needs in one place.</p>
                </div>
                <div className="tech-content-wrapper col-6 h-50 position-relative d-flex flex-column justify-content-center align-items-start">
                    <div className='background-number col-4 position-absolute'>
                        <p>03</p>
                    </div>
                    <h4 className='text-capitalize col-4'>get inspired</h4>
                    <p>satisfy all your inspiration needs in one place.</p>
                </div>
                <div className="tech-content-wrapper col-6 h-50 position-relative d-flex flex-column justify-content-center align-items-start">
                    <div className='background-number col-4 position-absolute'>
                        <p>04</p>
                    </div>
                    <h4 className='text-capitalize col-4'>get inspired</h4>
                    <p>satisfy all your inspiration needs in one place.</p>
                </div>
            </div>
        </div>

        <div className="row fact-cont-wrapper h-50 col-11">
            <div className="facts-cont col-4 h-50 d-flex justify-content-center align-items-center p-0 position-relative">

                <div className='position-absolute'>
                    <p className='background-alphabet'>A</p>
                </div>

                <p className='col-8 mx-auto'>One million single use plastic bottles are thrown out every minute!</p>
            </div>

            <div className="facts-cont col-4 h-50 d-flex justify-content-center align-items-center p-0">
                <img className='' src={T} alt="" style={{
                    opacity:"5%"
                }}/>
            </div>

            <div className="facts-cont col-4 h-50 d-flex justify-content-center align-items-center p-0 position-relative">

                <div className='position-absolute'>
                    <p className='background-alphabet'>B</p>
                </div>
                <p className='col-8 mx-auto'>One million single use plastic bottles are thrown out every minute!</p>
            </div>

            <div className="facts-cont col-4 h-50 d-flex justify-content-center align-items-center p-0">
                <img className='' src={Girl} alt=""/>
            </div>

            <div className="facts-cont col-4 h-50 d-flex justify-content-center align-items-center p-0 position-relative">

                <div className='position-absolute'> 
                    <p className='background-alphabet'>C</p>
                </div>
                <p className='col-8 mx-auto'>One million single use plastic bottles are thrown out every minute!</p>
            </div>

            <div className="facts-cont col-4 h-50 d-flex justify-content-center align-items-center p-0">
                <img className='' src={Girl} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Section3