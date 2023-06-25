
import './Global.css';
import React from 'react';

import Home from './pages/Home';
import Test from './pages/Test'
import Question1 from './pages/Question1';
import Result from './pages/Result';
import Helper from './pages/Helper';

function App() {
  const [page,setPage] = React.useState(0)
  const next = () =>{
    setPage(prev=>prev+1)
  }
  const [result,setResult] =React.useState("")
  const pages = [
  <Home next={next}/>,
  <Test next={next}/>,
  <Question1 next={next} setResult={setResult}/>,
  <Helper next={next}/>,
  <Result result={result}/>
]
  console.log(page);
  return (
   <main className='main row'>
      {pages[page]}
   </main>
  );
}

export default App;
