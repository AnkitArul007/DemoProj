import React from 'react'
import "../styles/productsPage.css"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"
import MainBottle from "../images/productsPageBottle.svg"
import MainCap from "../images/productsPageCap.svg"
import Img1 from "../images/img1.svg"
import Img2 from "../images/img2.svg"
import Img3 from "../images/img3.svg"
import Img4 from "../images/img4.svg"
// import Img1 from "../images/img1.svg"
import { AiFillStar } from "react-icons/ai"

import Fb from "../images/facebook.svg"
import Tw from "../images/twitter.svg"
import P from "../images/p.svg"

import Visa from "../images/visa.svg"
import MasterCard from "../images/masterCard.svg"
import Paypal from "../images/pay-pal.svg"

import { Link } from "react-router-dom"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { MdFavoriteBorder } from "react-icons/md"

import ProductsBottle from "../components/ProductsBottle"
import Footer from "../components/Footer"

import GreenBottle from "../images/productsGreenBottle.svg"
import OrangeBottle from "../images/productsOrangeBottle.svg"
import Mug from "../images/productsMug.svg"
import ColoredRect from "../images/coloredRect.svg"
import MiniCap from "../images/miniCap.svg"
import MiniBottle from "../images/miniBottle.svg"
import Play from "../images/play.svg"

// import { motion } from "framer-motion"

const img = [
    {
        "img":GreenBottle,
        "name":"Monaco Green",
        "tag":"PureV"
    },
    {
        "img":OrangeBottle,
        "name":"Obsidian Pearl",
        "tag":"FilterV"
    },
    {
        "img":Mug,
        "name":"Pure Snow",
        "tag":"JugV"
    }
]

