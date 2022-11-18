import React from 'react';

function FormPage(props) {
    const sayHello = () => {
        alert("Hello world")
    }
    const getUsers = () => {
        // alert("Dastan Anna Amir")
    }
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    const handleBlur = (e) => {
        console.log(e.target.value)

        const user = {
            name: "Dastan",
            age: 26
        }
        console.log(JSON.stringify(user))
        // console.log(typeof JSON.stringify(user))
        // console.log(JSON.parse(JSON.stringify(user)))
        // console.log(typeof JSON.parse(JSON.stringify(user)))

    }
    return (
        <>
            <h1>Form Page</h1>
            <button onClick={sayHello}>say hello</button>
            <button onDoubleClick={getUsers}>get users</button>
            <h1>----------------------------------------</h1>
            <input type="text"
                   onChange={handleChange}
                   placeholder="onchange"/>
            <input type="text"
                   placeholder="onblur"
                   onBlur={handleBlur}/>
        </>
    );
}

export default FormPage;