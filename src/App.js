import "./App.css";
import TodoRowItem from "./components/TodoRowItem";

function App() {
  const todos = [
    { rowNumber: 1, rowDesc: "Feed dog", rowAssigned: "User One" },
    { rowNumber: 2, rowDesc: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDesc: "Make dinner", rowAssigned: "User One" },
  ];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>

            <tbody>
              <TodoRowItem
                rowNumber={todos[0].rowNumber}
                rowDesc={todos[0].rowDesc}
                rowAssigned={todos[0].rowAssigned}
              />
              <TodoRowItem
                rowNumber={todos[1].rowNumber}
                rowDesc={todos[1].rowDesc}
                rowAssigned={todos[1].rowAssigned}
              />
              <TodoRowItem
                rowNumber={todos[2].rowNumber}
                rowDesc={todos[2].rowDesc}
                rowAssigned={todos[2].rowAssigned}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
