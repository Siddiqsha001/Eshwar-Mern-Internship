import React from 'react'
import { useState } from 'react'
const Textbox = () => {
    const[form,setform]=useState({name:" ",age:" "})
        function handleChange(event){
            const{name,value}=event.target
            setform((curr)=>{
                return {...curr,[name]:value};
            })
        }

        
        console.log(form)
  return (
    <div>
        <form>
        <h1>Forms:</h1>
        <label >Name : </label>
        <input type="text" value={form.name} onChange={handleChange} name="name" placeholder="Enter your name"/> 
        <label >Age : </label>
        <input type="text" value={form.age} onChange={handleChange} name="age" placeholder="Enter your age"/> 
        <button>ADD</button>
        </form>
        
    </div>
  )
}

export default Textbox;
