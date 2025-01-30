import React, { useState } from 'react';
import {Childcomp} from './child1';
export const Parentcomp = () => {
    const [msg,setmsg]=useState("Hi from parent")
    const[childmsg,setchildmsg]=useState('')
    const[grandmamsg,setgrandmamsg]=useState('')
    const onchange=(message,message2)=>
    {
        setchildmsg(message)
        setgrandmamsg(message2)
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <h1>{msg}</h1>
        <h2>{childmsg}</h2>
        <h2>{grandmamsg}</h2>
        <Childcomp msg={msg} datafromchild={onchange}/>
    </div>
  )
}
