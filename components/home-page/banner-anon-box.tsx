import React from 'react'

import BannerHtmlCard from '../design/banner-html-card'
import BannerCssCard from '../design/banner-css-card'
import BannerJsCard from '../design/banner-js-card'

function BannerAnonBox() {
  return (
    <div className='relative'>
        <div className='w-[460px] h-[424px] rounded-[24px] drop-shadow-xl shadow-xl bg-gradient-to-r from-slate-300 to-slate-400 dark:bg-gradient-to-r dark:from-gray-600 dark:to-gray-800'>
        </div>
        <div className='absolute -top-4 right-4'>
            <BannerHtmlCard />
        </div>
        <div className='absolute top-[140px] -right-6'>
            <BannerCssCard />
        </div>
        <div className='absolute top-[300px] right-8'>
            <BannerJsCard />
        </div>
      </div>
  )
}

export default BannerAnonBox