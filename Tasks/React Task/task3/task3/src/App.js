import React, { useState } from 'react';
import AddToDo from './AddTodo'; // Importing the AddToDo component
import './App.css'; // Importing the App.css stylesheet
import TaskList from './TaskList'; // Importing the TaskList component

// Counter for generating unique IDs
let index = 4;

// Initial set of todos
const initialTodos = [
  { id: 1, title: "hello everybody" },
  { id: 2, title: "looks like it" },
  { id: 3, title: "is this working" }
];

// App component represents the main application
function App() {
  // State for managing the list of todos
  const [todos, setTodos] = useState(initialTodos);

  // Function to handle adding a new todo
  const handleAddTodo = (title) => {
    // Adding a new todo to the todos state
    setTodos([
      ...todos,
      {
        id: index++, // Incrementing the index for a unique ID
        title: title
      }
    ]);
  };

  // Rendering the main structure of the application
  return (
    <div className="App">
      <div className="main">
        {/* AddToDo component for adding new todos */}
        <AddToDo onAddTodo={handleAddTodo} />
        
        {/* TaskList component for displaying the list of todos */}
        <TaskList todos={todos} />
      </div>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
