import React,  { useState, useReducer } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm.js"; 
import TodoList from "./components/TodoList.js"; 
import { initialState, todoReducer } from "./reducers/TodoReducer.js"; 

function App() {

  const [stateTodo, setStateTodo] = useState(" ");
  // // Dont really understand this (get help to understnad)
  const [state, dispatch] = useReducer(todoReducer, initialState); 
  // // Dont really understand this (get help to understnad)


  const handleChange = event => {
      event.preventDefault();
      setStateTodo(event.target.value); 
  }

  const handleSubmit = event => {
    event.preventDefault(); 
    // Dont really understand this (get help to understand)
    dispatch({type: "ADD_TODO", payload: stateTodo}) }
const toggleCompleted = (id) => {dispatch({tpye: "TOGGLE_COMPLETED", payload: id})}
const clearCompleted = () => {dispatch({type: "CLEAR_COMPLETED" })}
    // Dont really understand this (get help to understnad)

    return (
      <div className="App">
        <h1> Using Reducer </h1> 
      <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} stateTodo={stateTodo}  /> 
      <TodoList clearCompleted={clearCompleted} toggleCompleted={toggleCompleted} todos={state.todos} /> 
      </div>
    );
  } 

export default App;
