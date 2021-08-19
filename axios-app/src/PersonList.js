import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PersonList() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('/https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setUsers(response.data);
            })
    })
    return (
        <>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </>
    )
}
