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
      <button className="button" onClick={
        ()=> setMorning(true)
      }>
        Day
      </button>

      <button className="button" onClick={
        ()=> setMorning(false)
      }>
        Night
      </button>

      <button className="button" onClick={
        ()=> setMorning(!isMorning)
      }>
        Toggle
      </button>
      <hr />
      
      <Message counter={count}/>
      

      <button className="button" onClick={
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

      <button className="button" onClick={
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

      <button className="button" onClick={
        ()=> setCount(0)
      }>
        Reset Counter
      </button>
    </div>
  );
}
