import React, { useState } from 'react';
import { GrandParentComponent } from './grandparent';
export const Childcomp = ({ msg, datafromchild }) => {
    const [child_msg, setchildmsg] = useState("hello from child");
    const [grandmamsg, setgrandmamsg] = useState('');

    const onchange3 = (message3, message4) => {
        setgrandmamsg(message3);
        datafromchild(child_msg, message4);
    };

    const sendmsgtoparent = () => {
        datafromchild(child_msg);
    };
    return (
        <div>
            <h1>Child component</h1>
            <h2>Data from parent: {msg}</h2>
            <h2>Data from grandmother: {grandmamsg}</h2>
            <button onClick={sendmsgtoparent}>Send to parent</button>
            <GrandParentComponent msg={grandmamsg} datafromgrandmother={onchange3} />
        </div>
    );
};



