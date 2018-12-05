import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput.js'

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: newTodo => {
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo
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