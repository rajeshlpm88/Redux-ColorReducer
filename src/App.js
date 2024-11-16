// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setColor, resetColor } from './actions';

const App = () => {
    const color = useSelector(state => state);
    const dispatch = useDispatch();

    const handleColorChange = (e) => {
        dispatch(setColor(e.target.value));
    };

    return (
        <div>
            <h2>Color</h2>
            <p>Current Color: {color}</p>
            <input type="text" value={color} onChange={handleColorChange} />
            <button onClick={() => dispatch(resetColor())}>Reset Color</button>
        </div>
    );
};

export default App;
