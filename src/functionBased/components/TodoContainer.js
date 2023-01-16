import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosLists from './TodoLists';

import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';
import SinglePage from '../pages/SinglePage';

export default function TodoContainer() {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodoItem={addTodoItem} />
                <TodosLists
                  todos={todos}
                  handleChange={handleChange}
                  delTodo={delTodo}
                  setUpdate={setUpdate}
                />
              </div>
            </div>
          }
        />
        <Route path="/about">
          <Route index element={<About />} />
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}
