import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function TSDocs() {
  return (
    <div className='flex flex-col'>
        <h2 className="mb-8 flex justify-start lg:justify-end font-kanit font-medium text-2xl lg:text-4xl text-zinc-700 dark:text-zinc-300">
          Full-power of learning in form of docs
        </h2>
        <section className='flex flex-col-reverse lg:flex-row gap-12'>
        <div className="w-full lg:w-[30%] flex flex-col justify-center gap-2">
            <h3 className="font-raleway font-semibold text-2xl text-zinc-700 dark:text-zinc-400">
              In Browser DOCS
            </h3>
            <h1 className="text-wrap font-poppins font-semibold text-4xl lg:text-3xl text-zinc-900 dark:text-zinc-200">
              Organized Notes Level Wise
            </h1>
            <p className="mt-4 font-openSans font-medium text-xl text-zinc-700 dark:text-zinc-300 text-balance">
              Practise as you learn with our built-in DOCS. Each lesson is
              designed for easy to understand. All concepts are convered with real-time examples.
            </p>
            <Link href="">
              <button className="flex items-center gap-2 bg-[#5645ee] hover:bg-[#4534dd] rounded-full mt-6 font-poppins font-semibold text-white text-base lg:text-sm px-5 py-2.5">
                <FaArrowRight />
                Try Code IDE
              </button>
            </Link>
          </div>
            <div className='bg-[#f6f6f7] dark:bg-[#202127] w-full lg:w-[70%] h-[400px] lg:h-[600px] relative rounded-[24px]'>
                <div className='absolute bottom-0 right-0 z-10'>
                    <Image
                        src="/code-ide/docs-1.png"
                        alt=''
                        width={380}
                        height={300}
                        className='rounded-tl-[16px] lg:w-[600px] lg:h-[300px]'
                    />
                </div>
                <div className='absolute top-10 lg:top-12 right-0'>
                    <Image
                        src="/code-ide/docs-3.png"
                        alt=''
                        width={320}
                        height={300}
                        className='rounded-tl-[16px] lg:w-[550px] lg:h-[250px]'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default TSDocs