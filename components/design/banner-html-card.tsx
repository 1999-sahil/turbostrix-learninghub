import React from 'react'
import { FaChevronDown, FaHtml5 } from 'react-icons/fa'

function BannerHtmlCard() {
  return (
    <div className='w-[300px] h-[140px] bg-zinc-200 dark:bg-[#28282b] px-3 rounded-[6px] shadow-xl drop-shadow-xl'>
        <div className='flex items-center justify-between py-2'>
            <div className='flex items-center gap-2'>
                <span className='text-base text-zinc-500 dark:text-zinc-500'><FaHtml5 /></span>
                <span className='text-sm font-poppins font-semibold text-zinc-800 dark:text-zinc-300'>HTML</span>
            </div>
            <span className='text-base text-zinc-500 dark:text-zinc-500'><FaChevronDown /></span>
        </div>
        <div>
            <code className='text-xs'>
            <span className='text-yellow-700 dark:text-yellow-500'>{"<div "}</span>
            <span className='text-orange-600'>{"class="}</span>
            <span className='text-emerald-600 dark:text-emerald-400'>{`"turbostrix"`}</span>
            <span className='text-yellow-700 dark:text-yellow-500'>{"></div>"}</span>
            </code>
        </div>
    </div>
  )
}

export default BannerHtmlCard