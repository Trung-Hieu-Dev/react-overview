import { useState } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoTable from "./components/TodoTable";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDesc: "Feed dog", rowAssigned: "User One" },
    { rowNumber: 2, rowDesc: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDesc: "Make dinner", rowAssigned: "User One" },
    { rowNumber: 4, rowDesc: "Charge phone battery", rowAssigned: "User One" },
  ]);

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDesc: "New todo",
        rowAssigned: "User Three",
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todo
          </button>
          <NewTodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
