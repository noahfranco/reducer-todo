import React from "react"; 


const Todo = ({handleChange, stateTodo, handleSubmit}) => {

     return(
         <>
         <form>
            <input 
            type="text"
            name="stateTodo"
            placeholder="Todo"
            onChange={handleChange}
            value={stateTodo} 
            />      
            <button type="submit"> Add To List </button>
         </form> 
         </> 
     )
}

export default Todo; 