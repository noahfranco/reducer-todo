import React,  { useState, useReducer } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm.js"; 
import TodoList from "./components/TodoList.js"; 
import { initialState, todoReducer } from "./reducers/TodoReducer.js"; 

function App() {

  const [stateTodo, setStateTodo] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialState); 


  const handleChange = event => {
      event.preventDefault();
      setStateTodo(event.target.value); 
  }

  const handleSubmit = event => {
    event.preventDefault(); 

  }


  return (
    <div className="App">
      <h1> Using Reducer </h1> 
    <TodoForm handleChange={handleChange} /> 
    </div>
  );
}

export default App;
