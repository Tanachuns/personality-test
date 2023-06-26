import React from 'react'

export default function Result(props) {
  /*If you score 12-14: You are likely an introvert.
If you score 15-18: You are likely an ambivert.
If you score 19-21: You are likely an extrovert.*/
  let text,type;
  if(props.result>12&&props.result<=14){
    type="Introvert"
    text = "You're a thoughtful wizard, diving deep into your inner world. Peaceful moments recharge you, and you value close-knit friendships. Your empathy and listening skills shine, and you offer meaningful insights. Your optimism comes through in your ability to understand others and offer valuable perspectives."
  }
  else if(props.result>14&&props.result<=18){
    type="Ambivert"
    text = "Ambiverts are the versatile chameleons of personality. They have the best of both worlds, balancing introverted and extroverted traits. Ambiverts adapt easily, enjoy socializing, and value alone time. They are great listeners and communicators, empathetic and observant. Ambiverts bring a balanced energy to social settings and can thrive in different environments. Embrace your ambivert nature and enjoy the ability to connect with a wide range of people while valuing personal time for reflection. You're a social chameleon, navigating the world with adaptability and harmony."
  }
  else if(props.result>18){
    type="Extrovert"
    text = "You're a social superhero, spreading positivity and making connections wherever you go! You thrive in the spotlight, love adventures, and have an infectious energy. Your optimism inspires others, and you're always ready for new experiences and meeting people."
  }
      

  return (
    <>
    <div className='box col-lg-6 col-sm-12'>
        <h1 className={'mb-4 '}>You're an <span className={type.toLowerCase()}>{type}</span></h1>
        <div className="row">
        <p className={type.toLowerCase()}>{text}</p>
        </div>
    </div>
    </>
  )
}
