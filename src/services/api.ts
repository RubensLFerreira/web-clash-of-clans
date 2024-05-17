import axios from "axios";

const API_TOKEN: string = "your-256-bit-secret";
const BASE_URL: string = "https://api.clashofclans.com/v1";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
