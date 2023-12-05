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
        {todos.map((todo, index) => (
          <TodoRowItem
            key={index}
            rowNumber={todo.rowNumber}
            rowDesc={todo.rowDesc}
            rowAssigned={todo.rowAssigned}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
