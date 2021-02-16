import { combineReducers } from 'redux';
import triviaReducer from './triviaReducer'
import jokesReducer from './jokesReducer'
import factsReducer from './factsReducer'


const rootReducer = combineReducers({
    trivia: triviaReducer,
    jokes: jokesReducer,
    facts: factsReducer
})


export default rootReducer;