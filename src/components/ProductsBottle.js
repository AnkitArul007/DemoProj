import React from 'react'
import "../styles/productsBottle.css"


const ProductsBottle = (props) => {
  return (
    
        <div className="container products-img-wrapper position-relative d-flex justify-content-center align-items-center">
            <img src={props.item} alt="bottleImage" />


            <div className="hidden-Cont position-absolute d-flex justify-content-center align-items-center ">
                <div className="size-cont col-8 d-flex flex-column align-items-center justify-content-start">
                    <p>Select Size</p>
                    <div className="sizes d-flex justify-content-between align-items-center col-10">
                        <div className="size">
                            <p>17 0Z</p>
                        </div>
                        <div className="size">
                            <p>25 0Z</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductsBottle