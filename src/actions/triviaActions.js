import axios from 'axios';

export const GET_TRIVIA = "GET_TRIVIA";
export const GET_TRIVIA_SUCCESS = "GET_TRIVIA_SUCCESS";
export const GET_TRIVIA_FAILURE = "GET_TRIVIA_FAILURE";

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