import React from 'react'
import BannerAnonBox from './banner-anon-box'
import BannerMain from './banner-main'

function Banner() {
  return (
    <div className='flex items-center overflow-hidden px-24 py-16'>

      {/** homepage main section */}
      <div className='w-1/2 flex items-center justify-start'>
        <BannerMain />
      </div>

      {/** homepage image section */}
      <div className='w-1/2 flex items-center justify-end'>
        <BannerAnonBox />
      </div>
    </div>
  )
}

export default Banner