import axios from 'axios';
import fetchJokesApi from "../services/fetchJokesAPI"

export const GET_JOKE = "GET_JOKE";
export const GET_JOKE_SUCCESS = "GET_JOKE_SUCCESS";
export const GET_JOKE_FAILURE = "GET_JOKE_FAILURE";

// console.log("API",fetchJokesApi())

export const getJoke = () => ({
    type: GET_JOKE
})

export const getJokeSuccess = (joke) => ({
    type: GET_JOKE_SUCCESS,
    payload: joke
})

export const getJokeFailure = () => ({
    type: GET_JOKE_FAILURE
})

export function fetchJoke() {
    return async (dispatch) => {
        dispatch(getJoke())
        try{
            // const res = await axios.get(`https://v2.jokeapi.dev/joke/Any`)
            const res = await fetchJokesApi();
            console.log("RES", res)
            dispatch(getJokeSuccess(res))
        }
        catch(e) {
            dispatch(getJokeFailure())
        }
    }
}