"use client";

import { useReducer } from "react";
import Modal from "./_modal";

const ModalReducer = (state: boolean, action: "open" | "close") => {
  switch (action) {
    case "open":
      return true;
    case "close":
      return false;
    default:
      return state;
  }
};

const PageWithModal = () => {
  const [state, dispatch] = useReducer(ModalReducer, false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reusable Modal Example</h1>
      <button
        onClick={() => dispatch("open")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <Modal isOpen={state} onClose={() => dispatch("close")}>
        <h2 className="text-xl font-semibold mb-2">Hello 👋</h2>
        <p>
          This is a reusable modal component with focus management, ESC close,
          and outside click close.
        </p>
        <button
          onClick={() => dispatch("close")}
          className="mt-4 bg-gray-700 text-white px-3 py-1 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default PageWithModal;
