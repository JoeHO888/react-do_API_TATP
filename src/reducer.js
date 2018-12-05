const initialState = {
  todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_TODO":
    return {
      todos: [...state.todos, payload]
    }

  default:
    return state
  }
}
