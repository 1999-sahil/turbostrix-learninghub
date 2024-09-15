import React from 'react'
import { FaChevronDown, FaCss3Alt } from 'react-icons/fa'
import { RxDividerVertical } from 'react-icons/rx'

function BannerCssCard() {
  return (
    <div className='w-[300px] h-[140px] bg-zinc-200 dark:bg-[#28282b] px-3 rounded-[6px] shadow-xl drop-shadow-xl'>
        <div className='flex items-center justify-between py-2'>
            <div className='flex items-center gap-2'>
                <span className='text-base text-zinc-500 dark:text-zinc-500'><FaCss3Alt /></span>
                <span className='text-sm font-poppins font-semibold text-zinc-800 dark:text-zinc-300'>CSS</span>
            </div>
            <span className='text-base text-zinc-500 dark:text-zinc-500'><FaChevronDown /></span>
        </div>
        <div>
            <code className='text-xs w-full'>
                <p>
                    <span className='text-orange-600 dark:text-orange-500'>.turbostrix</span>
                    <span>{" {"}</span>
                </p>
                <p>
                    <span className='text-purple-500 pl-6'>{"background"}</span>
                    <span>:</span>
                    <span className='text-yellow-700 dark:text-yellow-500'>{" linear-gradient"}</span>
                    <span>{"("}</span>
                </p>
                <p>
                    <span className='text-emerald-600 dark:text-emerald-400 pl-8'>-119deg</span>
                    <span>,</span>
                </p>
                <p>
                    <span className='text-yellow-700 dark:text-yellow-500 pl-8'>$gray</span>
                    <span className='text-emerald-600 dark:text-emerald-400'>{" 0%"}</span>
                    <span>,</span>
                </p>
                <p>
                    <span className='text-yellow-700 dark:text-yellow-500 pl-8'>$dark-gray</span>
                    <span className='text-emerald-600 dark:text-emerald-400'>{" 100%"}</span>
                    <span>{"); }"}</span>
                    <span className='pl-6 animate-ping ease-in-out duration-350'>
                        <RxDividerVertical className='text-lg' />
                    </span>
                </p>
            </code>
        </div>
    </div>
  )
}

export default BannerCssCard