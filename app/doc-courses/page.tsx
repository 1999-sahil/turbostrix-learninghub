import React from 'react'
import FoundationDoc from './_components/carousals/foundation'
import DataStructuresDoc from './_components/carousals/data-structures'
import AlgorithmsDoc from './_components/carousals/algorithms'
import FrontendDevDoc from './_components/carousals/frontend-dev'
import BackendDevDoc from './_components/carousals/backend-dev'
import DBMSDoc from './_components/carousals/dbms'
import APIDoc from './_components/carousals/api'

function DocCourses() {
  return (
    <div className='flex flex-col gap-20 border-l-2 border-r-2 border-zinc-300 dark:border-black px-4 md:px-8 lg:px-16 py-5'>
      <div className='flex flex-col gap-1'>
        <h2 className='text-xs lg:text-sm font-poppins font-semibold text-gray-400 dark:text-zinc-400'>Welcome to</h2>
        <h2 className='text-xl lg:text-2xl font-raleway font-black text-gray-700 dark:text-zinc-200'>TurboStrix Docs</h2>
      </div>

      <FoundationDoc />
      <DataStructuresDoc />
      <AlgorithmsDoc />
      <FrontendDevDoc />
      <BackendDevDoc />
      <DBMSDoc />
      <APIDoc />
    </div>
  )
}

export default DocCourses
