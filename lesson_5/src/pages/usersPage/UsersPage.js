import React, {useState} from 'react';

import {UsersList} from "../../components/usersList/UsersList";

const usersFromBack = [
    {
        id: 1,
        name: "Bakyt",
        age: "37"
    },
    {
        id: 2,
        name: "Anna",
        age: "24"
    },
    {
        id: 3,
        name: "John",
        age: "34"
    }
]


function UsersPage() {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        setUsers(usersFromBack)
    }


    return (
        <>
            <h1>Users list</h1>
            <button onClick={getUsers}>get users</button>
            <UsersList usersList={users}/>
        </>
    );
}

export default UsersPage;