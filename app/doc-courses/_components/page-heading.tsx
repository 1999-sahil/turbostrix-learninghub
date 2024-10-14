import React from 'react'

interface PageHeadingProps {
    title: string;
}

function PageHeading({ title }: PageHeadingProps) {
  return (
    <div className='px-4 lg:px-8'>
        <h2 className='font-poppins text-2xl font-bold text-zinc-700 dark:text-zinc-200'>{title}</h2>
    </div>
  )
}

export default PageHeading