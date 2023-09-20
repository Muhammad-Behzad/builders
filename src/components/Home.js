import React, { useState } from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar'
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Home() {

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);

  // --------------------------------------------------->

  // On Scroll Animation

  const [onscroll, setonscroll] = useState(false);

  // -------------------------->

  const change = ()=>{
    document.getElementById('box1_id').style.backgroundImage = "url(project-lg-1.jpg)";
  }

  const change2 = ()=>{
    document.getElementById('box1_id').style.backgroundImage = "url(project-lg-2.jpg)";
  }

  const change3 = ()=>{
    document.getElementById('box1_id').style.backgroundImage = "url(project-lg-3.jpg)";
  }

  const change4 = ()=>{
    document.getElementById('box1_id').style.backgroundImage = "url(project-lg-4.jpg)";
  }

  // ------------------------------------------------------------------------------------->

  const [color, changecolor] = useState({
    backgroundColor: "rgb(228, 226, 226)"
  })

  const buttons1 = ()=>{
    if(color.color === "black" || color.backgroundColor === "rgb(228, 226, 226)"){
      changecolor({
        backgroundColor: "#B78D65",
        color: "white"
      })  
    }
    else{
      changecolor({
        backgroundColor: "rgb(228, 226, 226)",
        color: "black"
      })
    }
  }

  const [color2, changecolor2] = useState({
    backgroundColor: "rgb(228, 226, 227)"
  })

  const buttons2 = ()=>{
    if(color2.color === "black" || color2.backgroundColor === "rgb(228, 226, 227)"){
      changecolor2({
        backgroundColor: "#B78D65",
        color: "white"
      })  
    }
    else{
      changecolor2({
        backgroundColor: "rgb(228, 226, 227)",
        color: "black"
      })
    }
  }

  const [color3, changecolor3] = useState({
    backgroundColor: "rgb(228, 226, 228)"
  })

  const buttons3 = ()=>{
    if(color3.color === "black" || color3.backgroundColor === "rgb(228, 226, 228)"){
      changecolor3({
        backgroundColor: "#B78D65",
        color: "white"
      })  
    }
    else{
      changecolor3({
        backgroundColor: "rgb(228, 226, 228)",
        color: "black"
      })
    }
  }

  const [color4, changecolor4] = useState({
    backgroundColor: "rgb(228, 226, 229)"
  })

  const buttons4 = ()=>{
    if(color4.color === "black" || color4.backgroundColor === "rgb(228, 226, 229)"){
      changecolor4({
        backgroundColor: "#B78D65",
        color: "white"
      })  
    }
    else{
      changecolor4({
        backgroundColor: "rgb(228, 226, 229)",
        color: "black"
      })
    }
  }



  return (
    <>
    <Navbar/>

    <section className="section3">
      <div className="sec3_para_div">
        <p className="sec3_para1" data-aos="fade-down">Best Architecture And</p>
        <p className="sec3_para1" id='sec3_para' data-aos="fade-down">Interior Design Services</p>
        <p className="sec3_para2">We have Best Architecture Designs and Best Services And Ready To Design Your Interior And Architecture Designs.</p>
        <div className="sec3_btn">
           <button data-aos="fade-down">Read More</button>
        </div>
      </div>
    </section>

    <section className="section4">

      <div className="sec4_box" data-aos="fade-up">
        <div className="sec4_icons">
          <div id='icon_1'></div>
        </div>
        <p className='icon_heading'>Design Approach</p>
        <p className='sec4-para2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorem natus perferendis eveniet earum illum maxime</p>
      </div>

      <div className="sec4_box" data-aos="fade-up">
        <div className="sec4_icons">
          <div id='icon_2'></div>
        </div>
        <p className='icon_heading'>Innovative Solutions</p>
        <p className='sec4-para2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorem natus perferendis eveniet earum illum maxime</p>
      </div>

      <div className="sec4_box" data-aos="fade-up">
        <div className="sec4_icons">
          <div id='icon_3'></div>
        </div>
        <p className='icon_heading'>Project Management</p>
        <p className='sec4-para2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolorem natus perferendis eveniet earum illum maxime</p>
      </div>      
      
    </section>

    <section className="section5">
      <div className="sec5_box" id='sec5_box1'>
        <div className="about_border">
          <div className="about_img1" data-aos="zoom-in"></div>
          <div className="about_img2" data-aos="zoom-in"></div>

        </div>
      </div>

      <div className="sec5_box" id='sec5_box2'>
        <p className='sec5_para1' data-aos="fade-up">ABOUT US</p>
        <p className='sec5_para2' data-aos="fade-up">A Creative Architecture Agency</p>
        <p className='sec5_para2' id='sec5_para2_id' data-aos="fade-up">For Your Dream Home</p>
        <p className='sec5_para3' data-aos="fade-up">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

        <p className='sec5_para3' id='sec5_para3_id' data-aos="fade-up">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>

        <div className="counter" data-aos="fade-up">
          <ScrollTrigger onEnter={()=> setonscroll(true)} onExit={()=> setonscroll(false)}>
          <div className="sec5_counter" id='c1'>
            {onscroll &&<CountUp start={0} end={30} duration={5} delay={0}/>}
          </div>
          </ScrollTrigger>

          <div className="sec5_counter" id='c2' data-aos="fade-up">
            <p className="counter_para">Years</p>
            <p className="counter_para">Working</p>
            <p className="counter_para">Experience</p>
          </div>

        </div>

        <button className='sec5_button'>Read More</button>
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

    <section className="section8">
      <div className="sec6_div1">
        <p id='sec6_div1_p1' data-aos="fade-up">OUR PROJECTS</p>
        <p data-aos="fade-up">Visit Our Latest Projects And Our</p>
        <p data-aos="fade-up">Innovative Works</p>
      </div>

      <div className="sec8_div2" data-aos="fade-up">

        <div className="div2_box" id='div2_box1'>
          <div className="btn1" id='btnn1'>
          <button id='button1' style={color} onClick={() => {
            change() 
            buttons1()}} 
          >01. Modern Complex</button>
          </div>

          <div className="btn1" id='btnn2'>
          <button  id='button2' style={color2} onClick={() =>{
            change2() 
            buttons2()}}
            >02. Royal Hotel</button>  
          </div>

          <div className="btn1" id='btnn3'>
          <button  id='button3' style={color3} onClick={() =>{
            change3() 
            buttons3()}}
          >03. Mexwel Buiding</button>
          </div>

          <div className="btn1" id='btnn4'>
          <button  id='button4' style={color4} onClick={() =>{
            change4() 
            buttons4()}}
          >04. Shopping Complex</button>
          </div>
        </div>

        <div className="div2_box" id='div2_box2' data-aos="fade-up">
          <div className="div2_box1" id='box1_id'></div>
          <div className="div2_box2" id=''>
            <p id='div2_box2_p1'>25 Years Of Experience</p>
            <p id='div2_box2_p2'>In Architecture Industry</p>
            <p id='div2_box2_p3'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p id='div2_box2_p4'><span className='span1'>||</span> Design Approach</p>
            <p id='div2_box2_p4'><span className='span1'>||</span> Inovative Solutions</p>
            <p id='div2_box2_p4'><span className='span1'>||</span> Project Management</p>
            
            <button>Read More</button>

          </div>
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

    <section className="section11">
      <div className="sec6_div1">
         <p id='sec6_div1_p1' data-aos="fade-up">LATEST BLOG</p>
         <p data-aos="fade-up">Latest Architecture Articles From</p>
         <p data-aos="fade-up">Our Blog Post</p>
      </div>

      <div className="sec11_div2">
        <div className="sec11_box" data-aos="fade-up">
          <div className="sec11_subox" id="sec11_suboxx1"></div>
          <div className="sec11_subox2">
            <p className='sec11_p1'>01 -Jan, 2023 / ADMIN</p>
            <p className='sec11_p2'>We have 25 years experience in</p>
            <p className='sec11_p2'>artitecture industry</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="sec11_box" data-aos="fade-up">
          <div className="sec11_subox" id="sec11_suboxx2"></div>
          <div className="sec11_subox2">
            <p className='sec11_p1'>01 -Jan, 2023 / ADMIN</p>
            <p className='sec11_p2'>We have 25 years experience in</p>
            <p className='sec11_p2'>artitecture industry</p>
            <button>Read More</button>
          </div>
        </div>
        <div className="sec11_box" data-aos="fade-up">
          <div className="sec11_subox" id="sec11_suboxx3"></div>
          <div className="sec11_subox2">
            <p className='sec11_p1'>01 -Jan, 2023 / ADMIN</p>
            <p className='sec11_p2'>We have 25 years experience in</p>
            <p className='sec11_p2'>artitecture industry</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}
