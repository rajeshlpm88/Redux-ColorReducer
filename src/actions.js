// actions.js
import { SET_COLOR, RESET_COLOR } from './actionTypes';

export const setColor = (color) => ({
    type: SET_COLOR,
    payload: color,
});

export const resetColor = () => ({
    type: RESET_COLOR,
});
