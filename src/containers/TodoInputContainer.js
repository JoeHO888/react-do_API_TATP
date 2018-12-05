import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput.js'

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: newTodo => {
    const newTodoItem = {
      content: newTodo,
      status: "active"
    }
    fetch("http://localhost:8080/api/todos", {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(newTodoItem)
    })
    .then(res => res.json())
    .then(({id, status, content}) => {
      dispatch({
        type: 'ADD_TODO',
        payload: {id, status, content}
      })
    })
  }
})
// const mapDispatchToProps = {
//   addNewTodo: newTodo => ({
//     type: 'ADD_TODO',
//     payload: newTodo
//   })
// }
export default connect(null, mapDispatchToProps)(TodoInput)