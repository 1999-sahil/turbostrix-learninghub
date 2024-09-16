import React from 'react'

import BannerHtmlCard from '../design/banner-html-card'
import BannerCssCard from '../design/banner-css-card'
import BannerJsCard from '../design/banner-js-card'

function BannerAnonBox() {
  return (
    <div className='relative min-h-[350px] w-full flex items-center justify-center xl:justify-end'>
        <div className='absolute w-full h-[320px] xl:w-[460px] xl:h-[424px] rounded-[24px] drop-shadow-xl shadow-xl bg-gradient-to-r from-slate-100 via-gray-300 to-slate-300/80 dark:bg-gradient-to-r dark:from-[#222831] dark:via-gray-[#393e46] dark:to-gray-800/60'>
        </div>
        <div className='absolute top-2 left-2 xl:-top-12 xl:left-[38%]'>
            <BannerHtmlCard />
        </div>
        <div className='absolute right-3 xl:-right-8'>
            <BannerCssCard />
        </div>
        <div className='absolute bottom-0 left-6 xl:left-[32%] xl:-bottom-14'>
            <BannerJsCard />
        </div>
      </div>
  )
}

export default BannerAnonBox

/**
 * -top-4 right-4
 * top-[140px] -right-6
 * top-[300px] right-8
 */