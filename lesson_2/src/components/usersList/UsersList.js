import React from 'react';

function UsersList(props) {
    console.log(props)
    return (
        <>
            {props.usersList.map(user => <p>{user}</p>)}

        </>
    );
}

export default UsersList;