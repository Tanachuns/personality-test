import React from 'react'

export default function Result(props) {
  let text;
  switch (props.result) {
    case 'Extrovert':
      text = "You're a social superhero, spreading positivity and making connections wherever you go! You thrive in the spotlight, love adventures, and have an infectious energy. Your optimism inspires others, and you're always ready for new experiences and meeting people."

      break;
    case 'Introvert':
      text = "You're a thoughtful wizard, diving deep into your inner world. Peaceful moments recharge you, and you value close-knit friendships. Your empathy and listening skills shine, and you offer meaningful insights. Your optimism comes through in your ability to understand others and offer valuable perspectives."
      
      break;
    case 'Ambivert':
      text = "Ambiverts are the versatile chameleons of personality. They have the best of both worlds, balancing introverted and extroverted traits. Ambiverts adapt easily, enjoy socializing, and value alone time. They are great listeners and communicators, empathetic and observant. Ambiverts bring a balanced energy to social settings and can thrive in different environments. Embrace your ambivert nature and enjoy the ability to connect with a wide range of people while valuing personal time for reflection. You're a social chameleon, navigating the world with adaptability and harmony."

      break;
    default:
      text = ""
      break;
  }
  return (
    <>
    <div className='box col-lg-6 col-sm-12'>
        <h1 className={'mb-4 '}>You're an <span className={props.result.toLowerCase()}>{props.result}</span></h1>
        <div className="row">
        <p className={props.result.toLowerCase()}>{text}</p>
        </div>
    </div>
    </>
  )
}
