import React from "react";
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';
import axios from "axios";

var dummyData = [
  { task: "Go to the store", completed: false },
  { task: "Do work", completed: false },
  { task: "Get a job", completed: false },
]

const dbUrl = "http://localhost:3000/db";

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
    var self = this;
    axios.post(dbUrl + '/add',
    {taskText: task})
    .then(function (response) {
      console.log("data: ", response.data);
      console.log("before state: ", self.state.todos);
      self.setState({ todos: self.state.todos.concat(response.data)});

    })
    .catch(function (error) {
      console.log(error);
    });
    //
    // dummyData.push(
    //   { taskText: task, completed: false },
    // )
    // this.setState({
    //   todos: dummyData
    // })
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
