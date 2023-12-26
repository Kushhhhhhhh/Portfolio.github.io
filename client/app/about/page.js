'use client'
import React from 'react'

const About = () => {
  return (
    <main className='w-full min-h-screen bg-slate-800'>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mt-4 mb-10">
      <time className="font-mono italic">2022</time>
      <div className="text-lg font-black text-slate-300"> Completed my High School</div>
      In high school, I made a distinctive choice by opting for the humanities stream, despite the unconventional academic path, my passion for computer science remained unwavering. Beyond the realms of textbooks and exams, I found joy in unraveling the mysteries of coding, algorithms, and technology.
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2022-2025</time>
      <div className="text-lg font-black">Started pursuing Bachelor's Degree</div>
      Embarking on my college journey in 2022, Initially drawn to the basics of computer applications, I soon stumbled upon the captivating realm of web development. I enthusiastically delved into the intricacies of HTML, CSS, and JavaScript. The process of crafting and bringing websites to life became more than just a skill acquisition; it evolved into a genuine passion.
    </div>
    <hr />
  </li>
</ul>
<div className="max-w-screen-lg mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-center">Self Evaluation</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Personal Growth</h3>
        <p className="text-slate-600">
          Reflecting on my experiences and seeking opportunities for growth in various aspects of life.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Adaptability</h3>
        <p className="text-slate-600">
          Quickly adjusting to new environments, technologies, and roles to stay effective and productive.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Continuous Learning</h3>
        <p className="text-slate-600">
          Actively seeking and absorbing knowledge to stay updated with industry trends and improve skills.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Team Collaboration</h3>
        <p className="text-slate-600">
          Working effectively with diverse teams, valuing different perspectives, and contributing to collective success.
        </p>
      </div>
    </div>
  </div>
  </main>
  )
}

export default About
