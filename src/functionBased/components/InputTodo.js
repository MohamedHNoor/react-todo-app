import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

export default function InputTodo({ addTodoItem }) {
  const [inputText, setInputTex] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputTex({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoItem(inputText.title);
      setInputTex({
        title: '',
      });
      // eslint-disable-next-line
    } else alert('Please write item');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        name="title"
        onChange={onChange}
        value={inputText.title}
      />
      <button type="button" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};
