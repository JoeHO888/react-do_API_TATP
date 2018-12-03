import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'

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
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}