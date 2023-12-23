'use client'
import { useEffect } from 'react';
import Typed from 'typed.js';
import React from 'react';

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ['Full Stack Developer', 'MERN Stack Developer'],
      typeSpeed: 40,
      backSpeed: 20, 
      backDelay: 1000,
      loop: true, 
    };

    const typed = new Typed('#typed', options);

    return () => {
      typed.destroy(); 
    };
  }, []);

  const handleClick = () => {
    window.location.href = '/contact'; 
  }

  return (
    <main className="w-full min-h-screen bg-gray-800 flex flex-col-reverse md:flex-row items-center md:items-center">
  {/* LEFT (Text) */}
  <div className="md:w-1/2 p-8 text-center md:text-left">
    <div id="typed-strings">
      <h3 className="text-slate-300 text-4xl md:text-5xl lg:text-4xl sm:text-xl font-medium font-serif mb-6">
       Hey, My name is <span className="text-white font-bold">Kush Sharma,</span>
      </h3>
      <h3 className="text-slate-300 text-4xl md:text-5xl lg:text-4xl sm:text-base font-medium font-serif mb-6">
        I'm a <span id="typed" className="text-slate-200"></span>
      </h3>
      <p className="text-[18px] md:text-base">
        The thrill of crafting captivating and interactive webpages fuels my creativity and inspires me to push the boundaries of what's possible. Let's connect and create something amazing together.
      </p>
      <br />
      <button 
      className='btn btn-active btn-lg border-slate-900 hover:font-bold hover:drop-shadow-2xl'
      onClick={handleClick}
      >
        Let's talk!
      </button>
    </div>
  </div>

  {/* RIGHT (Image) */}
  <div className="md:w-1/2 p-8 flex justify-center items-center">
    <img
      src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
      alt="kush-logo"
      className="rounded-2xl"
      width={250}
      height={250}
    />
  </div>
</main>
  );
}

export default Hero
