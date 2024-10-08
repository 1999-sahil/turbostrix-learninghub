import Image from 'next/image'
import React from 'react'

function DocCards() {
  return (
    <div className='border w-full'>
        <div className='relative bg-red-500'>
            <Image
                src="/ts-content/content-mongodb.svg"
                alt='course-image'
                width={100}
                height={100}
                className=''
            />
            <h2 className='bg-green-500 absolute top-2'>Course Name</h2>
        </div>
        <div>content</div>
    </div>
  )
}

export default DocCards