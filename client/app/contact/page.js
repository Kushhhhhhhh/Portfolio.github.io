'use client'
import React from 'react';
import ContactCard from '../components/ContactCard';

const data = [
  { title: 'Email', src: '/Email.jpg', link: 'mailto:kush.73888@gmail.com' },
  { title: 'LinkedIn', src: '/Linkedin.jpg', link: 'https://www.linkedin.com/in/kushSharma738' },
  { title: 'Github', src: '/Github.jpg', link: 'https://github.com/kushhhhhhhh' },
  { title: 'Instagram', src: '/Instagram.jpg', link: 'https://www.instagram.com/kushhhhhhh._/?hl=en' },
];

const Contact = () => {
  return (
    <main className='w-full min-h-screen font-bold bg-slate-800 p-4 md:p-8 lg:p-12 xl:p-16 flex flex-wrap justify-center'>
  {data.map((item) => (
        <ContactCard key={item.title} title={item.title} src={item.src} link={item.link} />
      ))}
</main>

  );
};

export default Contact;

