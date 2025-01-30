import React, { useState } from 'react';

function Array() {
    const [concatenatedArray, setConcatenatedArray] = useState([]);
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    const concat = () => {
        setConcatenatedArray(arr1.concat(arr2));
    };

    return (
        <div>
            <h1>Array1: {arr1.join(',')}</h1>
            <h1>Array2: {arr2.join(',')}</h1>
            <h1>Concatenated Array: {concatenatedArray.join(', ')}</h1>
            <button onClick={concat}>Concatenate</button>
        </div>
    );
}
export default Array;




