import fetchFactsApi from "../services/fetchFactsAPI"

export const GET_FACTS = "GET_FACTS";
export const GET_FACTS_SUCCESS = "GET_FACTS_SUCCESS";
export const GET_FACTS_FAILURE = "GET_FACTS_FAILURE";

export const getFacts = () => ({
    type: GET_FACTS
})

export const getFactsSuccess = (joke) => ({
    type: GET_FACTS_SUCCESS,
    payload: joke
})

export const getFactsFailure = () => ({
    type: GET_FACTS_FAILURE
})

export function fetchFacts() {
    return async (dispatch) => {
        dispatch(getFacts())
        try {
            const res = await fetchFactsApi();
            console.log("RES", res)
            dispatch(getFactsSuccess(res))
        }
        catch (e) {
            dispatch(getFactsFailure())
        }
    }
}