import React from 'react'
import './home.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './slices/userslice'    

 const Home = () => {
    const dispatch=useDispatch()
    const [form,setForm]=useState({name:"",age:""});//i will put the from and setform in redux state
    function handleChange(event) {
        const { name, value } = event.target;  //destructuring
        setForm((curr) => {
          return {
            ...curr,
            [name]: value
          };
        });
      }
console.log(form)
const clicked=(event)=>{
    event.preventDefault();
    dispatch(addUser(form));
}
  return (
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNg4dN753m30kOpmfFQgrZXl214R1hGb3wgzqYb-UpRFFgzA2rSgh7uZ6yX05kdPjItk&usqp=CAU" alt="home" style={{marginTop: '20px'}}/>
        <form >
        <div class="form-element">
            <label for="name">Name:</label>
            </div>
            <div>
            <input type="text" value={form.name} onChange={handleChange} name="name" placeholder="Enter your name"/> 
            {/* value is js obj which can be destructred */}
            </div>
            <div>
            <label for="age">Age:</label>
            </div>
            <div>
            <input type="text" value={form.age} onChange={handleChange}name="age" placeholder="Enter your age"/>
            </div>
            <button type="submit" onClick={clicked}>Add</button>
        </form>
    </div>
  )
}
export default Home;
