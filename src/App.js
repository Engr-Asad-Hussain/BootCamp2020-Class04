import React, {useState} from 'react'; 
// React is default export from react
// useState is just export from react
import {Message} from './message';
import './App.css';

export default function App() {
  let [count, setCount] = useState(5); 
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
      
      <Message counter={count}/>
      <button onClick={
        ()=> setCount(++count)
        }>
          Counter Update
      </button>
    </div>
  );
}

/* 
1. Button will run on onClick event. There maybe named or anonymous function.
2. () => {} This is an anonymous function because () represents
and there is no name of a funtion.
3. Example onClick={
    ()=> alert("Button is Pressed")
  }
4. Example onClick={
    ()=> setCount(4)
  }
5. Example onClick={
    ()=> setCount(count+1)
  }
6. On refresh all the varaibles are set to inital value. It means that 
useState is not persistant. And whenever you are using react, 
react is a SPA (single page application),  we donot refresh the complete 
page, the VDOM of react will refresh only that component which has changed. 
We called it as a sin in react.

7. "class" is a keyword used in normal CSS but in react we use "className"
    and in App.css file we declare using .box{}
*/ 
