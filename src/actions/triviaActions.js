import axios from 'axios';

export const GET_TRIVIA = "GET_TRIVIA";
export const GET_TRIVIA_SUCCESS = "GET_TRIVIA_SUCCESS";
export const GET_TRIVIA_FAILURE = "GET_TRIVIA_FAILURE";
export const CHANGE_QUESTION = "CHANGE_QUESTION";
export const CHANGE_USERNAME = "CHANGE_USERNAME";
export const CHANGE_SCORE = "CHANGE_SCORE";
export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const PLAY_AGAIN = "PLAY_AGAIN";

export const getTrivia = () => ({
    type: GET_TRIVIA
})

export const getTriviaSuccess = (trivia) => ({
    type: GET_TRIVIA_SUCCESS,
    payload: trivia
})

export const getTriviaFailure = () => ({
    type: GET_TRIVIA_FAILURE
})

export const changeQuestion = (question) => ({
    type: CHANGE_QUESTION,
    payload: question
})

export const changeUsername = (username) => ({
    type: CHANGE_USERNAME,
    payload: username
})

export const changeScore = (score) => ({
    type: CHANGE_SCORE,
    payload: score
})

export const startGame = () => ({
    type: START_GAME,
})

export const endGame = () => ({
    type: END_GAME,
})

export const playAgain = () => ({
    type: PLAY_AGAIN,
})

export function fetchTrivia() {
    return async (dispatch) => {
        dispatch(getTrivia())
        try{
            const res = await axios.get(`https://opentdb.com/api.php?amount=10`)
            dispatch(getTriviaSuccess(res.data.results))
        }
        catch(e) {
            dispatch(getTriviaFailure())
        }
    }
}