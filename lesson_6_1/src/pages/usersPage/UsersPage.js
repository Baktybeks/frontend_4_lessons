import React, {useState} from 'react';
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(data => setUsers(data))
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