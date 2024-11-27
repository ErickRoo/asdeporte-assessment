"use client";

import React from "react";
import { Card } from "../Card/Card";
import { useAppSelector } from "@/store";

export const TodosGrid = () => {
  const todosState = useAppSelector((state) => state.todos);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todosState.todos.map((todo) => (
        <Card key={todo.id} {...todo} />
      ))}
    </div>
  );
};
