"use client";

import { count } from "console";
import React, { useReducer } from "react";

const initialState = { count: 0 };

const counterReducer = (
  state: typeof initialState,
  action: { type: "increment" | "decrement" | "reset" }
) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h1>Counter</h1>
      <div>
        <span>{state.count}</span>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "increment" });
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
          >
            Increment
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
            disabled={state.count === 0}
          >
            Decrement
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
