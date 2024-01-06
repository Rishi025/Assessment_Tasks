import React, { useState } from 'react';

// AddToDo component allows users to input a new task and add it to the list
function AddToDo({ onAddTodo }) {
  // State for managing the input field's value
  const [title, setTitle] = useState("");

  return (
    <div>
      {/* Input field for entering a new task */}
      <input
        placeholder='enter task'
        value={title}
        onChange={(e) => {
          // Update the title state when the input value changes
          setTitle(e.target.value);
        }}
      />

      {/* Button to add the entered task to the list */}
      <button onClick={() => {
        // Reset the input field after adding the task
        setTitle("");
        // Call the onAddTodo function with the entered title
        onAddTodo(title);
      }}>Add</button>
    </div>
  );
}

// Exporting the AddToDo component as the default export
export default AddToDo;
