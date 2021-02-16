import * as actions from '../actions/factsAction';

export const initialState = {
    facts: {},
    loading: false,
    hasErrors: false
}

export default function factsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_FACTS:
            return { ...state, loading: true }
        case actions.GET_FACTS_SUCCESS:
            console.log("ACTION", action)
            return { ...state, facts: action.payload, loading: false }
        case actions.GET_FACTS_FAILURE:
            return { ...state, hasErrors: true, loading: false }
        default:
            return state
    }
}