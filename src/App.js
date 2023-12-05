import "./App.css";
import TodoRowItem from "./components/TodoRowItem";

function App() {
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
              <TodoRowItem />
              <tr>
                <th scope="row">2</th>
                <td>Get Haircut</td>
                <td>Marry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
