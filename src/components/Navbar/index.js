import React from 'react'
import { CurrentUserConsumer } from 'context/CurrentUser.context'

class Navbar extends React.Component {
    render = () => {
        return (
            <CurrentUserConsumer>
                {({ user, login, logout }) => (
                    <div>
                        {user
                            ? <div> hello, {user.name} <button onClick={logout}> logout </button> </div>
                            : <div> login... <button onClick={login}> login </button> </div>
                        }
                    </div>
                )}

            </CurrentUserConsumer>
        )
    }
}

export default Navbar;