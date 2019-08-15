import React from "react";
import Todo from "./Todo.js";
const TodoList = props => {
  console.log("props :", props);
  return (
    <div>
      <h1>TodoList</h1>
      {props.items.map(item => (
        <Todo todo={item} toggle={props.toggle} delete={props.delete} key={props} />
      ))}
      <button onClick={props.clear}>Clear Completed todos</button>
    </div>
  );
};

export default TodoList;

