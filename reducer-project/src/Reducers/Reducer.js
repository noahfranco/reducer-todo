import React, { useReducer, useState } from "react"
import { initialReducer, initialState } from "./InfoReducer.js"; 

const Reducer = () => {

 const [newReducer, setNewReducer] = useState();

 const [state, dispatch] = useReducer(initialReducer, initialState); 
 console.log(state); 

    return(
        <div>
           <h1> This is the Reducer File </h1> 
         </div> 
    );
};

export default Reducer; 