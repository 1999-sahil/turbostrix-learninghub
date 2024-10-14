import React from 'react'

interface SectionTitleProps {
    title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className=''>
      <h2 className='text-base md:text-lg lg:text-xl font-poppins font-bold text-[#333] dark:text-zinc-200'>
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle