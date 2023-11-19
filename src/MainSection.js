import React from 'react'
import DetailSection from './DetailSection'
import SignupSection from './SignupSection'
import "./App.css";


function MainSection() {
  return (
    <>
        <div id="main-section">
        <DetailSection/>
        <SignupSection/>
      </div>
    </>
  )
}

export default MainSection