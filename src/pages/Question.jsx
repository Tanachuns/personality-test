import React from 'react'

export default function Question(props) {
  const question = props.question.question;
  const choice1 = props.question.choice1;
  const choice2 = props.question.choice2;
  const choice3 = props.question.choice3;

  const clickHandler = (e)=>{
    props.setResult(prev=>parseInt(prev)+parseInt(e.target.value))
    props.next()
  
  }
  return (
    <>
    <div className='box col-lg-6 col-sm-12'>
        <span class="dot">
          1
        </span>
        <div className="row text-center">
        <h1>{question}</h1>

          <div className='my-5 '>
          <div class="form-check ">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id={choice1} value={2} onClick={e=>clickHandler(e)}/>
          <label class="form-check-label extrovert w-100 h-100" for={choice1}>{choice1}</label>
        </div>
        <div class="form-check ">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id={choice2} value={3} onClick={e=>clickHandler(e)}/>
          <label class="form-check-label introvert w-100 h-100" for={choice2}>{choice2}</label>
        </div>
        <div class="form-check ">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id={choice3} value={1} onClick={e=>clickHandler(e)}/>
          <label class="form-check-label ambivert w-100 h-100" for={choice3}>{choice3}</label>
        </div>
          </div>
        </div>
    </div>
    </>
  )
}
