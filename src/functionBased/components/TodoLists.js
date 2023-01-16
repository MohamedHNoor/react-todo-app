import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosLists = ({
  todos, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosLists.prototype = {
  todos: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosLists;
