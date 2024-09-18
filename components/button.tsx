import Link from 'next/link'
import React from 'react'

interface CustomButtonProps {
    href: string;
    text: string;
    textOnHover: string;
    borderOnHover: string;
    textOnHoverDark: string;
    borderOnHoverDark: string;
}

function CustomButton({
    href,
    text,
    textOnHover,
    borderOnHover,
    textOnHoverDark,
    borderOnHoverDark
}: CustomButtonProps) {
  return (
    <Link href={href}>
        <button className=''>
            {text}
        </button>
    </Link>
  )
}

export default CustomButton