import React, { Component } from 'react'
import { dispatch } from 'rxjs/internal/observable/pairs';

export default class TodoInput extends Component {
  getInput = (event) => {
    this.input = event.target.value
  }
  dispatch = () => {
    this.props.onNewTodoAdded(this.input)
  }
  render() {
    return (
      <div>
        <input onChange={this.getInput}/>
        <button onClick={this.dispatch}>add</button>
      </div>
    )
  }
}
