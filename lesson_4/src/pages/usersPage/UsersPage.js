import React, {Component} from 'react';
import UsersList from "../../components/usersList/UsersList";

class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    getUsers = () => {
        this.setState({users: ["dastan", "Anna", "Ali"]})
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>get users</button>
                <UsersList usersList={this.state.users}/>
            </div>
        );
    }
}

export default UsersPage;