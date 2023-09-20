import React, { useState } from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar'
import Websection from './Websection'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);

  const [onscroll, setonscroll] = useState(false);

  return (
    <>
    <Navbar/>

    <Websection/>
    <br/>
    <br/>
    <br/>
    <br/>

    <section className="section5">
      <div className="sec5_box" id='sec5_box1'>
        <div className="about_border">
          <div className="about_img1"></div>
          <div className="about_img2"></div>

        </div>
      </div>

      <div className="sec5_box" id='sec5_box2'>
        <p className='sec5_para1'>ABOUT US</p>
        <p className='sec5_para2'>A Creative Architecture Agency</p>
        <p className='sec5_para2' id='sec5_para2_id'>For Your Dream Home</p>
        <p className='sec5_para3'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

        <p className='sec5_para3' id='sec5_para3_id'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>

        <div className="counter">
          <ScrollTrigger onEnter={()=> setonscroll(true)} onExit={()=> setonscroll(false)}>
          <div className="sec5_counter" id='c1'>
            {onscroll &&<CountUp start={0} end={30} duration={5} delay={0}/>}
          </div>
          </ScrollTrigger>

          <div className="sec5_counter" id='c2'>
            <p className="counter_para">Years</p>
            <p className="counter_para">Working</p>
            <p className="counter_para">Experience</p>
          </div>

        </div>

        <button className='sec5_button'>Read More</button>
      </div>

    </section>
    <br />
    <br />
    <br />
    <br />
    <br />

    <section className="section7">
      <div className="sec7_box" data-aos="fade-up">
        <div className="sec7_subox1">
          <p className='p1'>WHY CHOOSE US !</p>
          <p className='p2'>Why You Should Trust Us ?</p>
          <p className='p3'>Learn More About Us !</p>
          <p className='p4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        </div>

        <div className="sec7_subox2">
          <div className="choose_box">
            <div className="choose_subox1" id='choose_img1'></div>
            <div className="choose_subox2">
              <p className="choose_p1">Design Approach</p>
              <p className="choose_p2">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            </div>
          </div>
          <div className="choose_box">
            <div className="choose_subox1" id='choose_img2'></div>
            <div className="choose_subox2">
              <p className="choose_p1">Innovative Solutions</p>
              <p className="choose_p2">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            </div>
          </div>
          <div className="choose_box">
            <div className="choose_subox1" id='choose_img3'></div>
            <div className="choose_subox2">
              <p className="choose_p1">Project Management</p>
              <p className="choose_p2">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="sec7_box" id='sec7_box2'>
        <div className="sec7_box2_box">
          <div className="sec7_box2_box1" data-aos="zoom-in"></div>
          <div className="sec7_box2_box2" data-aos="zoom-in"></div>
        </div>
      </div>
    </section>

    <section className="section9">
      <div className="sec6_div1">
         <p id='sec6_div1_p1' data-aos="fade-up">TEAM MEMBERS</p>
         <p data-aos="fade-up">We Are Creative Architecture Team</p>
         <p data-aos="fade-up">For Your Dream Home</p>
      </div>      

      <div className="sec9_div2">
        <div className="sec9_box" id="sec9_box1" data-aos="fade-up">
          <div className="sec9_subox" id='sec9_subox1'></div>
          <div className="sec9_subox2">
            <p className='sec9_p1'>Alysa Healy</p>
            <p className='sec9_p2'>Senior Architect</p>
          </div>
        </div>
        <div className="sec9_box" id="sec9_box2" data-aos="fade-up">
          <div className="sec9_subox" id='sec9_subox2'></div>
          <div className="sec9_subox2">
            <p className='sec9_p1'>Tim David</p>
            <p className='sec9_p2'>Interior Designer</p>
          </div>
        </div>
        <div className="sec9_box" id="sec9_box3" data-aos="fade-up">
          <div className="sec9_subox" id='sec9_subox3'></div>
          <div className="sec9_subox2">
            <p className='sec9_p1'>James Anderson</p>
            <p className='sec9_p2'>Architect Manager</p>
          </div>
        </div>
        <div className="sec9_box" id="sec9_box4" data-aos="fade-up">
          <div className="sec9_subox" id='sec9_subox4'></div>
          <div className="sec9_subox2">
            <p className='sec9_p1'>Holland</p>
            <p className='sec9_p2'>Junior Architect</p>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}
