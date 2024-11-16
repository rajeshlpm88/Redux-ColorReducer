// colorReducer.js
import { SET_COLOR, RESET_COLOR } from './actionTypes';

const initialState = 'red'; // Default color

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLOR:
            return action.payload;
        case RESET_COLOR:
            return initialState;
        default:
            return state;
    }
};

export default colorReducer;
