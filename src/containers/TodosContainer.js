import React from 'react'
import Todos from 'components/Todos'
import { connect } from 'react-redux'
import { TodoActions } from 'store/actionCreators';

function TodosContainer(props) {
  const { input, todos } = props;

  const handleCHange = (e) => {
    TodoActions.changeInput(e.target.value)
  }

  const handleInsert = () => {
    TodoActions.insert(input)
    TodoActions.changeInput('')
  }

  const handleToggle = (id) => {
    TodoActions.toggle(id)
  }

  const handleRemove = (id) => {
    TodoActions.remove(id)
  }

  return (
    <Todos
      input={input}
      todos={todos}
      onChange={handleCHange}
      onInsert={handleInsert}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  )
}

export default connect(
  ({ todo }) => ({
    input: todo.input,
    todos: todo.todos
  }),
)(TodosContainer)