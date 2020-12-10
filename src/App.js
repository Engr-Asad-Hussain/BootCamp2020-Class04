import React, {useState} from 'react'; 
// React is default export from react
// useState is just export from react
import {Message} from './message';
import './App.css';

export default function App() {
  let [count, setCount] = useState(0); 
  // useState will return an array.
  // value will save in count
  let [isMorning, setMorning] = useState();

  return (
    <div className={`box ${isMorning ? 'dayColor' : 'nightColor'}`}>
      <h2>Today's Whether is : {isMorning ? 'Day' : 'Night'}</h2>
      <button onClick={
        ()=> setMorning(!isMorning)
      }>
        Uptade Whether
      </button>
      <hr />
      
      <Message counter={count}/>
      
      <span>
        <button onClick={
          ()=> {
            if (count < 10) {
              setCount(++count);
            } else {
              alert("Danger: You are getting out of Range !\nYou need to Decrement");
            }
          }
        }>
            Increment Counter
        </button>

        <button onClick={
          ()=> {
            if (count > -10) {
              setCount(--count);
            } else {
              alert("Danger: You are getting out of Range !\nYou need to Increment");
            }
          }
        }>
          Decrement Counter
        </button>

        <button onClick={
          ()=> setCount(0)
        }>
          Reset Counter
        </button>
      </span>
    </div>
  );
}
