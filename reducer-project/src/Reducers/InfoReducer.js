export const initialState = {
    item: "Chevrolet Camaro", 
    completed: false, 
    id: 1
}

export const initialReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_EDITING":
        return {
            ...state,
            editing: !state.editing
        }; 
        case "UPDATE_REDUCER":
        return {
            ...state, 
            title: action.payload,
            editing: !state.editing
        }; 
        default: return state; 
    }
}; 