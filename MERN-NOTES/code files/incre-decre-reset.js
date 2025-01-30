import React, { useState } from 'react';
function Counter(){
    const[count,setCount]=useState(100);
    const increment =()=>{
        var c1=100
        c1+=1;
        setCount(c1);
    };
    const decrement =()=>{
        var c2=100
        c2-=1;
        setCount(c2);
    };
    const reset1 =()=>{
        var c3=100-c1
        setCount(c3);
    };
    const reset2 =()=>{
        var c4=100-c2
        setCount(c4);
    };
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            {/* <h1>Counter: {count}</h1> */}
            <button onClick={decrement}>Decrement</button>
            {/* <h1>Counter: {count}</h1> */}
            <button onClick={reset1}>Reset1</button>
            <button onClick={reset2}>Reset2</button>
        </div>
    );
}
export default Counter;
