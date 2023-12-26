import React from 'react'
import Image from 'next/image';

const SkillCard = ({ title, src, description }) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl m-6">
  <figure className='rounded-lg'>
    <Image src={src} alt="images" width={257} height={220} className='overflow-hidden'/>
  </figure>
  <div className="card-body flex flex-col justify-center items-center p-4">
    <h2 className="card-title text-2xl font-semibold mb-4 text-slate-200 text-center">{title}</h2>
    <p className='text-slate-400 text-center'>{description}</p>
  </div>
</div>

  )
}

export default SkillCard
