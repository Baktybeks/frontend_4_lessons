import React from 'react';
import Title from "../../components/title/Title";
import TitleSecond from "../../components/titleSecond/TitleSecond";
import TitleThird from "../../components/titleThird/TitleThird";

function MainPage() {
    return (
        <>
            <h1>Main Page Component</h1>
            <Title/>
            <TitleSecond/>
            <TitleThird/>
        </>
    );
}

export default MainPage;