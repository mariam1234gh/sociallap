import { api } from "./axios";

export const createCommentApi = (postId, data) =>
  api.post(`/posts/${postId}/comments`, data);

export const updateCommentApi = (commentId, data) =>
  api.put(`/comments/${commentId}`, data);

export const deleteCommentApi = (commentId) =>
  api.delete(`/comments/${commentId}`);
