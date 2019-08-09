import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input type="text" />
        <p> Enter your birthday: </p>
        <input type="date" />
        <br/>
         <br/>
       <input type='submit' />

      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));



export default MyForm;
