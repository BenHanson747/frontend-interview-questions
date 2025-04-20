"use client";

import React, { useReducer, useState } from "react";

// Todo type
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// Filter type
type Filter = "all" | "active" | "completed";

// Action types for reducer
type Action =
  | { type: "ADD"; title: string }
  | { type: "TOGGLE"; id: number }
  | { type: "DELETE"; id: number }
  | { type: "CLEAR_COMPLETED" };

// Reducer function
function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
}

const TodoList: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const handleAdd = () => {
    if (title.trim()) {
      dispatch({ type: "ADD", title });
      setTitle("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Add a new todo..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2 mb-4">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded"
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: "TOGGLE", id: todo.id })}
              />
              <span
                className={todo.completed ? "line-through text-gray-400" : ""}
              >
                {todo.title}
              </span>
            </label>
            <button
              onClick={() => dispatch({ type: "DELETE", id: todo.id })}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center text-sm">
        <div className="space-x-2">
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "font-bold underline" : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={filter === "active" ? "font-bold underline" : ""}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "font-bold underline" : ""}
          >
            Completed
          </button>
        </div>
        <button
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
          className="text-gray-600 hover:text-black"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
