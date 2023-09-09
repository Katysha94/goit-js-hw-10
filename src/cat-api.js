import axios from "axios";
axios.defaults.headers.common["x-api-key"] = 'live_UtA83tKN466rb72Ooqw8yIc9JtTyJj1MlqLll5TbrGnYVUFyso6oNIUxkXedxdx3';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_UtA83tKN466rb72Ooqw8yIc9JtTyJj1MlqLll5TbrGnYVUFyso6oNIUxkXedxdx3';

export function fetchBreeds(){
    return axios
        .get(`${BASE_URL}/breeds?api_key=${API_KEY}`)
        .then(response => {
            console.log(response)
            if (response.status !== 200) {
                throw new Error(response.status);
            }
            return response.data;
        });
}

export function fetchCatByBreed(breedId) {
    return axios
        .get(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
        .then(response => {
            if (response.data) {
                return response.data;}
            throw new Error(response.status);
        });
}