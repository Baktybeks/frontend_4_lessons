import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li>name</li>
                <li>age</li>
                {/*<h1>{this.props.name}</h1>*/}
            </ul>
        )
    }

}

export default ClassComponent;