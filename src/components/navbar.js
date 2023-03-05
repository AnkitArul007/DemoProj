import React from 'react';
import LoginBtn from './Btn';
import "../styles/navbar.css"
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav-wrapper container container-fluid p-3'>
        <nav className='d-flex flex-row justify-content-between align-items-center'>
            <h3 style={{
                fontFamily: 'Lato',
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "24px",
                lineHeight: "130%",
                color: "#13395B"
            }}>ARACHNOMESH</h3>
            <div className="links-cont">
                <ul>
                    <li>
                        <a className='active' href="/">Home</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a className='' href="/">About</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="/">Bottles</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>

                <LoginBtn name="Login"/>
            </div>
    </nav>
    </div>
  )
}

export default Navbar