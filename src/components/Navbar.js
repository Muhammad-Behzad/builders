import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <section className="section1">
        <div className="contact">
            <div className="pic"></div>
            <p>+ 012 345 2345</p>
        </div>

        <div className="contact">
            <div className="pic" id='pic2'></div>
            <p>arkitecture@gmail.com</p>
        </div>

        <div className="terms">
            <p>Terms</p>
            <p>Privacy</p>
        </div>
        <div className="terms">
            <div className="socialicons" id='si1'></div>
            <div className="socialicons" id='si2'></div>
            <div className="socialicons" id='si3'></div>
            <div className="socialicons" id='si4'></div>
        </div>
    </section>

    <section className="section2">
        <div className="left">
            <div className="icon"></div>
            <p>Arkitectur</p>
        </div>

        <div className="right">
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/services">SERVICE</NavLink></li>
                <li><NavLink to="/project">PROJECT</NavLink></li>
                <li><NavLink to="/contact">CONTACT US</NavLink></li>
            </ul>
        </div>
    </section>
    </>
  )
}
