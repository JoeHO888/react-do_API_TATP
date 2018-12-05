import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'
import { connect } from 'react-redux'

class TodoList extends Component {
  state = {todos: []}
  render() {
    return (
      <div>
        <TodoInput/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)