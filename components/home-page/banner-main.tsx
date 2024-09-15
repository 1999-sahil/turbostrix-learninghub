import React from 'react'
import BannerButtons from './banner-buttons'

function BannerMain() {
  return (
    <div className='flex flex-col w-full max-w-[592px]'>
        {/** gradient text */}
        <h1 className='text-[40px] font-semibold font-kanit bg-gradient-to-r from-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text'>
            TurboStrix
        </h1>

        {/** main heading */}
        <p className='text-[52px] mb-4 flex flex-col font-poppins font-semibold text-[#333] dark:text-zinc-300 leading-[60px]'>
            <span>Empowering Coders:</span>
            <span>The New Dimesion of Learning</span>
        </p>

        {/** subheading */}
        <p className='text-lg font-raleway font-semibold text-zinc-600 dark:text-zinc-400'>
            <span>
                Unlocking <strong>Potential</strong>, <strong>Igniting Curiosity</strong>, Explore our <strong>Comprehensive</strong>, <strong>Interactive </strong>learning platform.
                The best place to build, test, learn and discover code.
            </span>
        </p>

        {/** button if any */}
        <div className='mt-10'>
            <BannerButtons />
        </div>
    </div>
  )
}

export default BannerMain