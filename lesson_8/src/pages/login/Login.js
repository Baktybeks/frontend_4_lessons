import React from 'react';
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    const login = () => {
        setTimeout(() => {
            navigate('/', {replace: true, state: 'Text'})
        }, 2000)
    }

    return (
        <div>
            <input type="text"/>
            <input type="text"/>
            <button onClick={login}>login</button>
        </div>
    );
}

export default Login;