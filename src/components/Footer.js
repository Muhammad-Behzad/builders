import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <section className="section12">
      <div className="sec12_box">
        <p className="sec12_p1">ADDRESS</p>
        <p className="sec12_p2">123 Street, New York, USA</p>
        <p className="sec12_p2">+ 015 345 65487</p>
        <p className="sec12_p2">arkitect@gmail.com</p>
        <div className="sec12_terms">
            <div className="socialicons2" id='si1'></div>
            <div className="socialicons2" id='si2'></div>
            <div className="socialicons2" id='si3'></div>
            <div className="socialicons2" id='si4'></div>
        </div>
      </div>
      <div className="sec12_box">
        <p className="sec12_p1">SERVICES</p>
        <ul>
          <li>|| Architecture</li>
          <li>|| 3D Animation</li>
          <li>|| House Planning</li>
          <li>|| Interior Design</li>
          <li>|| Construction</li>
        </ul>
      </div>
      <div className="sec12_box">
        <p className="sec12_p1">QUIK LINKS</p>
        <ul>
          <li><NavLink to="/about">|| About us</NavLink></li>
          <li><NavLink to="/project">|| Project</NavLink></li>
          <li><NavLink to="/services">|| Our Services</NavLink></li>
          <li><NavLink to="/element">|| Element</NavLink></li>
          <li><NavLink to="/terms">|| Terms and Conditions</NavLink></li>
        </ul>
      </div>
      <div className="sec12_box">
        <p className="sec12_p1">NEWS LETTER</p>
        <p className="sec12_p2">Here you can enter your mail to sign up.</p>
        <div className="sign_up">
          <form action="">
            <input type="email" placeholder='Your email' className='email'/>
          </form>
          <button>Sign Up</button>
        </div>
      </div>
    </section>
      <div className="sec12_box2">
        <div className="para_box">
           <p>© <span className='span_box'>Arkitecture</span>, All Right Reserved.</p>
        </div>  
      </div>
    </>
  )
}
