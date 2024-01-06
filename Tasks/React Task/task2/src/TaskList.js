import React, { useState } from 'react';

// TaskList component renders a list of tasks using the Task component
function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((t) => (
          // Each task is rendered as a list item with a unique key and Bootstrap styling
          <li key={t.id} className='btn btn-success mt-2'>
            {/* Task component is used for rendering each task */}
            <Task todo={t} onChange={onChangeTodo} onDelete={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </>
  );
}

// Task component represents an individual task with edit, delete, and checkbox functionality
function Task({ todo, onChange, onDelete }) {
  // State variables for edit mode and checkbox status
  const [edit, setEdit] = useState(false);
  const [checked, setChecked] = useState(todo.checked || false);

  let content;

  // Function to handle checkbox state change
  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange({
      ...todo,
      checked: !checked,
    });
  };

  // Determine content based on whether the task is in edit mode
  if (edit) {
    // Edit mode content with input field and save button
    content = (
      <>
        <input
          type="text"
          className="addInput"
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button className="btn btn-warning" onClick={() => setEdit(false)}>
          Save
        </button>
      </>
    );
  } else {
    // Display mode content with task title, checkbox, edit button
    content = (
      <>
        <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
        <input
          type="checkbox"
          className="ms-2"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <button className="btn btn-info me-2 ms-2" onClick={() => setEdit(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      {content}
      {/* Delete button to delete the task */}
      <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </>
  );
}

// Exporting TaskList component as the default export
export default TaskList;