const ProductsPage = () => {
  return (
    <>
        <section className='container-fluid productsPage-wrapper'style={{
        height:"max-content",
        borderBottom:"2px solid #13395B"
    }} >
        <div className="first-row row col-11 ">
            <div className="product-name-n-info p-0">
                <h1>Bottle Filtered <span>_</span></h1>
                <div className="info-cont-wrapper d-flex justify-content-between align-items-center">
                    <div className="infos d-flex justify-content-start align-items-center gap-5">
                        <div className="generalInfo active">
                            <p>General Info</p>
                        </div>
                        <div className="generalInfo">
                            <p>Product Details</p>
                        </div>
                        <div className="generalInfo">
                            <p>Reviews</p>
                        </div>
                    </div>
                    <div className="reviews-cont">
                        <div className="stars-cont">
                            <AiFillStar className='fill'/>
                            <AiFillStar className='fill'/>
                            <AiFillStar className='fill'/>
                            <AiFillStar className='fill'/>
                            <AiFillStar />
                        </div>
                        <p>12 reviews</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="second-row row col-11 mt-3">
            <div className="left-half-wrapper col-6 d-flex flex-column align-items-start p-0 pe-5">
                <div className="main-img-cont position-relative col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className='upperImg-Cont position-relative d-flex flex-column justify-content-center align-items-center p-0'
                    >
                        <img className='m-0' src={MainCap} alt="" />
                        <img className='position-absolute m-0' src={ColoredRect} alt=""
                        />
                    </div>
                    <img src={MainBottle} alt="" 
                        initial={{x:0, y:-24}}
                    />
                    <div className="navigation-arrows position-absolute col-12 px-3 d-flex justify-content-between align-content-center" style={{
                        top:"",
                        left:"0"
                    }}>
                        <div className="left-arrow">
                            <AiOutlineArrowLeft />
                        </div>
                        <div className="right-arrow">
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </div>

                <div className="small-Image-cont d-flex justify-content-between align-items-center col-12 mt-3">
                    <div className="side-img-cont col-2 d-flex justify-content-center align-items-center">
                        <img src={Img1} alt=""/>
                    </div>

                    <div className="side-img-cont col-2">
                        <img src={Img2} alt="" />
                    </div>

                    <div className="side-img-cont col-2">
                        <img src={Img3} alt="" />
                    </div>

                    <div className="side-img-cont col-2">
                        <img src={Img4} alt="" />
                    </div>

                    <div className="side-img-cont col-2 d-flex flex-column justify-content-center align-items-center position-relative">
                        <img src={MiniCap} alt="" />
                        <img src={MiniBottle} alt="" />
                        <div className="cover position-absolute">
                            <img src={Play} alt="" />
                        </div>
                    </div>
                </div>

                <div className="media-handles-cont col-12 d-flex justify-content-center align-items-center gap-4 mt-2">
                    <h4>Share:</h4>
                    <div className="mediaHandles d-flex justify-content-center align-items-start gap-3">
                        <Link to='/'>
                            <img src={Fb} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={Tw} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={P} alt="" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="right-half-wrapper col-6">
                <div className="first-half">
                    <div className="row pricing-details col-5">
                        <p className="col discountedPrice">$150</p>
                        <p className="col originalPrice">$300</p>
                        <div className="col discountCont">
                            <p>-50%</p>
                        </div>
                    </div>

                    <div className="row productDetails-cont d-flex justify-content-between">
                        <div className="col colors-cont d-flex justify-content-start gap-2">
                            <div className="blackColor d-flex justify-content-center align-items-center p-0">
                                <div className="black"></div>
                            </div>

                            <div className="whiteColor d-flex justify-content-center align-items-center p-0">
                                <div className="white"></div>
                            </div>

                            <div className="blueColor d-flex justify-content-center align-items-center p-0">
                                <div className="blue"></div>
                            </div>
                            <p>Black</p>
                        </div>

                        <div className="col details-cont-wrapper d-flex justify-content-between gap-5">
                            <div className="insulatedCont">
                                <p>Insulated</p>
                            </div>

                            <div className="unInsulatedCont">
                                <p>Non-Insulated</p>
                            </div>
                        </div>

                        <div className="sizeCont col-12">
                            <form action="" className='col-12'>
                                <label htmlFor="size">Size</label>
                                <br />
                                <select name="size" id="select" className='select col-12'>
                                    <option value="17">17 OZ</option>
                                    <option value="25">25 OZ</option>
                                </select>
                            </form>
                        </div>

                        <div className="addingProductCont mt-3 col-12 d-flex justify-content-between ">
                            <input className='col-1 ps-2' type="number" name="quantity" id="" defaultValue={1} />
                            <button className="addToCart col-5 d-flex justify-content-center align-items-center gap-2">
                                <AiOutlineShoppingCart />
                                Add to Cart
                            </button>

                            <button className="fav col-4 d-flex justify-content-center align-items-center gap-2">
                                <MdFavoriteBorder />
                                Favourite
                            </button>
                        </div>
                    </div>

                    <div className="deliveryDetails-Cont mt-5 pb-3">
                        <p>Delivery</p>
                        <p>Free standard shipping on orders over &nbsp; <b>$35</b> &nbsp;  before tax, plus free returns.</p>

                        <div className="container table-Cont">
                            <div className="head row py-1">
                                <div className="col">TYPE</div>
                                <div className="col">HOW LONG</div>
                                <div className="col">HOW MUCH</div>
                            </div>

                            <div className="contents row py-1">
                                <div className="col">Standard delivery</div>
                                <div className="col">1-4 business days</div>
                                <div className="col">$4.50</div>
                            </div>

                            <div className="contents row py-1">
                                <div className="col">Express delivery</div>
                                <div className="col">1 business day</div>
                                <div className="col">$10</div>
                            </div>

                            <div className="contents row py-1">
                                <div className="col">Pick up in store</div>
                                <div className="col">1-3 business days</div>
                                <div className="col">Free</div>
                            </div>
                        </div>
                    </div>

                    <div className="returnPolicy mt-5">
                        <p>Return</p>
                        <p>You have <b>15 days</b> to return the item(s) using any of the following methods:</p>
                        <ul className='pb-3'>                        
                            <li>Free store return</li>
                            <li>Free returns via USPS Dropoff Service</li>
                        </ul>

                        <div className="paymentModes-avaliabilityCont d-flex justify-content-between mt-5">
                            <img src={Visa} alt="" />
                            <img src={MasterCard} alt="" />
                            <img src={Paypal} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="third-row row col-11 mt-5 p-0">
            <p>Recommendations <span>_</span></p>
            <div className='d-flex justify-content-between flex-wrap col-12 mx-auto my-5'>

                {/* using es6 map method to render the components */}
                {img.map(ele => (
                    <div>
                        <ProductsBottle item={ele.img}/>
                        <div className='bottle-desc-cont col-12 text-center mt-1'>
                            <h4>{ele.name}</h4>
                            <p>{ele.tag}</p>
                        </div>
                    </div>
                ))}
    
            </div>
        </div>

    </section>
        <Footer />
    </>
  )
}

export default ProductsPage