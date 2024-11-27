"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { updateTodo } from "@/store/todos/todosSlice";
import React, { useState } from "react";

interface ChildProps {
  id: string;
  closeUpdateModal: React.Dispatch<React.SetStateAction<boolean>>; // Tipo para setState
}

export const UpdateTodo: React.FC<ChildProps> = ({ id, closeUpdateModal }) => {
  const todoToUpdate = useAppSelector((state) =>
    state.todos.todos.find((todo) => todo.id === id),
  );
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState({
    title: todoToUpdate?.title,
    description: todoToUpdate?.description,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateTodo({ id, updates: { ...todo } }));
    closeUpdateModal(false);
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto px-5">
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          value={todo?.title}
          required
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="description"
          value={todo?.description}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </button>
    </form>
  );
};
