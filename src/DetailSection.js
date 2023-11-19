import React from 'react'
import UpperSection from './UpperSection'
import "./App.css";
import MidSection from './MidSection';
import TestimonialSection from './TestimonialSection';


function DetailSection() {
  return (
    <>
        <div className="detail-section">
          <UpperSection/>
          <MidSection/>
          <TestimonialSection/>
        </div>
    </>
  )
}

export default DetailSection