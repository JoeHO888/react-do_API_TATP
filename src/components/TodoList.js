import React, { Component } from 'react'
import Todos from './Todos'
import { connect } from 'react-redux'
import TodoInputContainer from '../containers/TodoInputContainer';

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)