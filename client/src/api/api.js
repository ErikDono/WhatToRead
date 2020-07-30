import axios from "axios";

export default {
  getAll: () => {
    return axios.get("/api/posts");
  },
  postAll: () => {
    return axios.post("/api/posts");
  },
};
