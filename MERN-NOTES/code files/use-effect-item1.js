import React, { useEffect, useState } from 'react'

export const Timer = () => {

    const [seconds,setSeconds]=useState(0);

    useEffect(
        () => {
            const interval = setInterval(()=>{  //setInterval is a call back function->the useEffect function triggers the setInterval(call back function) automatically
                setSeconds(seconds=>seconds+1);
            },500);
            return () => clearInterval(interval);  //to reset the time when we click the restart button
        },[])   //it takes two arguement
  return (
    <div> 
        <h2>Timer :</h2>
        <p>{seconds} seconds have passed.</p>
    </div>
  )
}
