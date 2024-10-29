import React, { type FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { Testimonial } from '../../model/testimonial'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import TestimonialCard from './TestimonialCard'

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      wrapperClass="pb-10 h-auto items-stretch"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id} className="px-1 !h-auto">
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default TestimonialCarousel
