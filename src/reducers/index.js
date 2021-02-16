import { combineReducers } from 'redux';
import triviaReducer from './triviaReducer'
import jokesReducer from './jokesReducer'

const rootReducer = combineReducers({
    trivia: triviaReducer,
    jokes: jokesReducer
})


export default rootReducer;