
export const initialState = {
    todos: [{
        item: "Test", 
        id: 1,
        completed: false 
    }]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state, 
                todos: state.todos.concat({
                    item: action.payload, 
                    id: Date.now(), 
                    completed: false
                })
            }
            case "TOGGLE_COMPLETED": 
            return {...state,
                todos: state.todos.map(item => 
                    item.id === action.payload ?
                    {...item, completed: !item.completed} : item 
                )
            } 
            case "CLEAR_COMPLETED" :
            return {...state,
                todos: state.todos.filter(item => !item.completed)}
                default: return state; 
    }
}