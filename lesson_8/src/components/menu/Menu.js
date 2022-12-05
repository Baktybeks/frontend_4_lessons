import React from 'react';
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <ul className="menu">
            <li>
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        isActive ? "active" : ""}
                >
                    users
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/button"
                    className={({isActive}) =>
                        isActive ? "active" : ""}
                >
                    buttons
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/main"
                    className={({isActive}) =>
                        isActive ? "active" : ""}
                >
                    main
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/posts"
                    className={({isActive}) =>
                        isActive ? "active" : ""}
                >
                    posts
                </NavLink>
            </li>
        </ul>
    );
}

export default Menu;