import React, { Component } from 'react';
import './App.css';

import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circle/Circle';

class App extends Component {
  state = {
    crcl1 : {text: '1', selected : false},
    crcl2 : {text: '2', selected : false},
    crcl3 : {text: '3', selected : false},
    crcl4 : {text: '4', selected : false},
    btn1Selected: false,
    btn2Selected: false,
    btn3Selected: false,
    btn4Selected: false,
    crcl1Selected : false, 
    crcl2Selected : false, 
    crcl3Selected : false, 
    crcl4Selected : false, 
    btn1text: 'SELECT CIRCLE 1', 
    btn2text: 'SELECT CIRCLE 2', 
    btn3text: 'SELECT CIRCLE 3', 
    btn4text: 'SELECT CIRCLE 4', 
  }



  updateBtn1 = () => {
    this.setState((state) => {
      return {
        btn1Selected: !state.btn1Selected.value,
        crcl1Selected: !state.crcl1Selected.value, 
        btn1text: 'CIRCLE 1 SELECTED',
        btn2Selected: false,
        btn3Selected: false, 
        btn4Selected: false,
        crcl2Selected: false, 
        crcl3Selected: false, 
        crcl4Selected: false, 
        btn2text: 'SELECT CIRCLE 2', 
        btn3text: 'SELECT CIRCLE 3', 
        btn4text: 'SELECT CIRCLE 4',
      }
    });
  }


  updateBtn2 = () => {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {
        btn2Selected: !state.btn2Selected.value,
        crcl2Selected: !state.crcl2Selected.value,
        btn2text: 'CIRCLE 2 SELECTED',
        btn1Selected: false,
        btn3Selected: false, 
        btn4Selected: false,
        crcl1Selected: false, 
        crcl3Selected: false, 
        crcl4Selected: false, 
        btn1text: 'SELECT CIRCLE 1',  
        btn3text: 'SELECT CIRCLE 3', 
        btn4text: 'SELECT CIRCLE 4',
      }
    });
  }

  updateBtn3 = () => {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {
        btn3Selected: !state.btn3Selected.value,
        crcl3Selected: !state.crcl3Selected.value,
        btn3text: 'CIRCLE 3 SELECTED',
        btn1Selected: false,
        btn2Selected: false, 
        btn4Selected: false,
        crcl1Selected: false, 
        crcl2Selected: false, 
        crcl4Selected: false, 
        btn1text: 'SELECT CIRCLE 1', 
        btn2text: 'SELECT CIRCLE 2', 
        btn4text: 'SELECT CIRCLE 4',
      }
    });
  }

  updateBtn4 = () => {
    this.setState((state) => {
      return {
        btn4Selected: !state.btn4Selected.value,
        crcl4Selected: !state.crcl4Selected.value,
        btn4text: 'CIRCLE 4 SELECTED',
        btn2Selected: false,
        btn3Selected: false, 
        btn1Selected: false,
        crcl2Selected: false, 
        crcl3Selected: false, 
        crcl1Selected: false, 
        btn1text: 'SELECT CIRCLE 1', 
        btn2text: 'SELECT CIRCLE 2', 
        btn3text: 'SELECT CIRCLE 3', 
      }
    });
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            text1={this.state.btn1text} btn1Selected={this.state.btn1Selected} updateBtn1={this.updateBtn1}
            text2={this.state.btn2text} btn2Selected={this.state.btn2Selected} updateBtn2={this.updateBtn2}
            text3={this.state.btn3text} btn3Selected={this.state.btn3Selected} updateBtn3={this.updateBtn3}
            text4={this.state.btn4text} btn4Selected={this.state.btn4Selected} updateBtn4={this.updateBtn4}
          />
          <Circles
            text1={this.state.crcl1.text} crcl1Selected={this.state.crcl1Selected}
            text2={this.state.crcl2.text} crcl2Selected={this.state.crcl2Selected}
            text3={this.state.crcl3.text} crcl3Selected={this.state.crcl3Selected}
            text4={this.state.crcl4.text} crcl4Selected={this.state.crcl4Selected}
          />
        </main>
      </div>
    );
  }
}

export default App;