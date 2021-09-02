// import React, { useContext, useState } from 'react';

import { TodoItemProps } from "../../types";

import { PostContext } from '../context/PostContext';
import { ThemeContext } from '../context/ThemeContext';
import { WalletContext } from '../context/WalletContext';

import '../css/PostForm.css';

const NewTodo = ({ }: TodoItemProps) => (
     <form className="" onSubmit={handleSubmit}>
    <input
      type="text"
      name="task"
      value={task}
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <button type="submit" aria-label="Add todo">
      Submit
    </button>
  </form>
)

export default NewTodo;

