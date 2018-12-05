import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todos'

const mapDispatchToProps = (dispatch) => ({
	updateStatus: todo =>{
		console.log(todo.id)
		let status = ""
		if (todo.status=="completed"){console.log("hello");status = "active"}
		if (todo.status=="active"){console.log("hi");status = "completed"}
	  fetch("http://localhost:8080/api/todos/"+todo.id, {
  mode: 'cors',
  method: 'PUT', 
  body: JSON.stringify({
    "status" : status,
	"id":todo.id,
	"content":todo.content
  }),
  headers: new Headers({ 'Content-Type': 'application/json'})
})
   .then(res=>res.json()).then(console.log(status))
   .then(res => console.log(res));
   
   
  }
})
  

export default connect(null, mapDispatchToProps)(Todo)