import React, { Component } from 'react'
import TodoInput from './TodoInput'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoInput onNewTodoAdded={t => alert(t)}/>
        <div>todo1</div>
        <div>todo2</div>
        <div>todo3</div>
      </div>
    )
  }
}