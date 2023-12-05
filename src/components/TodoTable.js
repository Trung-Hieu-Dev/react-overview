import React from "react";
import TodoRowItem from "./TodoRowItem";

const TodoTable = (props) => {
  const todos = props.todos;

  return (
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
  );
};

export default TodoTable;
