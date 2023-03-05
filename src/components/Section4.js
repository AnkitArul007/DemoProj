import React from 'react'
import "../styles/section4.css"
import InvertedComma from "../images/invertedComma.svg"
// import T from "../images/testimonialBackground.png"

import Person1 from "../images/person1.svg"
import Person2 from "../images/person2.svg"
import Person3 from "../images/person3.svg"

const Section4 = () => {


  return (
    <section className='container-fluid section-4-wrapper mt-5'>
      <h2 className='text-uppercase mb-5'>testimonials <span>_</span></h2>
      
      <div className="row testimonials-wrapper col-11 p-0 h-75 d-flex justify-content-between align-items-center">

        <div className="testimonial-cont border border-light col-3 d-flex flex-column justify-content-end pt-5 position-relative">

          <div className="img-Cont position-absolute">
            <img src={Person1} alt="" />
          </div>

          <div className="backgroundCover position-absolute"></div>

          <div className="description position-relative">
            <p>
              Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.
              They did a great job!!
            </p>

            <img className='position-absolute' src={InvertedComma} alt="" style={{
              bottom:"5px"
            }}/>

          </div>
          <div className="person-details d-flex justify-content-between align-items-center">
            <div className="name-n-desig-cont">
              <p className='name'>Austin Wade</p>
              <p className='designation translate-middle-y'>Athelete</p>
            </div>
            <div className="company-name">
              <p className='text-uppercase'>adidas</p>
            </div>
          </div>
        </div>

        <div className="testimonial-cont border border-light col-3 d-flex flex-column justify-content-end pt-5 position-relative">

          <div className="img-Cont position-absolute">
            <img src={Person2} alt="" />
          </div>

          <div className="backgroundCover2 position-absolute"></div>

          <div className="description position-relative">
            <p>
              Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.
              They did a great job!!
            </p>

            <img className='position-absolute' src={InvertedComma} alt="" style={{
              bottom:"5px"
            }}/>

          </div>
          <div className="person-details d-flex justify-content-between align-items-center">
            <div className="name-n-desig-cont">
              <p className='name'>Austin Wade</p>
              <p className='designation translate-middle-y'>Athelete</p>
            </div>
            <div className="company-name">
              <p className='text-uppercase'>adidas</p>
            </div>
          </div>
        </div>

        <div className="testimonial-cont col-3 border border-light d-flex flex-column justify-content-end pt-5 position-relative">

          <div className="img-Cont position-absolute">
            <img src={Person3} alt="" />
          </div>

          <div className="backgroundCover3 position-absolute"></div>

          <div className="description position-relative">
            <p>
              Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.
              They did a great job!!
            </p>

            <img className='position-absolute' src={InvertedComma} alt="" style={{
              bottom:"5px"
            }}/>

          </div>
          <div className="person-details d-flex justify-content-between align-items-center">
            <div className="name-n-desig-cont">
              <p className='name'>Austin Wade</p>
              <p className='designation translate-middle-y'>Athelete</p>
            </div>
            <div className="company-name">
              <p className='text-uppercase'>adidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Section4