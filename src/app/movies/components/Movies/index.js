import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Movies extends React.Component {
    render() {
        const { movies } = this.props
        return (
            <div>
                <ul>
                    {movies.list.map(item => <li> {item} </li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        movies: state.movies
    }
)

export default connect(mapStateToProps, {})(Movies)