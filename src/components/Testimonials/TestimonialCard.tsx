import React, { type FC } from 'react'
import type { Testimonial } from '../../model/testimonial'

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article className="border p-6 rounded-md h-full">
      <header>
        <img
          src={testimonial.profileImg}
          alt={testimonial.fullName}
          width={100}
          height={100}
          loading="lazy"
          className="w-36 h-36 rounded-full"
        />
      </header>
      <div className="mt-4">
        <h4 className="text-2xl text-primary font-semibold">
          {testimonial.fullName}
        </h4>
        <p className="mt-2">{testimonial.comment}</p>
      </div>
    </article>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default TestimonialCard
