import Link from 'next/link'
import React from 'react'

function BannerButtons() {
  return (
    <div className='flex flex-wrap xl:flex-row gap-4 xl:gap-2'>
        
        <Link href=''>
            <button className='bg-[#5645ee] hover:bg-[#4534dd] rounded-full font-poppins font-semibold text-white text-sm px-5 py-2.5'>
                Get Started
            </button>
        </Link>
        <Link href=''>
            <button className='bg-[#ebebef] hover:bg-[#d6d6dc] dark:bg-[#32363f] dark:hover:bg-[#40444f] rounded-full font-poppins font-semibold text-zinc-700 dark:text-white text-sm px-5 py-2.5'>
                View on Github
            </button>
        </Link>
        <Link href=''>
            <button className='bg-[#ebebef] hover:bg-[#d6d6dc] dark:bg-[#32363f] dark:hover:bg-[#40444f] rounded-full font-poppins font-semibold text-zinc-700 dark:text-white text-sm px-5 py-2.5'>
                Why TurboStrix?
            </button>
        </Link>
        <Link href=''>
            <button className='bg-[#5645ee] hover:bg-[#4534dd] rounded-full font-poppins font-semibold text-white text-sm px-5 py-2.5'>
            ⚡️ Docs
            </button>
        </Link>
    </div>
  )
}

export default BannerButtons