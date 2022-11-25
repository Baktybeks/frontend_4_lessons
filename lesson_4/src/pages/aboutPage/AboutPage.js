import React from "react";
import {Menu} from "../../components/menu/Menu";

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menu: false}
    }

    handleMenu = () => {
        this.setState({menu: !this.state.menu})
    }

    render() {
        return (
            <>
                <h1>About page</h1>
                <button onClick={this.handleMenu}>menu</button>
                {this.state.menu && <Menu/>}
                {/*// this.state.menu && <Menu/>*/}
                {/*// this.state.menu === true*/}
                {/*// ?*/}
                {/*// <Menu/>*/}
                {/*// :*/}
                {/*// ""*/}
                <Menu status={this.state.menu}/>


            </>
        )
    }
}
export default AboutPage;