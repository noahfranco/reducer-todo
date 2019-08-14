import React from "react"; 


const TodoForm = ({ handleSubmit, stateTodo,  handleChange }) => {

     return(
         <>
         <form onSubmit={handleSubmit} >
            <input 
            type="text"
            name="stateTodo"
            placeholder="Todo"
            onChange={handleChange}
            value={stateTodo} 
            />      
            <button> Add To List </button>
         </form> 
         </> 
     )
}

export default TodoForm; 