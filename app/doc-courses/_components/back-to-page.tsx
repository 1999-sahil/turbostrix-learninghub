import Link from 'next/link'
import React from 'react'
import { FaCaretLeft } from 'react-icons/fa'

interface BackToPageProp {
  href: string;
}

function BackToPage({ href }: BackToPageProp) {
  return (
    <Link href={href} className='w-fit flex items-center gap-1 text-zinc-400 dark:text-zinc-500 hover:text-[#5645ee] dark:hover:text-[#5645ee] font-openSans font-medium text-sm'>
        <FaCaretLeft />
        <h2>Back to Explore</h2>
    </Link>
  )
}

export default BackToPage