import React from 'react'
import "../styles/footer.css"
import Wave1 from "../images/wave1.svg"
import Wave1b from "../images/wave1b.svg"
import Wave1c from "../images/wave1c.svg"
import Wave1d from "../images/wave1d.svg"
import Wave2 from "../images/wave2.svg"
import Wave2b from "../images/wave2b.svg"
import Wave2c from "../images/wave2c.svg"
import Wave3 from "../images/wave3.svg"
import Wave3b from "../images/wave3b.svg"
import Wave3c from "../images/wave3c.svg"
import Wave3d from "../images/wave3d.svg"
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

import Data from "../data/footerData.json"

const Footer = () => {
  return (
    <section className="container-fluid footer-wrapper h-50 py-5 position-relative">
        <div className="row p-0 first-half-cont col-11">
            <div className="col media-wrapper col-6 d-flex justify-content-between align-content-start">

                {Data.map((ele)=>(
                    <div className="media-cont col-4">
                    <h4>{ele.heading}</h4>
                    <div className="links">
                        <ul className='d-flex flex-column justify-content-start align-items-start gap-3 p-0'>
                            {ele.subLinks.map(links=>(
                                <li>
                                <a href="/">{links}</a>
                            </li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
                ))}  
            </div>

            <div className="col mail-cont-wrapper">
                <p>Sign up for the newsletter</p>
                <div className="input-box-cont col-12 ps-5">
                    <form action="" className='d-flex justify-content-between align-items-center'>
                        <input className='border-0' type="email" name="" id="" placeholder='Enter your Email'/>
                        <button>SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="row second-half-cont col-11 mt-4">
            <div className="col-4 arachnomesh-copyright">
                <p>Copyright Arachnomesh 2022</p>
            </div>

            <div className="col-4 media-handles d-flex justify-content-center gap-3">
                <div className="media">
                    <FaLinkedinIn />
                </div>
                <div className="media">
                    <FaFacebookF />
                </div>
                <div className="media">
                    <FaTwitter />
                </div>
                <div className="media">
                    <IoLogoWhatsapp />
                </div>
            </div>

            <div className="col-4 tnC d-flex justify-content-around">
                <p>T&C</p>
                <p>
                    <a href="/">Privacy Policy</a>
                </p>
            </div>
        </div>

        <div className="img-cont position-absolute border border-danger" style={{
            zIndex:"-10",
            bottom:"0px",
            left:"0"
        }}>
           <div className='position-relative'>
            <div className="wave1 d-flex gap-0 align-items-baseline position-absolute" style={{
                    zIndex:"1",
                    transform:"scale(1)",
                    bottom:"60px",
                    left:"0"
                }}>
                    <img src={Wave1} alt=""/>
                    <img src={Wave1b} alt=""/>
                    <img src={Wave1c} alt=""/>
                    <img src={Wave1d} alt=""/>
                </div>

                <div className="wave2 d-flex gap-0 align-items-baseline position-absolute" style={{
                    zIndex:"2",
                    transform:"scale(1)",
                    bottom:"0px",
                    left:"0"
                }}>
                    <img src={Wave2} alt=""/>
                    <img src={Wave2b} alt=""/>
                    <img src={Wave2c} alt=""/>
                    <img src={Wave2b} alt=""/>
                </div>

                <div className="wave3 d-flex gap-0 align-items-baseline position-absolute" style={{
                    zIndex:"3",
                    transform:"scale(1)",
                    bottom:"0px",
                    left:"0"
                }}>
                    <img src={Wave3} alt=""/>
                    <img src={Wave3b} alt=""/>
                    <img src={Wave3d} alt=""/>
                    <img src={Wave3c} alt="" style={{
                        transform:"translateY(0px)"
                    }}/>
                </div>
           </div>
        </div>
    </section>
  )
}

export default Footer