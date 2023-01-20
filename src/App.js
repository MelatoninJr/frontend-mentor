import './App.css';
import Desktop1 from './assets/bg-main-desktop.png'

function App() {
  return (
    <div className="home-container">
      <div className="container-1">
        <img src={Desktop1} alt="space-background-desktop" />
      </div>
      <div className="container-2">
        <div className="form-container">
          <form action="submit">
            <input type="text" className='generic-input'placeholder='e.g Jane Appleseed'/>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
