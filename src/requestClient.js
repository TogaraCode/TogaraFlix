import axios from "axios";

/** base url to make requests to the movie database */
const requestClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default requestClient;
