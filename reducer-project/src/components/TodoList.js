import React from "react"; 

const TodoList = ({todos, toggleCompleted, clearCompleted}) => {
    return( 
        <>
    <button className="clear-btn" onClick={clearCompleted}> Clear </button>
    <div>
      {todos.map(i => {
        return <div 
          className={"item " + (i.completed ? "done" : "")} 
          key={i.id} 
          onClick={() => toggleCompleted(i.id)}>
          {i.item}
        </div>
      })}
    </div>
    </>
    ); 
}

export default TodoList; 

