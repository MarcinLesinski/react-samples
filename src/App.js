import React, { Component, createContext, useState, useEffect } from 'react'
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
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import rootReducer from './reducers'
import Movies from 'app/movies/components/Movies'
import { default as MoviesForm } from 'app/movies/components/Form'
import HookSamples from 'components/Hooks'
import SampleContext from 'context/SampleContext'
import Card from 'components/Card'
import Tooltip from 'components/Tooltip'
import Board from 'drag_n_drop'
import RamdaSamples from 'ramda-sample'
import MobxDemo from 'mobx-sample'
import useTheme from "theme/useTheme"
import GlobalStyles from "theme/GlobalStyles"
import WebFont from "webfontloader";
import ThemeSelector from "theme/components/ThemeSelector"
import CreateTheme from "theme/components/CreateTheme"

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

const Container = styled.div`
    padding: 0;
    margin: 5px auto 5px auto;
    width: 100%;
    height: 100vh;
`

// margin: 0;
// padding: 0;
// font - family: 'Source Sans Pro', sans - serif;
// background: #fff;

const App = () => {
    const { theme, themeLoaded, getFonts } = useTheme()
    const [selectedTheme, setSelectedTheme] = useState(theme)

    useEffect(() => {
        setSelectedTheme(theme)
    }, [themeLoaded])

    useEffect(() => {
        WebFont.load({
            google: {
                families: getFonts()
            }
        })
    })

    return (
        <>{themeLoaded &&
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyles />

                <SampleContext.Provider value={({ data1: 321, data2: '321' })}>
                    <Container style={{ fontFamily: selectedTheme.font }}>
                        <CreateTheme />
                        <ThemeSelector setter={setSelectedTheme} />
                        <Router>
                            <CurrentUserProvider>
                                <Navbar />
                                <Movies />
                                <MoviesForm />
                                <p> <Tooltip hint="role play game">rpg</Tooltip> to gry do których niezbęgny jest <Tooltip hint="mistrz gry">mg</Tooltip>  </p>
                                <Board />
                                <RamdaSamples />
                                <MobxDemo />
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
            </ThemeProvider>
        }</>
    );
}

export default App;
