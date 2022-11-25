import React from 'react';

function User(props) {
    return (
        <>
            <p>name: {props.userInfo.name}</p>
            <p>username: {props.userInfo.userName}</p>
            <p>age: {props.userInfo.age}</p>
        </>
    );
}

export default User;