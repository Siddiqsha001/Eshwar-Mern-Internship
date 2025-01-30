import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1);
    }
    const Decrement=()=>{
        if(count===0){
            alert("Count is already 0");
        }
        else{
        setCount(count-1);
        }
    }
    const Reset=()=>{
        setCount(0);
    }
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        <h1>Count is : {count}</h1>

    </div>
  )
}
export default Counter;
