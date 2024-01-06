// Importing necessary styles and dependencies
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

// Importing components
import AddTodo from './AddTodo';
import TaskList from './TaskList';

// Initializing a global index for unique todo IDs
let index = 4;

// Initial array of todos
const initialTodos = [
  { id: 1, title: "Hello World" },
  { id: 2, title: "Flux" },
  { id: 3, title: "ReactJS" },
  { id: 4, title: "AngularJs" }
];

function App() {
  // Using the state hook to manage the todos
  const [todos, setTodos] = useState(initialTodos);

  // Function to handle adding a new todo
  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: index++,
        title: title
      }
    ]);
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
    );
  }

  // Function to handle deleting a todo
  const handleDeleteTodo = (todoId) => {
    setTodos(
      todos.filter((t) => {
        return t.id !== todoId;
      })
    );
  }

  // Rendering the main application component
  return (
    <div className="App">
      {/* Component for adding new todos */}
      <AddTodo onAddTodo={handleAddTodo} />

      {/* Container for displaying tasks */}
      <div className='container task'>Tasks</div>

      {/* Component for displaying the list of todos */}
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
