import React from 'react'
import BannerButtons from './banner-buttons'

function BannerMain() {
  return (
    <div className='flex flex-col w-full justify-center'>
        {/** gradient text */}
        <h1 className='text-[28px] md:text-[32px] xl:text-[40px] font-semibold font-kanit bg-gradient-to-r from-purple-500 to-indigo-500 inline-block text-transparent bg-clip-text'>
            TurboStrix
        </h1>

        {/** main heading */}
        <p className='text-[32px] md:text-[48px] xl:text-[52px] leading-[36px] md:leading-[52px] xl:leading-[60px] mb-4 mt-2 md:mt-0 flex flex-col font-poppins font-semibold text-[#333] dark:text-zinc-300'>
            <span>Empowering Coders:</span>
            <span>The New Dimesion of Learning</span>
        </p>

        {/** subheading */}
        <p className='text-sm xl:text-lg font-raleway font-semibold text-zinc-600 dark:text-zinc-400'>
            <span>
                Unlocking <strong>Potential</strong>, <strong>Igniting Curiosity</strong>, Explore our <strong>Comprehensive</strong>, <strong>Interactive </strong>learning platform.
                The best place to build, test, learn and discover code.
            </span>
        </p>

        {/** button if any */}
        <div className='mt-8 xl:mt-10'>
            <BannerButtons />
        </div>
    </div>
  )
}

export default BannerMain