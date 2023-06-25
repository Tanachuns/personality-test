import React from 'react'


export default function Home(props) {
  return (
    <>
    <div className='box col-lg-6 col-sm-12'>
        <h1>Welcome to the Personality Test!</h1>
        <p>Discover the power within and unravel the magic of your unique personality. </p>
        <p>    Start the test and let your personality shine!</p>
    <div class="button-container">
      <button class="btn" onClick={()=>props.next()}>Start Test</button>
    </div>
    </div>
    </>
  )
}
