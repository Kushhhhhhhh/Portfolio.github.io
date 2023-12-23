'use client'
import React from "react"
import Link from 'next/link'

const Navbar = () => {

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = 'https://ibb.co/FWqP2mV';
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
        <li><Link href="/about">About</Link></li>
        <li><Link href="/project">Project</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Kush Sharma</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/project">Project</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/contact">Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn" onClick={handleClick}>Download CV</a>
  </div>
</div>
    </main>
  )
}

export default Navbar
