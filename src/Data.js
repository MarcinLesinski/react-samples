import React, { Component } from 'react'

class Data extends Component {

    render() {
        return (
            <div>
                <p>-------------------</p>
                <p>{this.props.title}</p>
                <p>{this.props.info.text}</p>
                <p>{this.props.info.number}</p>
                <p>{this.props.info.bool}</p>
                <p>{this.props.info.enum}</p>
                <button>usuń</button>
            </div>
        )
    }

}

export default Data;