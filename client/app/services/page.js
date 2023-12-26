import React from 'react'
import SkillCard from '../components/SkillCard'

const data =[
  {title: 'JavaScript', src: '/javascript.jpg', description: ' From handling user inputs to asynchronous operations, my expertise ensures smooth and engaging user experiences.'},
  {title: 'React', src: '/react.jpg', description: "I've honed my skills in creating reusable components, managing state efficiently, and optimizing performance."},
  {title: 'Next JS', src: '/nextjs.jpg', description: 'I incorporate Next.js to supercharge my React applications. Server-side rendering and seamless routing are part of my arsenal to enhance performance and provide a faster, more fluid user experience.'},
];

const Services = () => {
  return (
    <main className="w-full min-h-screen font-bold bg-slate-800 p-4 md:p-8 lg:p-12 xl:p-16 flex flex-wrap justify-center items-center">
  <p className='text-slate-200 text-4xl w-full text-center mb-8'>Web Technologies</p>
  <div className="w-full flex flex-wrap justify-center">
    {data.map((item) => (
      <div key={item.title} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <SkillCard title={item.title} src={item.src} description={item.description}/>
      </div>
    ))}
  </div>
</main>




  )
}

export default Services
