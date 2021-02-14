import * as actions from '../actions/triviaActions';

export  const initialState = {
    trivia: [],
    loading: true,
    hasErrors: false,
    userChoice: "",
    questionIndex: 0,
    score: 0,
    gameStarted: false,
    gameEnded: false,
    userName: ""
}

export default function triviaReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_TRIVIA:
            return{...state, loading: true}
        case actions.GET_TRIVIA_SUCCESS:
            return {...state, trivia:action.payload, loading: false}
        case actions.GET_TRIVIA_FAILURE:
            return {...state, hasErrors: true, loading: false}
        case actions.CHANGE_USERNAME:
            return {...state, userName: action.payload}
        case actions.CHANGE_QUESTION:
            return {...state, questionIndex: action.payload}
        case actions.CHANGE_SCORE:
            return {...state, score: state.score + action.payload}
        case actions.START_GAME:
            return {...state, gameStarted: true, gameEnded: false}
        case actions.END_GAME:
            return {...state, gameEnded: true, trivia: []}
        case actions.PLAY_AGAIN:
            return {...state, loading: true, hasErrors: false, userChoice: "", questionIndex: 0, score: 0, gameStarted: true, gameEnded: false};
        default:
            return state
    }
}