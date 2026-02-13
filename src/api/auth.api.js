import { api } from "./axios";

export const changePasswordApi = (data) =>
  api.patch("/users/change-password", data);
export const getProfileApi = () => api.get("/users/profile");

