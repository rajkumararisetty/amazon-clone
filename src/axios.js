import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
    baseURL: "https://us-central1-fir-21e28.cloudfunctions.net/api",
 	// baseURL: "http://localhost:5001/fir-21e28/us-central1/api",
});

export default instance;
