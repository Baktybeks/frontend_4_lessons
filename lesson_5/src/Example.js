import React, {useState} from 'react';

function Example() {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <>
            <h1>счетчик: {counter}</h1>
            <button className="btn btn-success"
                    onClick={increment}>Добавить
            </button>
            <button className="btn btn-danger"
                    onClick={decrement}>убрать
            </button>
        </>
    );
}

export default Example;