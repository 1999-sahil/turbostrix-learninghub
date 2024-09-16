import React from 'react'
import BannerAnonBox from './banner-anon-box'
import BannerMain from './banner-main'

function Banner() {
  return (
    <div className='flex flex-col-reverse xl:flex-row gap-12 xl:gap-0 items-center overflow-hidden px-5 xl:px-10 py-3 xl:py-10'>

      {/** homepage main section */}
      <div className='w-full xl:w-1/2 flex items-center justify-center xl:justify-start'>
        <BannerMain />
      </div>

      {/** homepage image section */}
      <div className='w-full xl:w-1/2 flex items-center xl:justify-end'>
        <BannerAnonBox />
      </div>
    </div>
  )
}

export default Banner