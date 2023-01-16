import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export default function InputTodo(props) {
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
      props.addTodoProps(inputText.title);
      setInputTex({
        title: '',
      });
    } else alert('Please write item');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add tod..."
        name="title"
        onChange={onChange}
        value={inputText.title}
      />
      <button className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
}
