import React from "react";
import ReactDOM from 'react-dom';

var dummyData = [
  { taskText: "Go to the store", completed: false },
  { taskText: "Do work", completed: true },
  { taskText: "Get a job", completed: false },
]

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
  // function strike(props) => <strike>{this.props.task.taskText}</strike>
  // var nonStryke = (props) {
  //   return {this.props.task}
  // }
  // nonStryke(props) {
  //
  // }

  render() {
    return (
      <li>
        <button>X</button>
        {
          this.props.task.completed
          ? <strike> {this.props.task.taskText} </strike>
          : this.props.task.taskText
        }
      </li>
    )
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
