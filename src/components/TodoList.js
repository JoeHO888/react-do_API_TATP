import React, { Component } from 'react'
import TodoInput from './TodoInput'

export default class TodoList extends Component {
  state = {todos: []}
  addNewTodo = newTodo => {
    this.state.todos.push(newTodo)
    this.setState({todos: this.state.todos})
  }
  render() {
    return (
      <div>
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        {this.state.todos.map(todo => <div>{todo}</div>)}
      </div>
    )
  }
}