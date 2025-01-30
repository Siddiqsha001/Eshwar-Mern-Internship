import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from './slices/userslice'    

const Addmul = () => {
    const dispatch=useDispatch()
    const [num1,setnum1]=useState("");
    const [num2,setnum2]=useState("");
    // const [result,setresult]=useState(0);
    function handlechange(e){
        const{value,id}=e.target
        const val=+value
        if(id==='num1'){
            setnum1(val);
        //setresult(val +num2)

        }
        else{
            setnum2(val);
        //setresult(val* num1)
        }
    }
    
    const add = (event) => {
        event.preventDefault();
        const result = +num1 + +num2; // Convert strings to numbers and add
        console.log("Addition Result:", result); // Log result
        dispatch(addUser(result)); // Dispatch result to Redux
    };

    const multiply = (event) => {
        event.preventDefault();
        const result = +num1 * +num2; // Convert strings to numbers and multiply
        console.log("Multiplication Result:", result); // Log result
        dispatch(addUser(result)); // Dispatch result to Redux
    };
        
  return (
    <div>
        <form style={{flex:10}}>
            <label>Enter Number 1:</label>
            <input type="number" value={num1} onChange={handlechange} id="num1" />
            <label>Enter Number 2:</label>
            <input type="number" value={num2} onChange={handlechange} id="num2"/>
            <button onClick={add}>+</button>
            <button onClick={multiply}>*</button>
        </form>
    </div>
  )
}
export default Addmul
