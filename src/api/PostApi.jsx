import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// GET method

export const getPost = () => {
  return api.get("/posts");
};

// DELETE method

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// POST method

export const postData = (post) => {
  return api.post("/posts", post);
};
