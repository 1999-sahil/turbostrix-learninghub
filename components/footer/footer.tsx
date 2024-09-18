import React from 'react'
import NavLogo from '../navigation/navigation-logo'
import { navigationLinks } from '@/constant/navigation'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex items-center justify-between px-16 py-6">
      {/** left section (app details) */}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-3 text-sm'>
          <h2 className='font-poppins bg-[#4534dd] px-1 font-semibold rounded text-white'>TurboStrix</h2>
          <div className='flex gap-2 font-openSans'>
            {navigationLinks.map((link, index) => (
              <Link key={index} href={link.href}>{link.title}</Link>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-3 text-sm'>
          <h2 className='font-poppins bg-[#4534dd] px-1 font-semibold rounded text-white'>For</h2>
          <div className='flex gap-2 font-openSans'>
            <span>Teams</span>
            <span>Education</span>
            <span>Privacy</span>
          </div>
        </div>

        <div className='flex items-center gap-3 text-sm'>
          <h2 className='font-poppins bg-[#4534dd] px-1 font-semibold rounded text-white'>Social</h2>
          <div className='flex gap-2 font-openSans'>
            <Link href=''>Github</Link>
            <Link href=''>Linkedin</Link>
            <Link href=''>Notion</Link>
          </div>
        </div>
      </div>

      {/** right section (app name) */}
      <div className='flex flex-col'>
        <div className='mb-2'>
          <NavLogo />
        </div>
        <h2 className='text-xs font-openSans font-medium'>@2024 TurboStrix</h2>
        <span className='flex items-center gap-1 text-xs font-openSans font-medium'>
          Build with
          <svg fill="#FFD700" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 width="20px" height="20px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
<path d="M67.607,13.462c-7.009,0-13.433,3.238-17.607,8.674c-4.174-5.437-10.598-8.674-17.61-8.674
	c-12.266,0-22.283,10.013-22.33,22.32c-0.046,13.245,6.359,21.054,11.507,27.331l1.104,1.349
	c6.095,7.515,24.992,21.013,25.792,21.584c0.458,0.328,1,0.492,1.538,0.492c0.539,0,1.08-0.165,1.539-0.492
	c0.8-0.571,19.697-14.069,25.792-21.584l1.103-1.349c5.147-6.277,11.553-14.086,11.507-27.331
	C89.894,23.475,79.876,13.462,67.607,13.462z"/>
          </svg>
          by <strong>Sahil Ahmed</strong>
        </span>
        <span className='flex items-center gap-1 text-xs font-openSans font-medium'>
          Terms of Service | Privacy Policy  
        </span>
      </div>
    </div>
  )
}

export default Footer