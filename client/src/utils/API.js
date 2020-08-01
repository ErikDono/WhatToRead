import axios from "axios";

export default {
  getBooks: (query) => {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyB_qVUwrTtb7vLduMA6jovLXJTJW8UBiIE")
  },
  getSaved: ()=>{

    return axios.get("/api/posts")
  },
  postAll: () => {
    return axios.post("/api/posts");
  },
};
