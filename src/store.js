// store.js
import { createStore } from 'redux';
import colorReducer from './colorReducer.js';

const store = createStore(colorReducer);

export default store;
