import React from 'react';

function FormPage(props) {
    return (
        <div>
            <input
                type="text"
                placeholder="username"
            />
            <input
                type="number"
                placeholder="age"
            />
            <input
                type="text"
                placeholder="position"
            />
        </div>
    );
}

export default FormPage;