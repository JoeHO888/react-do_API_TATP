import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'
import { connect } from 'react-redux'

class TodoList extends Component {
  state = {todos: []}
  addNewTodo = newTodo => {
    this.props.dispatch({
      type: 'ADD_TODO',
      payload: newTodo
    })
  }
  render() {
    return (
      <div>
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)