import React, { Component } from 'react';  
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Person from './Person/person';

// class MyForm extends React.Component {
//   constructor (props) {
//   super(props);
//   this.state = {
//     name: '',
//     password: '',
//     email: '',
//     dateOfBirth: '',
//     gender: '',
//   }
// }
//   render() {
//     return (
//       <form>
//         <h1> Register  </h1>
//         <h3> Admin </h3>
//         <p class= "box1">Name:</p>
//         <input type="text" placeholder = "Enter name" name ="name" />
//         <p class = "box1"> password </p>

//         <p class = "password"><input type="password" placeholder= "12341234" name ="password" /></p>
//         <p class= "box1">Email:</p>
//         <input type="text" placeholder = "Enter email" name="email" />
//         <p class = "box1"> Birthday: </p>

//         <input type="date" placeholder = "Enter date of birth"  name = "dateOfBirth"/>
//         <p class= "box1"> Gender </p>
//         <p class = "box1"><input type = "checkbox" name="gender" />Female</p> 
//         <p class = "box1"><input type = "checkbox" name="gender" />Male</p> 
//        <p class= 'form-control' > <input type='submit' /></p>


//       </form>
//     );
//   }
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));
// // class MyForm extends React.Component{
// //   function App(){
// //     return (<h1> Hello world </h1>)
// // }
// // }




// export default MyForm;
// Excercise 2:

// class Test extends React.Component{
//   render(){
//     return(<h1> Hello WOrld </h1>);
//   }
// }

// ReactDOM.render(<Test />, document.getElementById('root'));




// export default Test;

// class App extends React.Component {  
//   constructor(props) {  
//       super(props);  
//       this.state = {value: ''}; 
//       this.password={value: ''};
//       this.email={value: ''};
//       this.dateOfBirth={value: ''};
//       this.gender={value: ''};
//       this.handleChange = this.handleChange.bind(this);  
//       this.handleSubmit = this.handleSubmit.bind(this);  
//   }  
//   handleChange(event) {  
//       this.setState({value: event.target.value});
       
//   }  
//   handleSubmit(event) {  
//       alert('You have submitted the input successfully: ' + this.state.value);  
//       event.preventDefault();  
//   }  
//   render() {  
//       return (  
//           <form onSubmit={this.handleSubmit}>  
//             <h1>Controlled Form Example</h1>  
//             <label>  
//                 Name:  
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />  
//             </label>
//             <p class = "box1">  </p>

//         <p class = "password">password: <input type="password" placeholder= "12341234" name ="password" value={this.state.value} onChange={this.handleChange} /></p>
//         <p class= "box1"></p>
//         Email: <input type="text" placeholder = "Enter email" name="email" value={this.state.value} onChange={this.handleChange} />
//         <p class = "box1"> </p>

//         Birthday: <input type="date" placeholder = "Enter date of birth"  name = "dateOfBirth" value={this.state.value} onChange={this.handleChange}/>
//         <p class= "box1">  </p>
//         Gender: <p class = "box1"><input type = "checkbox" name="gender" checked = {this.state.isChecked} onChange={this.toggleChange}  />Female</p> 
//         <p class = "box1"><input type = "checkbox" name="gender" checked={this.state.isChecked} onChange={this.toggleChange} />Male</p> 


//             <input type="submit" value="Submit" />  
//          </form>  
//       );  
//   }  
// }  
// export default App;  
// Excercise
// var Button = React.createClass({
//     render: function(){
//         return (
//             <input type="submit" />
//         );
//     }
// });
// export default Button;
// class App extends React.Component{
//   render(){
//   return(
//   <div className = "person">
//     <h1> Welcome to HN </h1>
//     <p> My name is mai </p>
//     </div>
//   );
// }
// }
// export default App;
class App extends React.Component{
  render(){
    return(
      <div class="App">
        <h1> Welcome to ReactJS </h1>
        <p> This is really working</p>
        <Person  />
        <Person  />
        <Person  />
        </div>

      );
  }
}
export default App;

