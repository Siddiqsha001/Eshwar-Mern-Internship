import React, { useState } from 'react'
const Type = () => {
    const [text,setText]=useState('');
    const changeit=(event)=>{
        setText(event.target.value);
    };
    // Normal function for change handler
//   function changeit(event) {
//     setText(event.target.value); // Update the state with the input value
//   }
  return (
    <div>
        <input type="text" value={text} onChange={changeit}/>
        <h1>You typed : {text}</h1>
    </div>
  )
}
export default Type
