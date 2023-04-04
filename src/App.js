import react from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  const divStyle={
    color:'red',
    backgroundColor:'PowderBlue',
    fontSize:'larger',
    padding:'20px',
    margin:'5px',
  }
  let colors=['red', 'green', 'blue', 'yellow']
  let list = colors.map(c=> <li>{c}</li>)
  return (
    <div>
      
      <div style={divStyle}><h3>Hello World <br/>My name is Likit chamuthai</h3></div>
      
      <ol>{list}</ol>
      
      <h2>Learning React</h2>
        <div className="title"><a href="https://reactjs.org" target="_blank">React & React Native</a></div>
        <img src={"./image/logo512.png"} width="20%"/>
    </div>
       
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
