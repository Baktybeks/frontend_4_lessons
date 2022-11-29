import React, {useEffect, useState} from 'react';

function MainPage(props) {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    useEffect(()=> {
        document.title = `Вы нажали ${count} раз`
    })
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </>
    );
}

export default MainPage;