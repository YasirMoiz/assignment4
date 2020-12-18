import React,{useState} from 'react'
import './App.css';
import Message from './message'

function App() {
  let [count,setcount]=useState(1)
  let[morning,setmorning]=useState(true)
  return (
  <div className={`box ${morning ? 'daylight': '' }`}>
    <h1>It is what morning or night? {morning ? ' morning time' : " night time"}</h1>
    <Message counter={count} />
   <button onClick={()=>{setcount(++count)}}>click here to count</button>
    <button onClick={()=>{setmorning(!morning)}}>chagne time</button>
   </div>
  );
}

export default App;
