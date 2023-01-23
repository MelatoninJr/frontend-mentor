import "./App.css";
import React, { useState } from 'react';
import Desktop1 from "./assets/bg-main-desktop.png";
import Desktop2 from './assets/bg-main-mobile.png'
import CardFront from './assets/bg-card-front.png'
import CardBack from './assets/bg-card-back.png'
import CardLogo from './assets/card-logo.svg'
function App() {

  const submission = (e) => {
    setNumber(1)
  }
  const [number, setNumber] = useState(0)

  return (
    <div className="home-container">
      <div className="container-1">
        <div className="card-container">
          
        </div>
          <div className="front-card">
            <span className="card-number">1234 5678 9999 0000</span>
            <span className="card-name">Jane Appleseed</span>
            <span className="card-date">00/00</span>
            <img src={CardLogo} alt="" className='card-logo'/>
            <img src={CardFront} alt="" className='front-bk'/>
          </div>
          <div className="back-card">
            <img src={CardBack} alt="" />
          </div>
        <img src={window.innerWidth > 940 ? Desktop1 : Desktop2} alt="house" className="background-img"/>
      </div>
      <div className="container-2">
        <div className="form-container">
          <form action="submit">
            <div className="form-row">
              <legend>CARDHOLDER NAME</legend>
              <input
                type="text"
                className="generic-input"
                placeholder="e.g Jane Appleseed"
                data-error='Sorry, this username is taken.'
                
              />
            </div>
            <div className="form-row">
              <legend>CARD NUMBER</legend>
              <input
                type="text"
                className="generic-input"
                placeholder="e.g 1234 5678 9123 0000"
                
                pattern="[0-9\s]{13,19}"
              />
            </div>
            <div className="form-row smaller-row">
              <div className="exp-container">
              <legend>EXP. DATE (MM/YY)</legend>
                
                <input type="text" className="box-sm gap-right" placeholder="MM"  />
                <input type="text" className="box-sm" placeholder="YY"  />
              </div>
              <div>
              <legend>CVC</legend>
                <input type="text" className="box-md" placeholder="e.g. 123"  minLength={3}/>
              </div>
            </div>
            <div className="form-row">
              <button className="submit-button" onSubmit={submission} type="button">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;



/*
        <div className="card-container">
          <img src={CardFront} alt="" />
        </div>
        <div className="card-container-2">
          <img src={CardBack} alt="" />
        </div>
        */