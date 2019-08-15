import React, { useReducer }from "react"; 
import { reducer, initialState } from "./reducers/TodoReducer";
import TodoForm from "./components/TodoForm.js"; 
import TodoList from "./components/TodoList.js"; 

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addNew = todo => {
    console.log("fire");
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const toggle = id => {
    console.log("toggle fire");
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const clear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const deleteTodo = id => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

return(
  <div className="App">
      <TodoForm addTodo={addNew} />
      <TodoList
        items={state.todos}
        toggle={toggle}
        clear={clear}
        delete={deleteTodo}
      />
    </div>
  ); 
}; 

export default App; 