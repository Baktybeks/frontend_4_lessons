import React from 'react';

export function Menu({status}) {
    return (
        <ul className={status ? "menu" : "notMenu"}>
            <li>home</li>
            <li>about</li>
            <li>contacts</li>
        </ul>
    );
}

