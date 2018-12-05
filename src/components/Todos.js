import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo) => 
		<li onClick={() => { this.props.updateStatus(todo)} } 
		key={todo.id} 
		style={{textDecoration: (todo.status=='completed') ? 'line-through' : 'none'}}>
		{todo.content}
		</li>)}
      </div>
    )
  }
}