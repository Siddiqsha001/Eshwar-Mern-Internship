import React, { useState } from 'react'

const Toggle = () => {
    const [togg,setTogg]=useState("off");
    const togglefunc=()=>{
            setTogg((neww)=>(neww==="on"?"off":"on"));
    };
    const textstyle={backgroundColor:togg==="on"?"white":"black",color:togg==="on"?"black":"white"}
  return (
    <div style={textstyle}>
        <button onClick={togglefunc}>Toggle</button>
        <h1>Button is : {togg}</h1>
    </div>
  )
}
export default Toggle;
