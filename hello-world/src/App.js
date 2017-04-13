import React, { Component } from 'react';
import logos from './logo.svg';
import './App.css';
import index from './index.js'
import Details from './Details.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logos} className="App-logo" alt="logo" />
          <h2>Welcome to ...</h2>
        </div>
        
        <form className="App-intro" action="">
       
         <h3> Login </h3>   
         Username : <input type="text" className="username" />
         <br/>
          Password: <input type="passsword" className="password" />
          <br/>
         <input type="submit" value="Submit" className="submit" />

        </form>

        if({{Details}.props.message})
        {
          <Details />
        }
        
       
      </div>

      
  
    );
  }
}

export default App;
