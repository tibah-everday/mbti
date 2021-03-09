import React, {useState, useEffect} from 'react'
import './App.css';
import Main from './components/Main'
import Questions from './components/Questions'
import Result from './components/Result'


function App() {
  
  const [counter, setCounter] = useState([
    {name: "mouse", value:0, key:0},
    {name: "cow", value:0, key:1},
    {name: "tiger", value:0, key:2},
    {name: "rabbit", value:0, key:3},
    {name: "dragon", value:0, key:4},
    {name: "snake", value:0, key:5},
    {name: "horse", value:0, key:6},
    {name: "sheep", value:0, key:7},
    {name: "monkey", value:0, key:8},
    {name: "chick", value:0, key:9},
    {name: "dog", value:0, key:10},
    {name: "pig", value:0, key:11},
])
  const [main, setMain] = useState(true);
  const [questions, setQuestions] = useState(false);
  const [result, setResult] = useState(false);
  // console.log(main, questions, result);
  function startTest(){
    setMain(false);
    setQuestions(true);    
  }
  function showResult(){
    setQuestions(false);
    setResult(true);
  }
  function handleCounter(newArray){
    setCounter(newArray);
  }
  useEffect(()=>{
    console.log(main,questions,result);
  })
  return (
    <div className="App">
      {main&&<Main handleStart={startTest}/>}
      {questions&&<Questions handleResult={showResult} counter={counter} handleCounter={handleCounter}/>}
      {result&&<Result counter={counter}/>}
    </div>
  );
}

export default App;
