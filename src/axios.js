import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-b41cb.cloudfunctions.net/api", // The API {cloud function} Function URL
  // /http://localhost:5001/challenge-b41cb/us-central1/api
});

export default instance;
