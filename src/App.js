import React, { Component, createContext } from 'react'
import Data from "./Data"
import Array from "./components/ArraySample/Array"
import LifeCycleSample from "./components/LifeCycleSample"
import "./global.css"
import ApiTest from './components/ApiTest'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Editor from "./components/ArraySample/Editor"
import NotFound from "components/NotFound"
import Login from "components/Auth/Login"
import Navbar from 'components/Navbar'
import CssMenu from 'style_samples/Menu'
import Composition from 'style_samples/Composition'
import Sword from 'style_samples/Sword'
import root from 'helpers/local_paths'
import { CurrentUserProvider, CurrentUserConsumer } from 'context/CurrentUser.context'
import styled, { createGlobalStyle } from 'styled-components'
import rootReducer from './reducers'
import Movies from 'app/movies/components/Movies'
import { default as MoviesForm } from 'app/movies/components/Form'
import HookSamples from 'components/Hooks'
import SampleContext from 'context/SampleContext'
import Card from 'components/Card'
import Tooltip from 'components/Tooltip'
import Board from 'drag_n_drop'
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            <CurrentUserConsumer>
                {({ user }) => (
                    user
                        ? (<Component  {...props} />)
                        : (<Redirect to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }} />
                        )


                )}
            </CurrentUserConsumer>
        }
    />
)

const GlobalStyle = createGlobalStyle`
    body, html{
        height: 100%;
        margin: 0;
        padding: 0;
        background: #111111;
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
    }
`

const Container = styled.div`
    
    /* margin: auto auto; */
    /* display: flex; */
    /* justify-content: center; */
    
    /* align-self: center; */
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
`

// margin: 0;
// padding: 0;
// font - family: 'Source Sans Pro', sans - serif;
// background: #fff;

class App extends Component {

    state = {
        name: "aQuu",
        data: []
    }

    componentDidMount() {
        return
        fetch('http://localhost:8080/api/data')
            .then(response => response.json())
            .then((data) => {
                // console.log(data);
                this.setState({ data: data })
            });
    }

    render() {
        return (
            <SampleContext.Provider value={({ data1: 321, data2: '321' })}>
                <Container >
                    <GlobalStyle />
                    <Router>
                        <CurrentUserProvider>
                            <Navbar />
                            <Movies />
                            <MoviesForm />
                            <p> <Tooltip hint="role play game">rpg</Tooltip> to gry do których niezbęgny jest <Tooltip hint="mistrz gry">mg</Tooltip>  </p>
                            <Board />
                            <Card />
                            <HookSamples initialCount={5} />
                            <Switch>
                                <Route exact path="/" component={Array} />
                                <PrivateRoute path="/items/:itemId" component={Editor} />
                                <Route path="/login" component={Login}></Route>
                                <Route exact path="/test" component={ApiTest} />
                                <Route exact path={root.css._} component={CssMenu} />
                                <Route exact path={root.css.composition} component={Composition} />
                                <Route exact path={root.css.sword} component={Sword} />

                                <Route component={NotFound} />

                            </Switch>

                        </CurrentUserProvider>
                    </Router>
                </Container>
            </SampleContext.Provider>
            // <div>
            //     <ApiTest />
            //     <Array />
            //     <LifeCycleSample name="circle of life" />
            //     {/* {this.state.data.map(data => <Data key={data.id} title='props_title' info={data} />)} */}
            // </div>
        );
    }
}

export default App;
