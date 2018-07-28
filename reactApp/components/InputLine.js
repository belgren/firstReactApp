import React from "react";

class InputLine extends React.Component{
  render(){
    return (
      <form>
        <input type="text"></input>
        <button type="submit" onClick={
          (event) => this.props.submit(event, "tester2")
        }>
        Add Todo</button>
      </form>
    )
  }
}
export default InputLine;
