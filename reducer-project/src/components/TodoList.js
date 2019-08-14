import React from "react"; 

const TodoList = ({todos, toggle, clearCompleted}) => {
    return( <>
       <button onClick={clearCompleted}> Clear Button </button>
       {/* {todos.map(i => {
           return <div className={"item" + (i.completed ? "done" : "")} 
          key={i.id}
          onClick={() => toggleCompleted(i.id)}> 
          </div>
       }) */}
       </>
    )
}

export default TodoList; 

