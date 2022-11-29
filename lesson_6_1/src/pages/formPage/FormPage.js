import React, {useState} from 'react';

function FormPage(props) {
    const [userInfo, setUserInfo] = useState({
        username: "",
        age: "",
        position: ""
    })

    const changeInput = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })
    }

    const addUser = () => {
        if (userInfo.username === "") {
            alert("username empty")
        }else if (userInfo.age === "") {
            alert("age empty")
        }else if (userInfo.position === "") {
            alert("position empty")
        } else (console.log(userInfo))
    }
    return (
        <div>
            <input
                type="text"
                placeholder="username"
                name="username"
                onChange={changeInput}
            />
            <input
                type="number"
                placeholder="age"
                name="age"
                onChange={changeInput}
            />
            <input
                type="text"
                placeholder="position"
                name="position"
                onChange={changeInput}
            />
            <button onClick={addUser}>add user</button>
        </div>
    );
}

export default FormPage;

