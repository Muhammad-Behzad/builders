import React, {useState} from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Project() {

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);

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

  // ------------------------------------------------------------------------->

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

    <section className="web_section">
        <div className="web_box">
            <p>PROJECT</p>
            <ul>
                <li><NavLink to="/">Home / </NavLink></li>
                <li><NavLink to="/services"> / Service /  </NavLink></li>
                <li><NavLink to="/project"> / Project</NavLink></li>
            </ul>
        </div>  
    </section>
    <br/>
    <br/>

    <section className="section8">
      <div className="sec6_div1">
        <p id='sec6_div1_p1' >OUR PROJECTS</p>
        <p>Visit Our Latest Projects And Our</p>
        <p>Innovative Works</p>
      </div>

      <div className="sec8_div2">

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

        <div className="div2_box" id='div2_box2'>
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

    <Footer/>
    </>
  )
}
