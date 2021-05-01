import React, { Component } from 'react'

class LifeCycleSample extends Component {

    state = {
        show: false
    }

    render() {
        const { show } = this.state

        return (
            <div>
                <p>life cycle sample - look at console</p>
                <button onClick={() => this.setState({ show: !show })}>toogle</button>
                <button onClick={() => console.clear()}> clear console </button>
                {show ? <LifeCycleItem /> : <div />}
            </div>
        )
    }
}

class LifeCycleItem extends Component {

    constructor(props) {
        super(props)
        console.log(`create ${props.name}`)
    }

    componentDidMount = () => {
        console.log(`mounted ${this.props.name}`)
    }

    componentDidUpdate = () => {
        console.log(`updated ${this.props.name}`)
    }

    componentWillUnmount = () => {
        console.log(`going to unmount ${this.props.name}`)
    }

    state = {
        toogle: false
    }

    render() {
        return (
            <div onClick={() => this.setState({ toggle: !this.state.toggle })}>
                item {this.state.toggle ? "on" : "off"}
            </div>
        )
    }
}

export default LifeCycleSample;