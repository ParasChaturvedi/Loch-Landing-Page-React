import React from "react";
import testimonialDetails from "./Testimonial.json";

function TestimonialCards() {
  return (
    <>
      <div className="testimonials-cards test-cards">
        {testimonialDetails.map((item, i) => {
          return (
            <div className="testimonial-card test-card" key={i}>
              <div className="header">
                <h1>{item.name}</h1>
                <span>{item.position}</span>
              </div>
              <div className="footer">
                <p>{item.quote}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TestimonialCards;
