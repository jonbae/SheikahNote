import {
    RECEIVE_NOTEBOOKS
} from "../actions/notebook_actions" ; 

const notebooksReducer = (state= {}, action) => {
    Object.freeze(state)
    switch(action.type) { 
        case RECEIVE_NOTEBOOKS: 
            return Object.assign( {}, state, action.notebooks); 
            // alternatively
            // return action.notebooks
        default: 
            return state; 

    }
}

export default notebooksReducer; 