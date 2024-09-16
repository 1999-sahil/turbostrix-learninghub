import React from 'react'
import { FaChevronDown, FaJsSquare } from 'react-icons/fa'

function BannerJsCard() {
  return (
    <div className='w-[280px] h-[130px] sm:w-[300px] sm:h-[140px] border-t xl:border-none border-zinc-200 dark:border-zinc-900/50 bg-zinc-100 dark:bg-[#28282b] px-3 rounded-[6px] shadow-xl drop-shadow-xl'>
        <div className='flex items-center justify-between py-2'>
            <div className='flex items-center gap-2'>
                <span className='text-base text-zinc-500 dark:text-zinc-500'><FaJsSquare /></span>
                <span className='text-sm font-poppins font-semibold text-zinc-800 dark:text-zinc-300'>JS</span>
            </div>
            <span className='text-base text-zinc-500 dark:text-zinc-500'><FaChevronDown /></span>
        </div>
        <div>
            <code className='text-xs'>
                <p>
                    <span className='text-yellow-700 dark:text-yellow-500'>{"var "}</span>
                    <span className='text-blue-700 dark:text-blue-400'>{"colors "}</span>
                    <span>=</span>
                </p>
                <p>
                    <span>{"["}</span>
                    <span className='text-emerald-600 dark:text-emerald-400'>{`"#74B087"`}</span>
                    <span>,</span>
                    <span className='text-emerald-600 dark:text-emerald-400'>{`"#DE7489"`}</span>
                    <span>,</span>
                    <span className='text-emerald-600 dark:text-emerald-400'>{`"#1E1E1E"`}</span>
                    <span>{"];"}</span>
                </p>
                <br />
                <p>
                    <span className='text-yellow-700 dark:text-yellow-500'>function</span>
                    <span className='text-blue-700 dark:text-blue-400'>{" turboStrix"}</span>
                    <span>{"()"}</span>
                    <span>{" {};"}</span>
                </p>
            </code>
        </div>
    </div>
  )
}

export default BannerJsCard