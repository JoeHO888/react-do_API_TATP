import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </div>
    )
  }
}