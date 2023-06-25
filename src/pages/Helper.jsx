import React from 'react'


export default function Helper(props) {
  return (
    <>
    <div className='box col-lg-6 col-sm-12'>
        <h1>You're what you want to be.</h1>
    <div class="button-container">
      <button class="btn" onClick={()=>props.next()}>OK</button>
    </div>
    </div>
    </>
  )
}
