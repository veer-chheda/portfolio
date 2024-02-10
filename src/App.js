import { useEffect } from 'react';
import './App.css';
import gsap from 'gsap'
import HiAnimation from './components/HiAnimation';
import Spline from '@splinetool/react-spline';
import About from './components/About';

function App() {

  useEffect(() => {
    let t1 = gsap.timeline();
    t1.from(".veer", {
      opacity: 1,
      x: 10,
      delay: 0.5,
      duration: 1,
      ease: "power1.out",
      yoyo: true,
    });
  
    t1.from(
      ".dot",
      {
        opacity: 0,
        delay: 0.5,
        repeatDelay: 1,
        duration: 1,
        ease: "power1.out",
      },
      0.01
    );
  
    t1.to(".dot", {
      opacity:1,
      x: 20,
      duration: 1,
      ease: "power1.out",
    });
  
    t1.to(".dot", {
      x: 0,
      duration: 0.5,
      ease: "power1.out",
    });

    t1.to(".veer", {
      opacity: 0,
      xPercent: 0,
      duration: 1,
      ease: "power1.out",
      yoyo: true,
    });
  
    t1.to(
      ".dot",
      {
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      },
      3
    );
  
    t1.to(
      ".cover",
      {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
      },
      3
    );

    t1.to(
      ".cover-2",
      {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
      },
      3.2
    );
    
    t1.to(
      ".cover-3",
      {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
      },
      3.4
    );
    
    t1.to(
      ".cover-4",
      {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
      },
      3.6
    );
    
  })

  return (
    <div>
    <div className="App">
      <div className='cursor'></div>
          <div className="cover-4"></div>
          <div className="cover-3"></div>
          <div className="cover-2"></div>
    <div className="cover">
      <div className="cover-heading">
        <h1 className="veer">veer</h1>
        <h1 className="dot">.</h1>
      </div>
      
      <div className='veer2'>
      
      </div>
      
    </div>
   
    </div>
    <div className='landing'>
    <div className='hello'>< HiAnimation /></div>
       <div className='blob'>
    <div className='blobber'> <Spline scene="https://prod.spline.design/JUk2jjzKYp-j9zSy/scene.splinecode" /> </div>
       <div className='about'><About/></div>
    </div>

</div>
    


    </div>


  );
}

export default App;
