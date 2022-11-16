import React from 'react';
import {Logo, Menu} from "../../components/someComponents/SomeComponents";

function MainPage(props) {
    return (
        <>
            <Logo/>
            <h1>Main Page</h1>
            <Menu/>
        </>
    );
}

export default MainPage;