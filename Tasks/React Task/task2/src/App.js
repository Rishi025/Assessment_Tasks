// Importing necessary styles and dependencies
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

// Importing components
import AddTodo from './AddTodo';
import TaskList from './TaskList';

// Initial index for unique todo IDs
let index = 6;

// Initial array of todos
const initialTodos = [
  { id: 1, title: "Learn React JS basics" },
  { id: 2, title: "Practice React JS" },
  { id: 3, title: "Learn Redux" },
  { id: 4, title: "Code portfolio in React" },
  { id: 5, title: "Learn React Native" }
];

// Main application component
function App() {
  // State for managing the list of todos
  const [todos, setTodos] = useState(initialTodos);

  // Function to handle adding a new todo
  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: index++,
        title: title
      }
    ])
  }

  // Function to handle changing a todo
  const handleChangeTodo = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    )
  }

  // Function to handle deleting a todo
  const handleDeleteTodo = (todoId) => {
    setTodos(
      todos.filter((t) => {
        return t.id !== todoId;
      })
    )
  }

  // Function to handle deleting done tasks
  const handleDeleteDoneTasks = () => {
    setTodos(todos.filter((t) => !t.checked));
  };

  // Function to handle deleting all tasks
  const handleDeleteAllTasks = () => {
    setTodos([]);
  };

  // Rendering the main application component
  return (
    <div className="App">
      {/* Section for adding new todos */}
      <div>TodoInput</div>
      <AddTodo onAddTodo={handleAddTodo} />

      {/* Container for displaying tasks */}
      <div className='container task'>Tasks</div>

      {/* Component for displaying the list of todos */}
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />

      {/* Button to delete done tasks */}
      <button
        className="btn btn-danger mt-3 me-3"
        onClick={handleDeleteDoneTasks}
      >
        Delete Done Tasks
      </button>

      {/* Button to delete all tasks */}
      <button
        className="btn btn-danger mt-3"
        onClick={handleDeleteAllTasks}
      >
        Delete All Tasks
      </button>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
