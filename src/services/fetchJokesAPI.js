import axios from 'axios';

const BASE_URL = `https://v2.jokeapi.dev/joke/Any?safe-mode`

const fetchJokesApi = async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
}

export default fetchJokesApi;