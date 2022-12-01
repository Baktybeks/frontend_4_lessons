import React, {useEffect, useState} from 'react';
import User from "../../components/user/User";
import './../../App.css';
import {Container, Row} from "react-bootstrap";


function UsersPage(props) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getUsers = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }
    useEffect(getUsers, [])

    return (
        <div className="App">
            <h1>users</h1>
            <Container>
                <Row>
                    {
                        loading === true
                            ?
                            <div>загружается</div>
                            :
                            users.map(user => <User info={user}/>)
                    }
                </Row>
            </Container>


        </div>
    );
}

export default UsersPage;