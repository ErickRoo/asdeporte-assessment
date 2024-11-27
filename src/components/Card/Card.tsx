"use client";

import { useAppDispatch } from "@/store";
import { deleteTodo, updateTodo } from "@/store/todos/todosSlice";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import {
  IoCheckmarkCircle,
  IoCloseCircleOutline,
  IoCloseCircleSharp,
  IoTimerSharp,
} from "react-icons/io5";
import { UpdateTodo } from "@/components/index";

interface Props {
  id: string;
  title: string;
  description: string;
  status: string;
}

export const Card = ({ id, title, description, status }: Props) => {
  const dispatch = useAppDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const handleStatus = () => {
    dispatch(updateTodo({ id, updates: { status: "done" } }));
  };
  const handleUpdate = () => {
    setIsUpdating(!isUpdating);
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };
  return (
    <>
      <div
        className={`flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ${
          status === "inprogress" ? "dark:bg-red-200" : "dark:bg-green-200"
        } dark:border-gray-700`}
      >
        <button
          onClick={handleStatus}
          className="self-end px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {status === "inprogress" ? (
            <>
              <IoTimerSharp />
            </>
          ) : (
            <>
              <IoCheckmarkCircle />
            </>
          )}
        </button>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between">
          <button
            onClick={handleUpdate}
            className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
            <AiOutlineEdit />
          </button>

          <button
            onClick={handleDelete}
            className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Delete&nbsp;
            <IoCloseCircleOutline size={25} />
          </button>
        </div>
      </div>
      {isUpdating && (
        <div className="absolute z-10 top-0 left-0 bg-slate-500 bg-opacity-50 w-screen h-screen flex flex-col justify-center">
          <button
            onClick={handleUpdate}
            className="w-full flex justify-end mt-10 pr-10"
          >
            <IoCloseCircleSharp size={80} />
          </button>
          <div>
            <UpdateTodo id={id} closeUpdateModal={handleUpdate} />
          </div>
        </div>
      )}
    </>
  );
};
