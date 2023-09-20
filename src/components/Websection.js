import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Websection() {
  return (
    <>
    <section className="web_section">
        <div className="web_box">
            <p>ABOUT</p>
            <ul>
                <li><NavLink to="/">Home / </NavLink></li>
                <li><NavLink to="/services"> / Service /  </NavLink></li>
                <li><NavLink to="/about"> / About</NavLink></li>
            </ul>
        </div>  
    </section>
    </>
  )
}
