import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo, i) => <li key={i}>{todo.content}</li>)}
      </div>
    )
  }
}