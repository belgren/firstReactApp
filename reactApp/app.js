import React from "react";
import ReactDOM from 'react-dom';

var dummyData = ["Go to the store", "Do work", "Write a react app", "Get a job"];

class TodoApp extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <form>
        <input type="text"></input>
        <button type="submit">Add Todo</button>
        <TodoList/>
      </form>
    )
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <ul>
        { dummyData.map( (todo) => <Todo task={todo}/>) }
      </ul>
    )
  }
}

class Todo extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <li>
        <button type="button">X</button>
        {this.props.task}
      </li>
    )
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
