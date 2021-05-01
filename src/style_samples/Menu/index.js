import React, { Component } from 'react'
import PropTypes from 'prop-types'
import root from 'helpers/local_paths';
import { Link } from 'react-router-dom'


class CssMenu extends React.Component {

    render() {
        return (
            <div>
                styled components samples
                <ul>
                    <li> <Link to={root.css.composition}>composition </Link>  </li>
                </ul>
            </div>


        )
    }

}

export default CssMenu;