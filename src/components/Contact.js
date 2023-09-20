import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer';

export default function Contact() {
  return (
    <>
      <Navbar/>

      <section className="web_section">
        <div className="web_box">
            <p>CONTACT</p>
            <ul>
                <li><NavLink to="/">Home / </NavLink></li>
                <li><NavLink to="/services"> / Service /  </NavLink></li>
                <li><NavLink to="/contact"> / Contact</NavLink></li>
            </ul>
        </div>  
    </section>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="sec6_div1">
        <p id='sec6_div1_p1'>CONTACT US</p>
        <p>If You Have Any Query, Please Feel</p>
        <p>Free To Contact Us</p>
    </div>

    <section className="contact_section">
        <div className="consec_box">
            <div className="consec_subox" id='consec_subox1'>
                <div className="boxes">
                    <div className="suboxes" id='suboxes1'></div>
                </div>
                <div className="boxes2">
                    <p className='boxes2_p1'>Address</p>
                    <p className='boxes2_p2'>123 Street, New York, USA</p>
                </div>
            </div>
            <div className="consec_subox" id='consec_subox2'>
                <div className="boxes">
                    <div className="suboxes" id='suboxes2'></div>
                </div>
                <div className="boxes2">
                    <p className='boxes2_p1'>Call Us Now</p>
                    <p className='boxes2_p2'>+ 012 345 2345</p>
                </div>
            </div>
            <div className="consec_subox" id='consec_subox3'>
                <div className="boxes">
                    <div className="suboxes" id='suboxes3'></div>
                </div>
                <div className="boxes2">
                    <p className='boxes2_p1'>Mail Us Now</p>
                    <p className='boxes2_p2'>arkitecture@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="consec_box">
            <div className="input1">
                <form action="">
                    <input type="text" placeholder='Your Name' className='i1'/>
                    <input type="email" placeholder='Your Mail' required/>
                </form>
            </div>
            <div className="input2">
                <form action="">
                    <input type="text" placeholder='Subject'/>
                </form>
            </div>

            <div className="input3">
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            </div>

            <div className="button_btn">
                <button>Send Message</button>
            </div>
        </div>
    </section>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </>
  )
}
