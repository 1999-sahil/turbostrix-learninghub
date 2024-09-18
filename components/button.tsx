'use client'

import Link from 'next/link'
import React from 'react'

interface CustomButtonProps {
    href: string;
    text: string;
    textOnHover: string;
    borderOnHover: string;
    textOnHoverDark: string;
    borderOnHoverDark: string;
    icon: React.ReactNode;
}

function CustomButton({
    href,
    text,
    textOnHover,
    borderOnHover,
    textOnHoverDark,
    borderOnHoverDark,
    icon
}: CustomButtonProps) {
  return (
    <Link href={href} className='w-full lg:w-[20%] flex items-center justify-center'>
        <button
        className={`
          flex items-center justify-center whitespace-nowrap w-[60%] lg:w-full gap-2 px-3.5 py-2.5 md:px-4 md:py-3 xl:px-5 xl:py-2.5 text-xs lg:text-base font-poppins font-bold rounded-full transition duration-500
          text-[rgba(60,60,67,0.78)] dark:text-[rgba(235,235,245,0.6)]
          border border-[rgba(60,60,67,0.78)] dark:border-[rgba(235,235,245,0.6)]
        `}
        style={{
          '--hover-text-color': textOnHover,
          '--hover-border-color': borderOnHover,
          '--hover-text-color-dark': textOnHoverDark,
          '--hover-border-color-dark': borderOnHoverDark,
        } as React.CSSProperties}
        onMouseEnter={(e) => {
          // Set hover styles on mouse enter
          e.currentTarget.style.setProperty('color', textOnHover);
          e.currentTarget.style.setProperty('border-color', borderOnHover);
        }}
        onMouseLeave={(e) => {
          // Reset to original styles on mouse leave
          e.currentTarget.style.removeProperty('color');
          e.currentTarget.style.removeProperty('border-color');
        }}
      >
        {icon}
        {text}
      </button>
    </Link>
  )
}

export default CustomButton
//px-3.5 py-1.5 lg:px-5 lg:py-3 text-xs lg:text-base