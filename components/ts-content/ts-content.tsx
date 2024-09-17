import React from 'react'
import DataStructures from './data-structures'
import Reactjs from './react-js'
import Algorithms from './algorithms'

function TSContent() {
  return (
    <div className='w-full flex flex-col gap-8'>
        {/** Section Heading */}
        <div className='flex items-center justify-center mb-10'>
            <h2 className='flex flex-col lg:flex-row lg:gap-1 items-center justify-center font-openSans'>
                <span className='text-base lg:text-xl font-bold text-zinc-800 dark:text-white'>What&apos;s in TurboStrix? </span>
                <span className='text-sm lg:text-base font-normal text-zinc-700 dark:text-zinc-300'>Everything you need to become a developer</span>
            </h2>
        </div>

        {/** tech sections */}
        <div className='flex flex-col gap-1'>
            {/** data structures */}
            <section>
                <DataStructures />
            </section>

            {/** react.js */}
            <section>
                <Reactjs />
            </section>

            {/** algorithm */}
            <section>
                <Algorithms />
            </section>

            {/** backend/api */}
            <section>backend-api</section>
        </div>
    </div>
  )
}

export default TSContent
