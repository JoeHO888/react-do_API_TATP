import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo, i) => <div key={i}>{todo}</div>)}
      </div>
    )
  }
}