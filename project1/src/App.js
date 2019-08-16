import React, { Component } from 'react';  
//import logo from './logo.svg';
//import ReactDOM from 'react-dom';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import Result from './Components/Result';
import Reset from './Components/Reset';
import Setting from './Components/Setting';
// export default Football;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15 
    };
   // this.onSetColor = this.onSetColor.bind(this);
  }
  onSetColor = (params) => {
    this.setState({
      color: params
    });
  }
  render() {
    return (
     <div className='container mt-50'>
        <div className='row'>
        <ColorPicker color={this.state.color } onReceiveColor = {this.onSetColor} />
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          

          <Setting />
            <Reset />
            </div>
          


          <Result color= {this.state.color}/>
        </div>
        </div>
    
    );
  }
}
export default App;


