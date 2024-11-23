"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState("")
  const navLinks = [
    {
      id: "overview",
      title: "Overview",
    },
   {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "media",
      title: "Media"
    }

  ];

  // the navigation goes to part of the screen where the component's wrapper id is equal to nav link id

  return (
    <div className='p-8 w-full fixed flex items-center justify-between py-8 top-0 z-20 bg-[#050408] m-0'>
         <Link href={'/'} className='flex items-center gap-2' >
          <img src={'/logo.png'} alt='logo' className='w-15 h-14 object-fit'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Jayia Reid <span className='sm: 
          block'> | Full Stack Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id}
            className={`${active === link.title ? "text-white" : "text-primary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Nav