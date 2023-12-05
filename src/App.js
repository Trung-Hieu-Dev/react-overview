import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  const todos = [
    { rowNumber: 1, rowDesc: "Feed dog", rowAssigned: "User One" },
    { rowNumber: 2, rowDesc: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDesc: "Make dinner", rowAssigned: "User One" },
    { rowNumber: 4, rowDesc: "Charge phone battery", rowAssigned: "User One" },
  ];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
