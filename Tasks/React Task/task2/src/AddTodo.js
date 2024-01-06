import React, { useState } from 'react';

// Functional component for adding a new todo
function AddTodo({ onAddTodo }) {
  // State to manage the input value for the new todo
  const [title, setTitle] = useState("");

  return (
    <>
      {/* Container for the add todo input and button */}
      <div className="container addtododiv">
        {/* Input field for entering the new task */}
        <input
          type="text"
          placeholder='Task'
          className="addInput"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />

        {/* Button to add the new todo */}
        <button
          className="btn btn-primary add"
          onClick={() => {
            // Clearing the input field and triggering the onAddTodo function
            setTitle("");
            onAddTodo(title);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

// Exporting the AddTodo component as the default export
export default AddTodo;
