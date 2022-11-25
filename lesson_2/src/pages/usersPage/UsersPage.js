import React from 'react';
import User from "../../components/user/User";
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {
    const user = {
        name: "Baktybek",
        userName: "biseb",
        age: 37
    }

    const users = ['Dastan', 'Ali', 'Amir','Anna','John']

    return (
        <>
            <h1>Info about one user</h1>
            <User userInfo={user}/>
            <h1>------------------------------</h1>
            <h1>users list</h1>
            <UsersList usersList={users}/>
        </>
    );
}

export default UsersPage;