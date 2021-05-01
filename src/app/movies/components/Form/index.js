import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'app/movies/duck/actions'

class Form extends React.Component {

    movieInput = React.createRef()

    addMovie = (event) => {
        event.preventDefault()
        console.log(this.movieInput.current.value)
        this.props.add(this.movieInput.current.value)
        this.movieInput.current.value = ''
    }


    render() {
        return (
            <form onSubmit={this.addMovie}>
                <input ref={this.movieInput} />
                <button type='submit'> Add movie </button>

            </form>
        )
    }
}

const input = (state) => { }
const output = (dispatch) => ({
    add: movie => dispatch(actions.add(movie))
    // add: movie => dispatch(actions.add(movie))
})

export default connect(input, output)(Form)