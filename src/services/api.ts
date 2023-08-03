import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzie-contacts.onrender.com",
  timeout: 10000,
});
