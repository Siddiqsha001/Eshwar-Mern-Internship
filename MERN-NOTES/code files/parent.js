import {React,useState} from 'react';
import { ChildComponent } from './child';

export const ParentComponent = () => {
    const parent_message="Hello from parent";
    const[child_message, setChildMessage] = useState('Hai');
    
    const datafromchildd = (message)=>{
    setChildMessage(message);
}
    return (
        <div>
            <h1>Parent Component</h1>
            <p>Data from Parent : {parent_message}</p>
            <p>Data from Child : {child_message}</p>
            <ChildComponent msg={parent_message} data_for_parent_from_child ={datafromchildd} /> 
        </div>
    );
};