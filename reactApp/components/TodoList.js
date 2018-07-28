import React from "react";
import Todo from "./Todo.js"

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ul>
        {
          this.props.todos.map( (todo) => <Todo
            task={todo}
            xClick={(event) => this.props.todoXClick(event, todo)}
            toggleClick={(event) => this.props.toggleClick(event, todo)}
          />)
        }
      </ul>
    )
  }
}

export default TodoList;
