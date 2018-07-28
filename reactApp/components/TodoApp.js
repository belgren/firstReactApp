import React from "react";
import TodoList from './TodoList.js'

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
  render(){
    return (
      <form>
        <input type="text"></input>
        <button type="submit">Add Todo</button>
        <TodoList todos={this.state.todos}/>
      </form>
    )
  }
}

export default TodoApp;
