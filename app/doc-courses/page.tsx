import React from 'react'
//import DocsBanner from './_components/docs-banner/docs-banner'
import CoursesCard from './_components/courses/courses-card'

function DocCourses() {
  return (
    <div className='flex flex-col space-y-8 border-l-2 border-r-2 border-zinc-300 dark:border-black px-2 lg:px-8 py-5'>
      {/*<DocsBanner />*/}
      <CoursesCard />
    </div>
  )
}

export default DocCourses
