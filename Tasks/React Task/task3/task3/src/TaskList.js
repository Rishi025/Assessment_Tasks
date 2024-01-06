import React from 'react';

// TaskList component displays a list of todos
function TaskList({ todos }) {
  return (
    <div>
      <ul>
        {/* Mapping through the todos array and rendering each todo title as a list item */}
        {todos.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Exporting the TaskList component as the default export
export default TaskList;
