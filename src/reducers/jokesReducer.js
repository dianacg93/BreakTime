import * as actions from '../actions/jokesActions';

export  const initialState = {
    joke: {},
    loading: false,
    hasErrors: false
}

export default function jokesReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_JOKE:
            return{...state, loading: true}
        case actions.GET_JOKE_SUCCESS:
            return {...state, joke:action.payload, loading: false}
        case actions.GET_JOKE_FAILURE:
            return {...state, hasErrors: true, loading: false}
        default:
            return state
    }
}