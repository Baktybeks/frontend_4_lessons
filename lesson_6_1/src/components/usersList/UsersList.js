import React from 'react';
import {logDOM} from "@testing-library/react";

function UsersList({usersList}) {
    const getOneUserInfo = (event) => {
        const id = event.target.dataset.id
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }


    return (
        <ul>
            {
                usersList.map(user =>
                    <li key={user.id}>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <p>username: {user.username}</p>
                        <button
                            data-id={user.id}
                            onClick={getOneUserInfo}
                        >get information
                        </button>
                        <p>-----------------------------</p>
                    </li>
                )
            }
        </ul>
    );
}

export default UsersList;
