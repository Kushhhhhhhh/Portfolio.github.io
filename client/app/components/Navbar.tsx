'use client'
import React from "react"
import Link from 'next/link'

const Navbar = () => {

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = 'https://i.ibb.co/qnFZK75/CV.jpg';
    link.download = 'CV.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  return (
    <main>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu flex items-center font-semibold menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52">
      <li className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/about">About</Link></li>
        <li  className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/skills">Skills</Link></li>
        <li  className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/projects">Projects</Link></li>
        <li  className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl" href="/">Kush Sharma</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/about">About</Link></li>
        <li  className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/skills">Skills</Link></li>
        <li  className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/projects">Projects</Link></li>
        <li  className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/contact">Contact</Link></li>
       </ul>
      </div>
       <div className="navbar-end gap-3">
         <button className="btn border-slate-900" onClick={handleClick}>Download CV</button>
        </div>
      </div>
    </main>
  )
}

export default Navbar
