import React from 'react'

interface PageHeadingProps {
    title: string;
}

function PageHeading({ title }: PageHeadingProps) {
  return (
    <div>
        <h2 className='font-poppins text-2xl font-bold text-zinc-700 dark:text-zinc-200'>{title}</h2>
    </div>
  )
}

export default PageHeading