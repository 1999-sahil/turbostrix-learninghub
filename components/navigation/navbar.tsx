'use client';

import React, { useState } from 'react'
import Link from 'next/link'

import { navigationLinks } from '@/constant/navigation'
import NavLogo from './navigation-logo'
import { ModeToggle } from '../mode-toggle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiNotionFill } from 'react-icons/ri'
import { CgMenuRight } from 'react-icons/cg';
import { X } from 'lucide-react';
import MobileNavigation from './mobile-navigation';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className='w-full h-16 flex items-center justify-between border-b border-zinc-300 dark:border-black px-5 md:px-8'>
      <NavLogo />

      <div className='flex items-center'>
        {/** navigation links */}
        <div className='hidden lg:flex gap-6 border-r pr-4 dark:border-zinc-700'>
          {navigationLinks.map((link, index) => (
            <div
              key={index}
              className='text-sm font-poppins font-medium text-[#333] dark:text-zinc-300 hover:text-[#5645ee] dark:hover:text-[#8274fb]'
            >
              <Link href={link.href}>
                <h2>{link.title}</h2>
              </Link>
            </div>
          ))}
        </div>

        <div className='hidden lg:flex px-4'>
          <ModeToggle />
        </div>

        {/** social links */}
        <div className='hidden lg:flex items-center gap-6 border-l pl-4 dark:border-zinc-700'>
          <Link href="" className='text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'>
            <FaGithub className='text-2xl' />
          </Link>
          <Link href="" className='text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'>
            <FaLinkedin className='text-2xl' />
          </Link>
          <Link href="" className='text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'>
            <RiNotionFill className='text-2xl' />
          </Link>
        </div>
      </div>

      {/** mobile-mode */}
      <div className="lg:hidden flex items-center justify-center ">
        <div onClick={toggleMenu} className="cursor-pointer">
          <CgMenuRight className='text-2xl' />
        </div>
      </div>

      {/** mobile navigation */}
      {open && (
        <div className="fixed z-50 left-0 top-0 w-full h-screen origin-top bg-white dark:bg-[#18181b]">
          <div className='flex items-center justify-between border-b border-zinc-300 dark:border-zinc-700 px-5 py-5 mb-12'>
            <NavLogo />
            <div onClick={toggleMenu} className="cursor-pointer">
              <X className='' />
            </div>
          </div>

          {/** map through mobile nav links */}
          <div className='flex flex-col gap-3 h-full items-center'>
            {navigationLinks.map((link, index) => (
              <div key={index} className='border-b border-zinc-300 dark:border-zinc-700 w-[60%] py-2'>
                <MobileNavigation title={link.title} href={link.href} />
              </div>
            ))}
            <div className='flex items-center justify-between rounded-xl px-2 py-4 bg-zinc-200 dark:bg-zinc-800 w-[60%] my-8'>
              <h2 className='text-sm font-poppins font-medium text-zinc-900 dark:text-zinc-200'>Apprearance</h2>
              <ModeToggle />
            </div>
            <div className='flex items-center gap-6 dark:border-zinc-700'>
              <Link href="" className='text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'>
                <FaGithub className='text-2xl' />
              </Link>
              <Link href="" className='text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'>
                <FaLinkedin className='text-2xl' />
              </Link>
              <Link href="" className='text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'>
                <RiNotionFill className='text-2xl' />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
