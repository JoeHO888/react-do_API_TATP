import React, { Component } from 'react'
import Todos from './Todos'
import TodoInputContainer from '../containers/TodoInputContainer';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}