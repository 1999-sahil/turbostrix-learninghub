import Image from 'next/image'
import React from 'react'

function TSCodeMain() {
  return (
    <div className='bg-black absolute w-[90%] h-[90%] rounded-tr-[24px] bottom-0 left-0'>
      <Image
        src="/code-ide/ide-asset.png"
        alt='editor-image'
        fill
        className='object-cover rounded-tr-[24px]'
      />
    </div>
  )
}

export default TSCodeMain