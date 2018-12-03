import React, { Component } from 'react'

export default class TodoInput extends Component {
  state = {input: ''}
  getInput = (event) => {
    const input = event.target.value
    this.setState({input})
  }
  dispatch = () => {
    this.props.onNewTodoAdded(this.state.input)
    this.setState({ input: '' })
  }
  render() {
    return (
      <div>
        <input onChange={this.getInput} value={this.state.input}/>
        <button onClick={this.dispatch}>add</button>
      </div>
    )
  }
}
