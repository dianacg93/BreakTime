import axios from 'axios';

const BASE_URL = `https://uselessfacts.jsph.pl/random.json?language=en`

const fetchFactsApi = async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
}

export default fetchFactsApi;