import React from "react";

class Todo extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <li>
        <button
          className="deleteButton"
          onClick={ (event) => this.props.xClick(event)}
        >
          X
        </button>
        <button
          className="checkButton"
          onClick={ (event) => this.props.toggleClick(event)}
        >
          ✓
        </button>
        {
          this.props.task.completed
          ? <strike> {this.props.task.taskText} </strike>
          : this.props.task.taskText
        }
      </li>
    )
  }
}

export default Todo;
