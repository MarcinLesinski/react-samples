import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmitButton } from 'theme/theme'
import { Redirect } from 'react-router-dom'
import { CurrentUserConsumer } from 'context/CurrentUser.context'


class Login extends Component {

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        return (
            <CurrentUserConsumer>
                {({ user, login, processing }) => (
                    <div>
                        {user && <Redirect to={from} />}
                        {
                            processing
                                ? <div> Processing... </div>
                                : <SubmitButton onClick={login} > Facebook login </SubmitButton>
                        }

                    </div>
                )}
            </CurrentUserConsumer>
        )
    }
}

export default Login;