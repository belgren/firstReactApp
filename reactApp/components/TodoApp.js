import React from "react";
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'
var dummyData = [
  { taskText: "Go to the store", completed: false },
  { taskText: "Do work", completed: false },
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

  removeTodo(event, todo){
    dummyData = dummyData.filter((item) => item != todo)
    this.setState({
      todos: dummyData
    })
  }

  toggleStrike(event, todo){
    todo.completed = !todo.completed 
    // var newData = dummyData.map( (item) => {
    //     if (item==todo){
    //       return {taskText: item.taskText, completed: !item.completed};
    //     } else{
    //       return item;
    //     }
    // });
    this.setState({})
  }

  render(){
    return (
      <div>
        <InputLine
          submit={(event, task) => this.addTodo(event, task)}
        />
        <TodoList
          todos={this.state.todos}
          todoXClick={(event, todo) => this.removeTodo(event, todo)}
          toggleClick={(event, todo) => this.toggleStrike(event, todo)}
        />
      </div>
    )
  }
}


export default TodoApp;
