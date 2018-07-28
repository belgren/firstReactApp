import React from "react";
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'
var dummyData = [
  { taskText: "Go to the store", completed: false },
  { taskText: "Do work", completed: true },
  { taskText: "Get a job", completed: false },
]

class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }

  addTodo(event, task){
    event.preventDefault();
    dummyData.push(
      { taskText: task, completed: false },
    )
    this.setState({
      todos: dummyData
    })
  }

  render(){
    return (
      <div>
        <InputLine submit={(event, task) => this.addTodo(event, task)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}


export default TodoApp;
