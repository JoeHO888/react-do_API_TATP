const initialState = {
  todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, payload]
      }

    case "UPDATE_TODOS":
      return {
        todos: payload
      }

    default:
      return state
  }
}
