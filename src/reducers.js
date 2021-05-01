import { combineReducers } from 'redux'
import { default as actorsReducer } from 'app/actors/duck'
import { default as moviesReducer } from 'app/movies/duck'

const rootReducer = combineReducers({
    movies: moviesReducer,
    actors: actorsReducer
})

export default rootReducer