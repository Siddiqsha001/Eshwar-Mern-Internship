import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
    const results = useSelector((state) => state.userinfo.users); // Access results from Redux

    return (
        <div>
            <img
                src="https://www.clipartmax.com/png/middle/449-4499317_person-icons-tablet-sign.png"
                alt="users"
            />
            <h1>Results</h1>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>Result: {result}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
