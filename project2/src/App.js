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
// class App extends React.Component{
//     state = {
//       persons: [
//         {name:'Vanessa', age: '20'},
//         {name: 'iris', age: '20'},
//         {name: 'Lucy', age: '20'}
//       ],
//       otherState : 'Some other value'
//     }
//     switchNameHandler = () => {
//       this.setState({
//         persons: [
//         {name: 'Vanessa', age: '20'},
//         {name: 'Iris', age: '21'},
//         {name: 'Lucy', age: '22'}
//         ]
//       });
//     }
//   render(){
//     return(
//       <div className="App">
//         <button onClick={this.switchNameHandler}> Switch Name </button>
//         <h1> Welcome to ReactJS </h1>
//         <p> This is really working</p>
//         <Person name = {this.state.persons[0].name}  age = {this.state.persons[0].age}  />
//         <Person name = {this.state.persons[1].name}  age = {this.state.persons[1].age} />
//         <Person name = {this.state.persons[2].name}  age = {this.state.persons[2].age}   />
//         </div>

//       );
//   }
// }
// export default App;
// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState() {
//       this.setState({data: 'Data updated...'})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.updateState}>CLICK</button>
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState() {
//       this.setState({data: 'Data updated from the child component...'})
//    }
//    render() {
//       return (
//          <div>
//             <Content myDataProp = {this.state.data} 
//                updateStateProp = {this.updateState}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <button onClick = {this.props.updateStateProp}>CLICK</button>
//             <h3>{this.props.myDataProp}</h3>
//          </div>
//       );
//    }
// }
// export default App;
// class Form extends React.Component {
//    constructor(props){
//       super(props);
//       this.onChange =  this.onChange.bind(this);
//       this.state = {
//          name: ''
//       };
//    }
//    onChange(e) {
//       this.setState({
//          name: e.target.value
//       });
//    }
//    render() {
//       return (<div> 
//          <label for= 'name-input'> Name:  </label>
//          <input id = 'name-input' onChange = {this.onChange} value = {this.state.name} />
//             <input type = 'submit' name ="submit"  />
//          </div>

//    )
//    }

// }
// export default Form;

// import {hocLogger} from "./hocLogger";
// export class MyLoggedComponent extends React.Component {
// render() {
// return (
// <div>
// This component get's logged to console on each mount.
// </div>
// );
// }
// }
// export default MyLoggedComponent;
// ở mỗi giai đoạn trong cuộc sống muốn biết bản thân hạnh phúc tới đâu chỉ cần ngửi mùi hương
// trong lòng bàn tay, có khi tay thơm toàn mùi giấy mực, có khi tay quấn quanh mùi gạo vừng
// hoặc mùi chè xanh, thời điểm buồn bã nhát bàn tay có mùi điện thoại mùi lap top, mùi xập xình
// trong những quán bar, mùi nước hoa đê mê mùi kẹp tóc phập phồng
//
// class MyForm extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          userName: '',
//          age: null,
//       };
//    }
//    mySubmitHandler = (event) => {
//       event.preventDefault();
//       let age =this.state.age;
//       if(!Number(age)){
//          alert("Your age must be a number");
//       }
//    }
//    myChangeHandler = (event) => {
//       let nam = event.target.name;
//       let val = event.target.value;
//       this.setState({[nam]: val});
//    }
//    render() {
//       return(
//          <form onSubmit = {this.mySubmitHandler}>
//          <h1> Hello {this.state.userName} {this.state.age} </h1>
//          <p> Enter your name:  </p>
//          <input type='text' name= 'userName' onChange= {this.myChangeHandler} />
//          <p> Enter your age:  </p>
//          <input type='text' name='age' onChange= {this.myChangeHandler}    />
//          <br/>
//          <br/>
//          <input type='submit' />
//          </form>
//          );
//    }
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       age: null,
//       email: '',
//       dateOfBirth: '',
//       gender: '',
//     };
//   }
//   mySubmitHandler = (event) => {
//     event.preventDefault();
//     let age = this.state.age;
//     if (!Number(age)) {
//       alert("Your age must be a number");
    
//   }
// }
//   myChangeHandler = (event) => {
//     let nam = event.target.name;

//     let val = event.target.value;
    
//     this.setState({[nam]: val});
//   }
//   render() {
//     return (
//       <form onSubmit={this.mySubmitHandler}>
//       <h1>Hello {this.state.username} {this.state.age}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         name='username'
//         onChange={this.myChangeHandler}
//       />
//       <p>Enter your age:</p>
//       <input
//         type='text'
//         name='age'
//         onChange={this.myChangeHandler}
//       />
//       <p> Enter your email:  </p>
//       <input type="text" name='email' onChange={this.myChangeHandler}  />
//       <br/>
//       <br/>
//       <input type='submit' />
//       </form>
//     );
//   }
// }

// export default MyForm;
// class Shoot extends React.Component {
//    Shoot(){
//       alert("Shooting around!!!!")
//    }
//    render(){
//       return (<button onClick={this.Shoot}>  Take a shoot </button>);
//    }
// }
// export default Shoot;
class Football extends React.Component {
  shoot = (a, b) => {
    alert(b.type);
    
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    
  }
  render() {
    return (
      <button
        onClick={(ev) => this.shoot("Goal", ev)}
      >Take the shot!</button>
    );
  }
}

export default Football;


