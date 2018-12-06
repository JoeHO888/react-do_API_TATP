import React, { Component } from 'react'
import Todos from '../containers/TodoContainer'
import TodoInputContainer from '../containers/TodoInputContainer';

export default class TodoList extends Component {
	state={status:"active,completed"}
  render() {
	  {
    fetch("http://localhost:8080/api/todos/search/statusOfTodos?status="+this.state.status, {mode: 'cors'})
      .then(res => res.json())
      .then(res => {
        this.props.dispatch({
          type: "UPDATE_TODOS",
          payload: res._embedded.todos
        })
      })
  }
	  
    return (
      <div>
	  <input type="checkbox" id="myCheck" onClick={()=>{(this.state.status=='active') ? this.setState({status:'active,completed'}) : this.setState({status:'active'})}}></input><span>Completed</span>
        <TodoInputContainer/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}