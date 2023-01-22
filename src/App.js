import "./App.css";
import Desktop1 from "./assets/bg-main-desktop.png";
import Desktop2 from './assets/bg-main-mobile.png'
import CardFront from './assets/bg-card-front.png'
import CardBack from './assets/bg-card-back.png'
function App() {
  return (
    <div className="home-container">
      <div className="container-1">
        <div className="card-container">
          <img src={CardFront} alt="" />
        </div>
        <div className="card-container-2">
          <img src={CardBack} alt="" />
        </div>
      <img src={window.innerWidth > 900 ? Desktop1 : Desktop2} alt="house" className="background-img"/>
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
              />
            </div>
            <div className="form-row smaller-row">
              <div className="exp-container">
              <legend>EXP. DATE (MM/YY)</legend>
                
                <input type="text" className="box-sm gap-right" placeholder="MM"/>
                <input type="text" className="box-sm" placeholder="YY"/>
              </div>
              <div>
              <legend>CVC</legend>
                <input type="text" className="box-md" placeholder="e.g. 123"/>
              </div>
            </div>
            <div className="form-row">
              <button className="submit-button">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
