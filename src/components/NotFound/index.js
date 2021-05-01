import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class NotFound extends Component {

    state = {
        counter: 10
    }

    countDown = () => this.setState({ counter: this.state.counter - 1 })

    startCounting = () => {
        const intervalId = setInterval(this.countDown, 1000);
        this.setState({ intervalId })
    }

    componentDidMount() {
        this.startCounting()
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    render() {
        const { counter } = this.state
        const { location } = this.props

        return (
            <div>
                <p>Page <code>{location.pathname} </code> not found</p>
                <p>Redirect to home page in {counter} seconds</p>
                {counter === 0 && <Redirect to='/' />}
            </div>

        )
    }
}

export default NotFound;