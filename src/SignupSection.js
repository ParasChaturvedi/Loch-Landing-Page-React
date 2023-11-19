import React,{useState} from 'react';

function SignupSection() {

  const[email,setEmail]=useState('')
  const[message,setMessage]=useState('')

  const handleChange=(e)=>{
    setEmail(e.target.value)
  }

  const checkValidation=()=>{
    const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2-6}$/
    if(rgExp.test(email)){
      setMessage('Your Email is not valid')
    }
    else if(email===""){
      setMessage('Please enter a email')
    }
    else if(!rgExp.test(email)){
      setMessage('Your Email is valid')
    }
    else{
      setMessage('')
    }
  }
  
  return (
   <>
    <div className="signup-section">
          <div className="signup">
            <h1 className="primary-heading">Sign up for exclusive access.</h1>
            <form action="https://app.loch.one/welcome" onSubmit={checkValidation}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address" value={email} onChange={handleChange}
            />
            <button type="submit" className="submit-btn">Get Started</button>
            </form>
            <span className='email-message'>{message}</span>
            
            <span className="receive-notification">
              You'll receive an email with an invite link to join.
            </span>
          </div>
        </div>
   </>
  )
}

export default SignupSection