import React from "react";

class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      typedText: ""
    }
  }

  handleTyping(event){
    this.setState({
      typedText: event.target.value
    })
  }

  handleSubmit(event){
    if (this.state.typedText){
      this.props.submit(event, this.state.typedText);
      this.setState({
        typedText: ""
      })
    } else{
      event.preventDefault();
    }
  }

  render(){
    return (
      <form>
        <input type="text" value={this.state.typedText} onChange={
          (event) => this.handleTyping(event)
        }>
        </input>
        <button type="submit" onClick={
          (event) => this.handleSubmit(event)
        }>
        Add Todo</button>
      </form>
    )
  }
}
export default InputLine;
