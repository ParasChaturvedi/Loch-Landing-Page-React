import React from 'react';
import vector from "./Vector.png"
import TestimonialCards from './TestimonialCards';

function TestimonialSection() {
  return (
    <>
        <div id="testimonial-section">
            <h1 className='testimonial-heading'>Testimonials</h1>
            <div className='line'></div>
            <div className="testimonial">
                <div className="vector">
                    <img src={vector} alt="" />
                </div>
                <div className="test">

                <TestimonialCards/>
                </div>
               

               
                </div>
            </div>
    </>
  )
}

export default TestimonialSection