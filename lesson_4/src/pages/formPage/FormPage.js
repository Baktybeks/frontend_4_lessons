import React, {Component} from 'react';

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    changeInput = (e) => {
        console.log(e.target.value)
        this.setState({input: e.target.value})
    }

    addProduct = () => {
        this.setState({input: ""})
        console.log(this.state)

    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.input}
                       onChange={this.changeInput}
                       placeholder="product"/>
                <button onClick={this.addProduct}>add</button>
                <button onClick={() => this.setState({input: ""})}>clear</button>
            </div>
        );
    }
}

export default FormPage;