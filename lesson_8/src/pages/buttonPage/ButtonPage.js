import React, {useEffect, useState} from 'react';
import './../../App.css';

function ButtonPage() {

    const [status, setStatus] = useState(false)

    useEffect(() => {
        console.log("push")
    },[status])

    function on () {
        setStatus(true)
    }

    function off () {
        setStatus(false)
    }



    return (
        <div className='App'>
            <button onClick={on}>on</button>
            <button onClick={off}>off</button>
        </div>
    );
}

export default ButtonPage;