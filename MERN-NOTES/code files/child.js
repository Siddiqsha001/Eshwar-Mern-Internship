import React, { useState } from 'react';
export const ChildComponent = (props , data_for_parent_from_child) => {
    const [child_message, setChildMessage] = useState("Hello from Child");
    const send_message = () => {
        props.data_for_parent_from_child(child_message); 
    }
    return (
        <div>
            <h1>Child Component</h1>
            <p>Data from Parent: {props.msg}</p>
            <button onClick={send_message}>Send data to Parent</button>
        </div>
    );
};
