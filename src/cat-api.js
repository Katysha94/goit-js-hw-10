import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_UtA83tKN466rb72Ooqw8yIc9JtTyJj1MlqLll5TbrGnYVUFyso6oNIUxkXedxdx3";

const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_UtA83tKN466rb72Ooqw8yIc9JtTyJj1MlqLll5TbrGnYVUFyso6oNIUxkXedxdx3";

export function fetchBreeds(){
    return axios
        .get(`${BASE_URL}/breeds`)
        .then(response => {
            console.log(response)
            if (response.status !== 200) {
                throw new Error(response.status);
            }
            return response.data;
        });
}
