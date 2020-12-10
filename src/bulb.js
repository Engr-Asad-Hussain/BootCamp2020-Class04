import React, {useState} from 'react';
import bulbOn from './bulbOn.jpeg';
import bulbOff from './bulbOff.jpeg';
import './App.css';

export function LightBulb() {
    let [isTemp, setTemp] = useState(0);
    let [isLit, setLit] = useState(true);
    
    return(
        <div>
            <h1>Lightning Bulb</h1>
            <h2>Temperature</h2>
            <input className="checkBox" type="checkbox" onClick={
                ()=> setLit(!isLit)
            } />
            <label>{isLit ? 'ON' : 'OFF'}</label>
                
            <img src={isLit ? bulbOn : bulbOff} alt="Logo" />
            <p>Temperature of Room Right Now is {isTemp}<br/></p>
            <label>
                Decrease
                <button className="button incrementButton" onClick={
                    ()=> {
                        setTemp(++isTemp)
                    }
                }>
                    +
                </button>
            </label>

            <label>
                <button className="button decrementButton" onClick={
                    ()=> {
                        setTemp(--isTemp)
                    }
                }>
                    -
                </button>
                Increase
            </label>
        </div>
    )
}
