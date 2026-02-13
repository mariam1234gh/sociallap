import { api } from "./axios";

export const getAllPostsApi = () => api.get("/posts");
import { api } from "./axios";

export const getPostDetailsApi = (id) => api.get(`/posts/${id}`);
import { api } from "./axios";

export const createPostApi = (data) => api.post("/posts", data);
export const updatePostApi = (id, data) => api.put(`/posts/${id}`, data);
export const deletePostApi = (id) => api.delete(`/posts/${id}`);
