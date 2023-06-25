import React from 'react'

export default function Test(props) {
  
  return (
    <>
    <div className='box col-lg-6 col-sm-12'>
        <h1 className='mb-4'>Understand Your Personality.</h1>
        <div className="row">
          <div className="col-lg-6 col-sm-12 extrovert my-3">
            <p>
            <u><b>Extroversion</b></u>:
            You're a social superhero, spreading positivity and making connections wherever you go! You thrive in the spotlight, love adventures, and have an infectious energy. Your optimism inspires others, and you're always ready for new experiences and meeting people.           
            </p>
          </div>

            <div className="col-lg-6 col-sm-12 introvert my-3">
            <p>
            <u><b>Introversion</b></u>:
            You're a thoughtful wizard, diving deep into your inner world. Peaceful moments recharge you, and you value close-knit friendships. Your empathy and listening skills shine, and you offer meaningful insights. Your optimism comes through in your ability to understand others and offer valuable perspectives.
            </p>
            </div>
          </div>
          <div style={{textIndent:"2em"}} className="row">
              <p>Whether extroverted or introverted, your optimism can light up the world. Embrace your social superpowers or reflective magic, and let your true self shine as you navigate life!</p>
          </div>
          <div class="button-container">
            <button class="btn" onClick={()=>props.next()}>Understand</button>
        </div>
    </div>
    </>
  )
}
