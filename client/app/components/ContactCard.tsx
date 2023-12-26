import React from 'react';
import Image from 'next/image';

const ContactCard = ({ title, src, link }) => {

  const handleClick = () => {
    window.location.href = link;
  };

  return (

    <div className="card w-64 h-[460px] bg-base-100 shadow-xl m-6">
      <figure>
        <Image src={src} alt="images" width={260} height={220} className='overflow-hidden'/>
      </figure>
      <div className="card-body flex justify-center items-center">
        <p className="card-title text-2xl font-semibold m-4 text-slate-200">{title}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral btn-lg hover:font-bold" onClick={handleClick}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;