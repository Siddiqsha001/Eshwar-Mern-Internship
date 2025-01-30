import React, { useState } from 'react';
function Event() {
    const [concatenatedArray, setConcatenatedArray] = useState('Click the button to see the message'); 
    const concat = () => {
        setConcatenatedArray('You clicked the button'); 
        // alert(comb); 
    };
    return (
        <div>
            {/* <h1>Array1: {arr1.join(', ')}</h1>
            <h1>Array2: {arr2.join(', ')}</h1> */}
            <h1>Concatenated Array: {concatenatedArray.join(', ')}</h1>
            <button onClick={concat}>Concatenate</button>
        </div>
    );
}
export default Event;
