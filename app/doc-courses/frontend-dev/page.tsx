import React from 'react'
import BackToPage from '../_components/back-to-page'
import PageHeading from '../_components/page-heading'
import { foundation } from '@/constant/docs-card'
import ExploredCard from '../_components/explored-card'

function FrontendDev() {
  return (
    <div className='flex flex-col gap-5 border-l-2 border-r-2 border-zinc-300 dark:border-black px-8 py-5'>
      <BackToPage href="/doc-courses/" />
      <PageHeading title="Build Your Foundation" />
      
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {foundation.map((data, index) => (
          <div key={index}>
            <ExploredCard
              serialNumber={data.serialNumber}
              title={data.title}
              imageSrc={data.imageSrc}
              chapters={data.chapters}
              courseType={data.courseType}
              description={data.description}
              redirectLink={data.redirectLink}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FrontendDev