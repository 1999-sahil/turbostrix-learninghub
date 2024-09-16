import { homeFeatures } from '@/constant/features'
import Image from 'next/image'
import React from 'react'

function Features() {
  return (
    <div className='max-w-[1152px] w-full flex items-center justify-center'>
        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {homeFeatures.map((feature, index) =>(
                    <article key={index} className='bg-[#f6f6f7] dark:bg-[#202127] rounded-[12px] p-[24px] flex flex-col gap-4'>
                        <div className='bg-[rgba(142,150,170,0.14)] dark:bg-[rgba(101,117,133,0.16)] w-fit p-2 rounded-[6px]'>
                            <Image src={feature.icon} alt={feature.title} width={38} height={38} />
                        </div>
                        <h2 className='text-[16px] font-poppins font-medium text-zinc-800 dark:text-zinc-300'>{feature.title}</h2>
                        <p className='text-[14px] font-openSans font-medium text-zinc-500 dark:text-zinc-300/65'>{feature.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features