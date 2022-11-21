import React from 'react';

function UsersList({usersList}) {
    return (
        <ul>
            {
                usersList.length > 0
                    ?
                    usersList.map((user, index) => <li key={index}>{user}</li>)
                    :
                    <li>Список имен пуст</li>
            }
        </ul>
    );
}

export default UsersList;