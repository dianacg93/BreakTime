import axios from 'axios';

const BASE_URL = `https://opentdb.com/api.php?amount=10`

const fetchTriviaApi = async () => {
    const res = await axios.get(BASE_URL);
}

export default fetchTriviaApi;