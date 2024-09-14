import Link from 'next/link';
import React from 'react'

interface MobileNavigationProps {
    title: string;
    href: string;
}

function MobileNavigation({ title, href }: MobileNavigationProps) {
  return (
    <div>
        <Link href={href} className='font-kanit text-lg text-[#333] dark:text-zinc-300 hover:text-[#5645ee] dark:hover:text-[#5645ee]'>
            <h2>{title}</h2>
        </Link>
    </div>
  )
}

export default MobileNavigation