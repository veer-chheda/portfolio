import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const w = 500;
  const h = 400;

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const loader = document.querySelector('.loader--text');

    const updateProgress = (instance) => {
      loader.textContent = `${Math.round((instance.progressedCount * 100) / images.length)}%`;
    };

    gsap.fromTo(
      '.text-wrapper1',
      { xPercent: 100 }, // Initial position (from right)
      {
        xPercent: -200, // Final position (to left)
        ease: 'none',
        scrollTrigger: {
          trigger: '.demo-wrapper',
          start: 'top 120%',
          end: 'bottom bottom',
          scrub: 3,
        },
      }
    );

      // Animate each text wrapper individually
      gsap.fromTo(
        '.text-wrapper2',
        { xPercent: -100 },
        {
          xPercent: 200,
          ease: 'none',
          scrollTrigger: {
            trigger: '.demo-wrapper', // Use the corresponding gallery item as a trigger
            start: 'top 50%',
            end: 'bottom bottom',
            scrub: 1, // Adjust the scrub value for slower animation
          },
        }
      );
      
      gsap.fromTo(
        '.text-wrapper3',
        { xPercent: 200 },
        {
          xPercent: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: '.demo-wrapper',
            start: 'top 10%',
            end: 'bottom bottom',
            scrub: 0.5, // Adjust the scrub value for slower animation
          },
        }
      );
      
      gsap.fromTo(
        '.text-wrapper4',
        { xPercent: -200 },
        {
          xPercent: 200,
          ease: 'none',
          scrollTrigger: {
            trigger: '.text-wrapper',
            start: 'top 10%',
            end: 'bottom 50%',
            scrub: 0.0001, // Adjust the scrub value for slower animation
          },
        }
      );
    const showDemo = () => {
      document.body.style.overflow = 'auto';
    
      // Animate each photo and text wrapper individually
      gsap.fromTo(
        '.gallery-item1',
        { xPercent: -40 },
        {
          xPercent: 140,
          scrollTrigger: {
            trigger: '.gallery-item1', // Use the corresponding gallery item as a trigger
            start: 'top 50%',
            end: 'bottom',
            scrub: 0.1,
          },
        }
      );
    
      gsap.fromTo(
        '.gallery-item2',
        { xPercent: -40 },
        {
          xPercent: 140,
          scrollTrigger: {
            trigger: '.gallery-item2',
            start: 'top 50%',
            end: 'bottom',
            scrub: 0.1,
          },
        }
      );
    
      gsap.fromTo(
        '.gallery-item3',
        { xPercent: -40 },
        {
          xPercent: 140,
          scrollTrigger: {
            trigger: '.gallery-item3',
            start: 'top 50%',
            end: 'bottom',
            scrub: 0.5,
          },
        }
      );
    
      gsap.fromTo(
        '.gallery-item4',
        { xPercent: -40 },
        {
          xPercent: 180,
          scrollTrigger: {
            trigger: '.gallery-item4',
            start: 'top 50%',
            scrub: 1,
          },
        }
      );
    

      }      
    
    imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);

    return () => {
      // Clean up if necessary
    };
  }, []);

  return (
    <>
      <div className="loader df aic jcc">
        <div>
          <h1></h1>
          <h2 className="loader--text">0%</h2>
        </div>
      </div>
      <div className="demo-wrapper">
        <header className="df aic jcc">

        </header>
        <section className="demo-text" style={{ overflowX: 'hidden' }}>
          <div className="text-wrapper1"><h1>i am a cse undergrad</h1></div>
        </section>
        <section className="demo-gallery">
          <div className="gallery-row">
              <div className="gallery-item1">
                <img className='photo1' src={photo1} alt="photo1" />
              </div>
              <section className="demo-text" style={{ overflowX: 'hidden' }}>
          <div className="text-wrapper2"><h1>i do competitive programming,</h1></div>
        </section>
              <div className="gallery-item2">
                <img className='photo2' src={photo2} alt="photo1" />
              </div>
              <section className="demo-text" style={{ overflowX: 'hidden' }}>
          <div className="text-wrapper3"><h1>ml and fullstack development</h1></div>
        </section>
              <div className="gallery-item3">
                <img className='photo3' src={photo3} alt="photo1" />
              </div>
          </div>
        </section>
        <section className="demo-text" style={{ overflowX: 'hidden' }}>
          <div className="text-wrapper5"><h1>scroll to see my projects</h1></div>
        </section>
        <div className='extra'></div>
      </div>
    </>
  );
};

export default About;
