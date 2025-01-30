import React, { useState } from 'react';

function Spread() {
    const [concatenatedArray, setConcatenatedArray] = useState([]); // Initialize as an empty array
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    const concat = () => {
        const comb = [...arr1, ...arr2];
        setConcatenatedArray(comb); // Update state with the concatenated array
    };

    return (
        <div>
            <h1>Array1: {arr1.join(', ')}</h1>
            <h1>Array2: {arr2.join(', ')}</h1>
            <h1>
                Concatenated Array: {concatenatedArray.length > 0 ? concatenatedArray.join(', ') : 'No elements'}
            </h1>
            <button onClick={concat}>Concatenate</button>
        </div>
    );
}

export default Spread;
