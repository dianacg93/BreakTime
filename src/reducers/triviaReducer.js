import * as actions from '../actions/triviaActions';

export  const initialState = {
    trivia: [],
    loading: false,
    hasErrors: false
}

export default function triviaReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_TRIVIA:
            return{...state, loading: true}
        case actions.GET_TRIVIA_SUCCESS:
            return {...state, trivia:action.payload, loading: false}
        case actions.GET_TRIVIA_FAILURE:
            return {...state, hasErrors: true, loading: false}
        default:
            return state
    }
}