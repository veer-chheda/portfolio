import React, { useEffect } from 'react';
import gsap from 'gsap';
import './head.css'
import Spline from '@splinetool/react-spline';

const HiAnimation = () => {
  useEffect(() => {
    const handleMouseMove = (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
      });

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      });
    };
    document.body.addEventListener("mousemove", handleMouseMove);

})


    return (
      <div className='veer2'>
        <div className="cursor" ></div>
        <div className='col'>
        <div className="shapes">
          <div className="shape shape-1" ></div>
          <div className="shape shape-2" ></div>
          <div className="shape shape-3"></div>
          <div className='shapes blob1'><Spline scene="https://prod.spline.design/HBT9WGcc6OjNqtz6/scene.splinecode" /></div>
          
          <div className="content">
          
          <h1>hi i am veer</h1>
          
        </div>
        <div className='shapes blob2'><Spline scene="https://prod.spline.design/CpQ4BbBxUkxRhNkY/scene.splinecode" /></div>
        </div>
        
        
      </div>
      </div>
    );
  }

export default HiAnimation;
