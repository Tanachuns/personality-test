import React from 'react'

export default function Question1(props) {
  const changeHandler = (e)=>{
    props.setResult(e.target.value)
    console.log(e.target.value);
  }
  return (
    <>
    <div className='box col-lg-6 col-sm-12'>
        <span class="dot">
          1
        </span>
        <div className="row text-center">
        <h1>What's your personality?</h1>

          <div className='my-5 '>
          <div class="form-check ">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Extrovert"onChange={e=>changeHandler(e)}/>
          <label class="form-check-label extrovert w-100 h-100" for="inlineRadio1">Extrovert</label>
        </div>
        <div class="form-check ">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Introvert" onChange={e=>changeHandler(e)}/>
          <label class="form-check-label introvert w-100 h-100" for="inlineRadio2">Introvert</label>
        </div>
        <div class="form-check ">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Ambivert" onChange={e=>changeHandler(e)}/>
          <label class="form-check-label ambivert w-100 h-100" for="inlineRadio3">Both (Ambivert)</label>
        </div>
          </div>
                  
          <button class="btn w-25 m-auto" onClick={()=>props.next()}>Submit</button>
        </div>
    </div>
    </>
  )
}
