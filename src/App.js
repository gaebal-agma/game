import logo from './logo.svg';
import './App.css';
import Count from './Count';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <Count/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <h3><center>JavaScript Click Counter</center></h3>
<div>
    <center><h3 id="counter-label">0</h3></center>
</div>
<center>
    <div>
        <button onclick="incrementClick()">Click Me</button>
        <button onclick="resetCounter()">Reset</button>
    </div>
</center> */}

        <a>개발악마 성공</a>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       </header> 
    </div>
  );
}

export default App;
