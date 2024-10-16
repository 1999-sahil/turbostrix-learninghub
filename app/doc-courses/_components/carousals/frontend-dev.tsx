import React from 'react'
import ExploreButton from '../explore-button'
import DocsCard from '../docs-card'
import {
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel'
import { foundation } from '@/constant/docs-card'
import SectionTitle from '../section-title'

function FrontendDevDoc() {
  return (
    <div className='flex flex-col gap-4 lg:gap-6'>
      <div className='flex items-center justify-between'>
        <SectionTitle title="Frontend Development" />
        <ExploreButton linkSrc='/doc-courses/frontend-dev' />
      </div>

      {/* ************* */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {foundation.map((card, index) => (
            <CarouselItem key={index} className="basis-3/2 xl:basis-[29%]">
              <div className="">
                <DocsCard
                  serialNumber={card.serialNumber}
                  title={card.title}
                  chapters={card.chapters}
                  courseType={card.courseType}
                  description={card.description}
                  imageSrc={card.imageSrc}
                  redirectLink={card.redirectLink}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='max-lg:hidden' />
        <CarouselNext className='max-lg:hidden' />
      </Carousel>
    </div>
  )
}

export default FrontendDevDoc