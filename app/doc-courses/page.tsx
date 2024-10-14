import React from 'react'
import FoundationDoc from './_components/carousals/foundation'
import DataStructuresDoc from './_components/carousals/data-structures'
import AlgorithmsDoc from './_components/carousals/algorithms'
import FrontendDevDoc from './_components/carousals/frontend-dev'
import BackendDevDoc from './_components/carousals/backend-dev'
import DBMSDoc from './_components/carousals/dbms'
import APIDoc from './_components/carousals/api'
import Interview from './_components/carousals/interview'

function DocCourses() {
  return (
    <div className='flex flex-col gap-12 lg:gap-16 pb-16 border-l-2 border-r-2 border-zinc-300 dark:border-black px-4 md:px-8 lg:px-16 pt-5'>
      <div className='flex flex-col gap-1 lg:px-16'>
        <h2 className='text-xs lg:text-sm font-poppins font-semibold text-gray-400 dark:text-zinc-400'>Welcome to</h2>
        <h2 className='text-xl lg:text-2xl font-raleway font-black text-gray-700 dark:text-zinc-200'>TurboStrix Docs</h2>
      </div>

      <div className='bg-gray-50 dark:bg-zinc-800/20 p-4 lg:py-8 lg:px-16 rounded-[12px]'>
        <FoundationDoc />
      </div>
      <div className='bg-gray-50 dark:bg-zinc-800/20 p-4 lg:py-8 lg:px-16 rounded-[12px]'>
        <DataStructuresDoc />
      </div>
      <div className='bg-gray-50 dark:bg-zinc-800/20 p-4 lg:py-8 lg:px-16 rounded-[12px]'>
        <AlgorithmsDoc />
      </div>
      <div className='bg-gray-50 dark:bg-zinc-800/20 p-4 lg:py-8 lg:px-16 rounded-[12px]'>
        <FrontendDevDoc />
      </div>
      <div className='bg-gray-50 dark:bg-zinc-800/20 p-4 lg:py-8 lg:px-16 rounded-[12px]'>
        <BackendDevDoc />
      </div>
      <div className='bg-gray-50 dark:bg-zinc-800/20 p-4 lg:py-8 lg:px-16 rounded-[12px]'>
        <DBMSDoc />
      </div>
      <div className='bg-gray-50 dark:bg-zinc-800/20 p-4 lg:py-8 lg:px-16 rounded-[12px]'>
        <APIDoc />
      </div>
      <div className='bg-gray-50 dark:bg-zinc-800/20 p-4 lg:py-8 lg:px-16 rounded-[12px]'>
        <Interview />
      </div>
    </div>
  )
}

export default DocCourses
