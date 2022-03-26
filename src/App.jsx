import React, { Component } from 'react';
import './App.css';

import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circle/Circle';

class App extends Component {
  state = {
    btn1 : {text: 'SELECT CIRCLE 1', btnSelected : false},
    btn2 : {text: 'SELECT CIRCLE 2', btnSelected : false},
    btn3 : {text: 'SELECT CIRCLE 3', btnSelected : true},
    btn4 : {text: 'SELECT CIRCLE 4', btnSelected : false},
    crcl1 : {text: '1', selected : false},
    crcl2 : {text: '2', selected : false},
    crcl3 : {text: '3', selected : true},
    crcl4 : {text: '4', selected : false},



    selected : true,
  }



  updateBtn1 () {
    this.setState((state) => 
    {
      // return 
      // {
      //   btn1.btnSelected : !state.btn1.btnSelected, 
      //   crcl1.selected : ! state.crcl1.selected
      // }
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            text1={this.state.btn1.text} btn1Selected={this.state.btn1.btnSelected} 
            text2={this.state.btn2.text} btn2Selected={this.state.btn2.btnSelected}
            text3={this.state.btn3.text} btn3Selected={this.state.btn3.btnSelected}
            text4={this.state.btn4.text} btn4Selected={this.state.btn4.btnSelected}
          />
          <Circles
            text1={this.state.crcl1.text} crcl1Selected={this.state.crcl1.selected}
            text2={this.state.crcl2.text} crcl2Selected={this.state.crcl2.selected}
            text3={this.state.crcl3.text} crcl3Selected={this.state.crcl3.selected}
            text4={this.state.crcl4.text} crcl4Selected={this.state.crcl4.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;