
import './Global.css';
import React from 'react';

import Home from './pages/Home';
import Test from './pages/Test'
import Question from './pages/Question';
import Result from './pages/Result';
import Helper from './pages/Helper';
import questions from './question'

function App() {
  
 
  const [page,setPage] = React.useState(0)
  const next = () =>{
    setPage(prev=>prev+1)
  }
  const [result,setResult] =React.useState(0)
  const pages = [
  <Home next={next}/>,
  <Test next={next}/>,
  <Question next={next} setResult={setResult} page={page-1} question={questions[0]}/>,
  <Question next={next} setResult={setResult} page={page-1} question={questions[1]}/>,
  <Question next={next} setResult={setResult} page={page-1} question={questions[2]}/>,
  <Question next={next} setResult={setResult} page={page-1} question={questions[3]}/>,
  <Question next={next} setResult={setResult} page={page-1} question={questions[4]}/>,
  <Question next={next} setResult={setResult} page={page-1} question={questions[5]}/>,
  <Question next={next} setResult={setResult} page={page-1} question={questions[6]}/>,
 // <Helper next={next}/>,
  <Result result={result}/>
]
  return (
   <main className='main row'>
      {pages[page]}
   </main>
  );
}

export default App;
