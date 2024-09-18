import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import TSCodeMain from './ts-code-main'
import { GoDotFill } from 'react-icons/go'

function TSCodeIde() {
  return (
    <div className="flex flex-col">
        <h2 className="mb-8 font-kanit font-medium text-2xl lg:text-4xl w-fit text-zinc-700 dark:text-zinc-300">
          Get Started in seconds
        </h2>
        <section className="flex flex-col lg:flex-row gap-12">
          {/** code ide image */}
          <div className="w-full lg:w-[70%] h-[400px] lg:h-[600px] relative bg-[#f6f6f7] dark:bg-[#202127] rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px]">
            <div className="flex items-center pt-6 pl-4">
              <GoDotFill className="text-green-600" />
              <GoDotFill className="text-yellow-500" />
              <GoDotFill className="text-red-500" />
            </div>
            <TSCodeMain />
          </div>

          {/** text contaienr */}
          <div className="w-full lg:w-[30%] flex flex-col justify-center gap-2">
            <h3 className="font-raleway font-semibold text-2xl text-zinc-700 dark:text-zinc-400">
              In Browser IDE
            </h3>
            <h1 className="text-wrap font-poppins font-semibold text-4xl lg:text-3xl text-zinc-900 dark:text-zinc-200">
              Hands-on Learning Experience
            </h1>
            <p className="mt-4 font-openSans font-medium text-xl text-zinc-700 dark:text-zinc-300 text-balance">
              Practise as you learn with our built-in IDE. Each lesson is
              designed to be followed by a coding to apply the concepts and gain
              immediate feedback.
            </p>
            <Link href="">
              <button className="flex items-center gap-2 bg-[#5645ee] hover:bg-[#4534dd] rounded-full mt-6 font-poppins font-semibold text-white text-base lg:text-sm px-5 py-2.5">
                <FaArrowRight />
                Try Code IDE
              </button>
            </Link>
          </div>
        </section>
    </div>
  )
}

export default TSCodeIde