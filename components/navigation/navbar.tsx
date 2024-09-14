'use client';

import React from 'react'
import Link from 'next/link'

import { navigationLinks } from '@/constant/navigation'
import NavLogo from './navigation-logo'
import { ModeToggle } from '../mode-toggle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiNotionFill } from 'react-icons/ri'
import { CgMenuRight } from 'react-icons/cg';

function Navbar() {

  return (
    <div className='w-full h-16 flex items-center justify-between px-8'>
      <NavLogo />

      <div className='hidden md:flex items-center'>
        {/** navigation links */}
        <div className='flex gap-4 border-r pr-4 dark:border-zinc-700'>
          {navigationLinks.map((link, index) => (
            <div
              key={index}
              className='text-base font-poppins font-medium text-[#333] dark:text-zinc-300 hover:text-[#5645ee] dark:hover:text-[#5645ee]'
            >
              <Link href={link.href}>
                <h2>{link.title}</h2>
              </Link>
            </div>
          ))}
        </div>

        <div className='px-4'>
          <ModeToggle />
        </div>

        {/** social links */}
        <div className='flex items-center gap-6 border-l pl-4 dark:border-zinc-700'>
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

      {/** Mobile Navigation */}
      <div>
        <CgMenuRight />
      </div>
    </div>
  )
}

export default Navbar
