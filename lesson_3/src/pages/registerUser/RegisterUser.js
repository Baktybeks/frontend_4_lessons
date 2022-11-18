import React from 'react';

function RegisterUser(props) {
    const registerUser = (e) => {
        e.preventDefault();
        alert("user registered")
    }
    return (
        <div>
            <h1>Регистрация пользователя</h1>
            <form onSubmit={registerUser}>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="age"/>
                <input type="text" placeholder="lastName"/>
                <button type="submit">register</button>
            </form>
        </div>
    );
}

export default RegisterUser;