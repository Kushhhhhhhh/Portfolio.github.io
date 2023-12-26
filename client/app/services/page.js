import React from 'react'
import SkillCard from '../components/SkillCard'

const data =[
  {title: 'HTML', src: '/html.jpg', description: "It's a markup language used to structure content on the web."},
  {title: 'CSS', src: '/css.jpg', description: ' It plays a crucial role in making websites visually appealing and responsive across different devices.'},
  {title: 'JavaScript', src: '/javascript.jpg', description: 'JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.'},
  {title: 'React', src: '/react.jpg', description: ' React, A JavaScript library for building user interfaces is widely used for creating single-page applications.'},
  {title: 'Next JS', src: '/nextjs.jpg', description: 'Next.js is a React framework for building server-side rendered (SSR) and statically generated web applications. '},
];

const Services = () => {
  return (
    <main className="w-full min-h-screen font-bold bg-slate-800 p-4 md:p-8 lg:p-12 xl:p-16 flex flex-wrap justify-center items-center">
  <p className='text-slate-200 text-4xl w-full text-center mb-8'>Web Technologies</p>
  <div className="flex flex-wrap justify-center">
    {data.map((item) => (
      <div key={item.title} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <SkillCard title={item.title} src={item.src} description={item.description}/>
      </div>
    ))}
  </div>
</main>

  )
}

export default Services
