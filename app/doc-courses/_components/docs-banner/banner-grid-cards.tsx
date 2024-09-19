import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

function BannerGridCards() {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-5 lg:gap-6 xl:gap-8'>
        {/** left grid */}
        <div className='w-full lg:w-[40%] flex flex-row lg:flex-col gap-5 lg:gap-6 xl:gap-8'>
            <div className='w-[60%] lg:w-full rounded-[20px] flex items-center justify-center bannerGridCardsBg'>
                <div className='bg-black'>
                    <Image
                      src='/brain.svg'
                      alt='brain'
                      width={150}
                      height={100}
                    />
                </div>
            </div>
            <div className='w-[40%] lg:w-full flex flex-col lg:flex-row gap-5 lg:gap-6 xl:gap-8'>
                <div className='w-full flex flex-col items-center justify-center bg-zinc-200 dark:bg-zinc-300 rounded-[20px] p-4 lg:p-6 xl:p-10'>
                    <h2 className='font-semibold font-poppins text-xl text-center text-black'>50+</h2>
                    <span className='font-medium font-openSans text-lg text-black'>Courses</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center bg-black rounded-[20px] p-4 lg:p-6 xl:p-10'>
                    <h2 className='font-semibold font-poppins text-xl text-center text-white'>10k</h2>
                    <span className='font-medium font-openSans text-lg text-white'>Learners</span>
                </div>
            </div>
        </div>

        {/** right card */}
        <div className='w-full lg:w-[60%] bg-[#b3abfe] dark:bg-[#5645ee] rounded-[20px] p-4 lg:p-6 xl:p-10'>
            <div className='flex flex-col gap-4 lg:gap-6 xl:gap-8'>
                <div className='flex text-[10px] lg:text-xs gap-2 font-poppins'>
                    <h2 className='border border-black rounded-full px-2 py-1 lg:px-4 lg:py-2 text-white bg-black'>
                        Personalized learning
                    </h2>
                    <h2 className='border border-black rounded-full px-2 py-1 lg:px-4 lg:py-2 text-black'>
                        Online education
                    </h2>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl lg:text-3xl xl:text-4xl pb-2 font-poppins font-semibold text-black'>Flexible Docs</h1>
                    <div className='w-full flex justify-between'>
                      <p className='w-3/4 border-t pt-2 xl:pt-4 text-xs lg:text-sm font-ubuntu font-medium text-black border-black'>
                        Our simplified docs adapts to your needs and provides
                        a tailored curriculum that helps you succeed.
                      </p>
                      <span className='w-1/4 flex items-end justify-end'>
                        <MdArrowOutward className='text-4xl xl:text-6xl text-black' />
                      </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerGridCards