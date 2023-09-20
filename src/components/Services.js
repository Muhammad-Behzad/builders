import React from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Services() {

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);
  
  return (
    <>
    <Navbar/>

    <section className="web_section">
        <div className="web_box">
            <p>SERVICES</p>
            <ul>
                <li><NavLink to="/">Home / </NavLink></li>
                <li><NavLink to="/about"> / About /  </NavLink></li>
                <li><NavLink to="/services"> / Service</NavLink></li>
            </ul>
        </div>  
    </section>

    <section className="section4">

      <div className="sec4_box">
        <div className="sec4_icons">
          <div id='icon_1'></div>
        </div>
        <p className='icon_heading'>Design Approach</p>
        <p className='sec4-para2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorem natus perferendis eveniet earum illum maxime</p>
      </div>

      <div className="sec4_box">
        <div className="sec4_icons">
          <div id='icon_2'></div>
        </div>
        <p className='icon_heading'>Innovative Solutions</p>
        <p className='sec4-para2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorem natus perferendis eveniet earum illum maxime</p>
      </div>

      <div className="sec4_box">
        <div className="sec4_icons">
          <div id='icon_3'></div>
        </div>
        <p className='icon_heading'>Project Management</p>
        <p className='sec4-para2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorem natus perferendis eveniet earum illum maxime</p>
      </div>      
      
    </section>

    <section className="section6">
      <div className="sec6_div1">
        <p id='sec6_div1_p1' data-aos="fade-up">OUR SERVICES</p>
        <p data-aos="fade-up">We Focused On Modern</p>
        <p data-aos="fade-up">Architecture And Interior Design</p>
      </div>

      <div className="sec6_div2">
        <div className="sec6_box" id='sec6_box1' data-aos="fade-up">
          <div className="subox" id='icon_5'></div>
          <p className='subox_p1'>Architecture</p>
          <p className='subox_p2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
          <button>Read More</button>
        </div>
        <div className="sec6_box" id='sec6_box2' data-aos="fade-up">
          <div className="subox" id='icon_6'></div>
          <p className='subox_p1'>3D Animation</p>
          <p className='subox_p2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
          <button>Read More</button>
        </div>
        <div className="sec6_box" id='sec6_box3' data-aos="fade-up">
          <div className="subox" id='icon_7'></div>
          <p className='subox_p1'>House Planning</p>
          <p className='subox_p2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
          <button>Read More</button>
        </div>
      </div>

      <div className="sec6_div2" id='down'>
        <div className="sec6_box" id='sec6_box4' data-aos="fade-up">
          <div className="subox" id='icon_8'></div>
          <p className='subox_p1'>Interior Design</p>
          <p className='subox_p2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
          <button>Read More</button>
        </div>
        <div className="sec6_box" id='sec6_box5' data-aos="fade-up">
          <div className="subox" id='icon_9'></div>
          <p className='subox_p1'>Renovation</p>
          <p className='subox_p2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
          <button>Read More</button>
        </div>
        <div className="sec6_box" id='sec6_box6' data-aos="fade-up">
          <div className="subox" id='icon_10'></div>
          <p className='subox_p1'>Construction</p>
          <p className='subox_p2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet</p>
          <button>Read More</button>
        </div>
      </div>
    </section>

    <section className="section10">
      <div className="sec6_div1">
         <p id='sec6_div1_p1' data-aos="fade-up">TESTIMONIAL</p>
         <p data-aos="fade-up">Thousands Of Customers Who Trust</p>
         <p data-aos="fade-up">Us And Our Services</p>
      </div>

      <div className="sec10_div2" data-aos="fade-up">
        <Carousel className='carousel_1'>
          <div>
            <img src="testimonial-1.png" alt=''/>
          </div>
          <div>
            <img src="testimonial-2.png" alt=''/>
          </div>
          <div>
            <img src="testimonial-3.png" alt=''/>
          </div>
        </Carousel>
      </div>
    </section>

    <Footer/>

    </>
  )
}
