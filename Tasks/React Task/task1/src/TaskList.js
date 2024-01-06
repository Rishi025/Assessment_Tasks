import React, { useState } from 'react';

// Functional component for displaying a list of tasks (todos)
function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <>
      {/* Unordered list to display individual tasks */}
      <ul>
        {todos.map((t) => (
          <li key={t.id} className='btn btn-success mt-2'>
            {/* Task component for each individual task */}
            <Task
              todo={t}
              onChange={onChangeTodo}
              onDelete={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

// Functional component for displaying an individual task
function Task({ todo, onChange, onDelete }) {
  let content;
  const [edit, setEdit] = useState(false);

  // Rendering content based on whether the task is being edited or not
  if (edit) {
    // Display input field for editing
    content = (
      <>
        <input
          type="text"
          className="addInput"
          value={todo.title}
          onChange={(e) => {
            // Updating task title during editing
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button className="btn btn-warning" onClick={() => { setEdit(false) }}>
          Save
        </button>
      </>
    );
  } else {
    // Displaying task title and Edit button when not in edit mode
    content = (
      <>
        {todo.title}
        <button className="btn btn-info me-2 ms-2" onClick={() => { setEdit(true) }}>
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      {/* Displaying the content of the task and Delete button */}
      {content}
      <button className="btn btn-danger" onClick={() => { onDelete(todo.id) }}>
        Delete
      </button>
    </>
  );
}

// Exporting the TaskList component as the default export
export default TaskList;
