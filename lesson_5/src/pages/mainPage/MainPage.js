import React, {Component} from 'react';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    getUsers = () => {
        this.setState({users: ["Anna", "John", "Mike"]})
    }

    componentDidMount() {
        this.getUsers()
    }

    componentDidUpdate(prevState) {
        console.log(this.state.users)

        if (prevState.users !== this.state.users) {
            console.log(this.state.users)
        }
    }

    render() {
        return (
            <>
                <h1>Main Page</h1>

                <ul>
                    {
                        this.state.users.map((user, index) =>
                            <li key={index}>{user}</li>)
                    }
                </ul>

            </>
        );
    }
}

export default MainPage;