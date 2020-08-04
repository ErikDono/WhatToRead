import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  getBooks: (query) => {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        query +
        "&key=AIzaSyB_qVUwrTtb7vLduMA6jovLXJTJW8UBiIE"
    );
  },
  getSaved: () => {
    return axios.get("/api/posts");
  },
  postSaved: (data) => {
    return axios.post("/api/posts", data);
  },
};
