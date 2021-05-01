import React, { Component } from 'react'

class ApiTest extends Component {

    state = {
        text: ""
    }

    stringifyTest = () => {
        const body = { text: "oko", number: 123, bool: true }
        this.setState({ text: JSON.stringify(body) })
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.stringifyTest} >test</button>
            </div>
        )
    }
}

export default ApiTest;